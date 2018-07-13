import React from 'react';
//import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
//import configureStore from "./store/configureStore";

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const store = configureStore();

// const jsx = (
//   <Provider store = {store}>
//     <AppRouter />
//   </Provider>
// );

ReactDOM.render(<AppRouter />, document.getElementById("app"));

