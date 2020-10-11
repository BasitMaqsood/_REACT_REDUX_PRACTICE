import React from 'react';
import { Provider } from 'react-redux';

import CakeContainer from './components/CakeComtainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContaier from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContaier />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
