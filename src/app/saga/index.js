import { all, fork } from 'redux-saga/effects';

import dashboard from '../component/dashboard/saga';

const allSaga = [
  fork(dashboard),
];

export default function* rootSaga() {
  yield all([...allSaga]);
}
