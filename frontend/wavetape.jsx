import React from 'react';
import ReactDOM from 'react-dom';

import configStore from './store/store';
import Root from './components/root';

import { createFollow, destroyFollow } from './actions/follow_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.createFollow = createFollow;
  window.destroyFollow = destroyFollow;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
})