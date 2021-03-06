export default `
uniform float time;
uniform float aspect;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

struct Ray
{
	vec3 org;
	vec3 dir;
};

struct VolData
{
    vec3 bgCol;
    vec3 fgCol;
};
	
struct Hit
{
	float dist;
	float index;
};

float hash(vec2 p)
{
    return fract(sin((mod(p.x*p.y*87328.24,1.0)+mod(p.y*923.123,1.0)))*34345.965 );
}

float sphere(vec3 pos)
{
    return length(pos) - 3.;
}
	
Hit scene(vec3 pos)
{
	return Hit(sphere(pos), 0.);
}

Hit raymarch(Ray ray)
{
	vec3 pos;
	Hit hit;
	hit.dist = 0.;
	Hit curHit;
	for (int i = 0; i < 30; i++)
	{
		pos = ray.org + hit.dist * ray.dir;
		curHit = scene(pos);
		hit.dist += curHit.dist;
	}
	hit.index = curHit.index;
	hit.index = curHit.dist < 0.01 ? hit.index : -1.4;
	return hit;
}

vec3 calcNormal(vec3 pos)
{
	vec3 eps = vec3( 0.001, 0.0, 0.0 );
	vec3 nor = vec3(
	    scene(pos+eps.xyy).dist - scene(pos-eps.xyy).dist,
	    scene(pos+eps.yxy).dist - scene(pos-eps.yxy).dist,
	    scene(pos+eps.yyx).dist - scene(pos-eps.yyx).dist );
	return normalize(nor);
}

vec3 starStart = vec3(-3.,15.,-10.);
vec3 starEnd = vec3(3.3,-3.,8.);

vec3 foreStarPos()
{
    float t = fract(time/4.);
    return mix(starStart,starEnd,t);
}

float foreStarDist()
{
    return max(0., length(foreStarPos()) - 4.);
}

vec4 render(Ray ray)
{
	Hit hit = raymarch(ray);
	vec3 pos = ray.org + hit.dist*ray.dir;
	vec3 surfaceCol = vec3(0.1,0.3,.3);
	vec3 specCol = vec3(0.6,0.4,.3);
	vec3 col = vec3(0.);
	if (hit.index != -1.)
	{
		vec3 nor = calcNormal(pos);
		vec3 l = normalize(foreStarPos() - pos);
        float inten = max(0.,1.-length(foreStarPos() - pos)/10.);
		col = surfaceCol;
		
		float diff = clamp(dot(nor,l),0.,1.);
		vec3 r = normalize(2.*dot(nor,l)*nor-l);
		vec3 v = normalize(ray.org-pos);
		float spec = clamp(dot(v,r),0.,1.);
		col = (diff*col + pow(spec,10.)*specCol)*inten + inten;
	}
	return vec4(col, hit.index);
}

vec3 glow(Ray ray)
{
	float minDist = length(ray.org - ray.dir * dot(ray.dir, ray.org)) - 3.;
	float inten = max(0.1, 1.-pow(foreStarDist()*.3, 0.8));
	float noi = sin(time*2. + sin(time*2.2)*2.) + 1.;
	return vec3(0.8, 0.2, 0.5)/pow(minDist, 1.) * (inten+noi/15.) * 0.1;
}

float foreIntensity(vec3 pos)
{
    vec3 dir = starEnd - starStart;
    vec3 c = foreStarPos();
    vec3 p = pos-c;
    float a = 0.8;
    p.yz *= mat2(cos(a), sin(a), -sin(a), cos(a));
    vec3 stretch = p.z > 0. ? vec3(1.) : vec3(1.,1.,0.1);
    float dist = length(p*stretch);
    return max(0., 2.-dist*4.);
}

float backIntensity(vec3 pos, vec3 center, float speed, float spacing)
{
    pos -= center;
    pos.z -= speed*time;
    pos.z += spacing/2.;
    pos.z = mod(pos.z, spacing);
    pos.z -= spacing/1.6;
    vec3 stretch = pos.z > 0. ? vec3(1.) : vec3(1.,1.,.05);
    float dist = length(pos*stretch);
    return max(0., 2.-dist*2.);
}

VolData shootingStars(Ray ray)
{
    float dist = 0.;
    vec3 p;
    float bIntensity = 0.;
    float a = 0.8;
    for (float i = 0.; i < 50.; i+=1.)
    {
        p = ray.org + ray.dir * dist * i;
        dist += 0.01;
        p.yz *= mat2(cos(a), sin(a), -sin(a), cos(a));
        bIntensity += backIntensity(p, vec3(-8., -1., 0.), 14., 170.);
        bIntensity += backIntensity(p, vec3(-9., 12., 0.), 14., 160.);
        bIntensity += backIntensity(p, vec3(-13., 20., 0.), 20., 180.);
        bIntensity += backIntensity(p, vec3(-13., 5., 0.), 30., 190.);
    }
    VolData v;
    v.bgCol = vec3(.8,.1,.4) * bIntensity*0.6;
    v.bgCol += vec3(.8,.1,.5) * pow(hash(ray.dir.zy), 60.);
   
    return v;
}

Ray createRay(vec3 center, vec3 lookAt, vec3 up, vec2 uv, float fov, float aspect)
{
	Ray ray;
	ray.org = center;
	vec3 dir = normalize(lookAt - center);
	up = normalize(up - dir*dot(dir,up));
	vec3 right = cross(dir, up);
	uv = 2.*uv - vec2(1.);
	fov = fov * 3.1415/180.;
	ray.dir = dir + tan(fov/2.) * right * uv.x + tan(fov/2.) / aspect * up * uv.y;
	ray.dir = normalize(ray.dir);	
	return ray;
}

vec2 quantize(vec2 uv, float steps)
{
    return uv - fract(uv*steps)/steps;
}

vec3 quantizeColor(vec3 col, vec2 uv)
{
    vec3 noi = vec3(hash(uv + vec2(0.3,0.)*sin(time)),
                    hash(uv+ vec2(0.3)*sin(time)),
                    hash(uv+ vec2(0.,.3)*sin(time))) - 0.5;
    col += noi/5.;
    return col - fract(col*5.)/5.;
}

void main() {
	vec2 uv = vUv; // fragCoord / iResolution.xy;
	vec3 cameraPos = vec3(3.,5.,0.);
	vec3 lookAt = vec3(0.1,5.8,0.);
	vec3 up = vec3(0.,1.,0.);
	vec2 uvQuant = quantize(uv, 64.);
	Ray rayQuant = createRay(cameraPos, lookAt, up, uvQuant, 90., aspect);
	Ray ray = createRay(cameraPos, lookAt, up, uv, 90., aspect);
	vec4 col = render(rayQuant);
	vec3 glowCol = glow(rayQuant);
	VolData shots = shootingStars(rayQuant);
	col.rgb += (glowCol + shots.bgCol) * col.w * -1. + shots.fgCol;
	col.rgb = quantizeColor(col.rgb, uvQuant);
	gl_FragColor = vec4(col.rgb,1.0);
}
`;
