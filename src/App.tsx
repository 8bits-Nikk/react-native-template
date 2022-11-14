import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './App.reducer';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import root from './App.saga';
import MainNavigator from './navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {setI18nConfig} from './translation';

setI18nConfig();

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(root);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
