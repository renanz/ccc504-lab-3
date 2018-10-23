import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import promise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import './styles.css';

import { getImage } from './actions';

// Tip: check this post: https://www.javascriptjanuary.com/blog/may-cause-side-effects-how-to-implement-redux-sagas-as-middleware

// Tip: replace the thunk and promise middleware with the redux-saga middleware

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    ),
  );

  sagaMiddleware.run(sagas);

  store.dispatch(getImage());

  return {
    ...store
    // Tip: you have to add something here from redux-saga
  }
}

export default configureStore
