import {all} from 'redux-saga/effects';
import {UsersSagas} from './services/users'; // import sagas

export default function* root() {
  yield all([
    UsersSagas(),
    // LoginSagas(), // add sagas to root
  ]);
}
