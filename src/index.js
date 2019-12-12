import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
// ルーターの設定
import { createBrowserHistory } from 'history'
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// historyインスタンスを作成する処理追加
const history = createBrowserHistory();

// Storeを作成する
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  // applyMiddleware関数でredux-loggerを設定
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger
  )
);

render(
  <React.Fragment>
    <Provider store={store}>
      {/*ConnectedRouterコンポーネントを追加*/}
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
