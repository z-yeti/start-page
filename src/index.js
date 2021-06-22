import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { config } from './lib/firebase';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <App />
      </FirebaseAuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
