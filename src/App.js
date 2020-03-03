import React from 'react';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import allReducers from "./reducers";
import MainPage from "./components/MainPage";
import './css/common.css';

const mainStore = createStore(allReducers);

function App() {
  return (
    <div>
      <Provider store={mainStore}>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
