import { all } from 'redux-saga/effects';

import { productSaga } from '../saga/Products/Products.Saga';

export default function* rootSaga() {
  yield all([productSaga()]);
}
