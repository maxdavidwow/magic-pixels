import { Outlet } from 'solid-app-router';
import type { Component } from 'solid-js';
import Menu from './elements/Menu';
import NetherBack from './elements/NetherBack';
import Wallet from './elements/Wallet';

import tooltip from './helpers/tooltip';
false && tooltip;

const App: Component = () => {
  return <>
    <NetherBack />
    <div use:tooltip={'Test test test'} className="absolute h-12 w-12 bg-green-200" />
    {/*
    <div className='absolute h-[100vh] w-[100vw] grid grid-rows-[1fr,min-content]'>
      <div className='grid'>
        <Outlet />
      </div>
      <Menu />
    </div>
    <div className='absolute right-0 top-0'>
      <Wallet />
    </div> */}
  </>;
};

export default App;

// THIS IS FOR THE DEMO
if (!localStorage.getItem('plates')) {
  // eslint-disable-next-line max-len
  localStorage.setItem('plates', '[[[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143],[143],[143],[143],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143],[143],[143],[143],[143],[143],[143],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143],[143],[143],[146],[146],[143],[143],[143],[143],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[146],[146],[146],[146],[146],[146],[146],[143],[143],[143],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[146],[146],[146],[146],[146],[146],[146],[146],[146],[146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[146],[146],[146],[148],[148],[148],[148],[146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[148],[148],[148],[148],[148],[148],[148],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[148],[148],[148],[148],[148],[150],[150],[148],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[148],[148],[148],[150],[150],[150],[150],[150],[150],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[150],[150],[150],[150],[150],[150],[150],[150],[150],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[150],[150],[150],[150],[150],[150],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146],[143,144,146]],[[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[143],[143],[143],[143],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[143],[143],[143],[143],[143],[143],[143],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[143],[143],[143],[146],[146],[143],[143],[143],[143],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[146],[146],[146],[146],[146],[146],[146],[143],[143],[143],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[146],[146],[146],[146],[146],[146],[146],[146],[146],[146],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[146],[146],[146],[148],[148],[148],[148],[146],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[148],[148],[148],[148],[148],[148],[148],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[148],[148],[148],[148],[148],[150],[150],[148],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[148],[148],[148],[150],[150],[150],[150],[150],[150],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[150],[150],[150],[150],[150],[150],[150],[150],[150],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[150],[150],[150],[150],[150],[150],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207],[205,207]],[[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[143],[143],[143],[143],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[143],[143],[143],[143],[143],[143],[143],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[143],[143],[143],[146],[146],[143],[143],[143],[143],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[146],[146],[146],[146],[146],[146],[146],[143],[143],[143],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[146],[146],[146],[146],[146],[146],[146],[146],[146],[146],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[146],[146],[146],[148],[148],[148],[148],[146],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[148],[148],[148],[148],[148],[148],[148],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[148],[148],[148],[148],[148],[150],[150],[148],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[148],[148],[148],[150],[150],[150],[150],[150],[150],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[150],[150],[150],[150],[150],[150],[150],[150],[150],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[150],[150],[150],[150],[150],[150],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87],[85,87]]]');
}
