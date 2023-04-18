import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { createStore } from "redux";
import { allReducers } from "./Reducers";
import { Provider } from "react-redux";

const store = createStore(allReducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={store}>
  <App />
  </Provider>
  );
