import { takeEvery, put, call, select } from 'redux-saga/effects';

import * as Types from './Products.Type';
import * as Actions from './Products.Action';
import API from './Products.Api';

import { IProductParams, IResponse } from '../../types/common';
import IProduct from '../../types/product';

function* fetchSaga({ params }: any) {
  try {
    console.log(params);
    const oldParams: IProductParams = yield select((state: any) => state.product.params);
    const response: {
      data: IProduct[];
      pagination: { totalProducts: number; currentPage: number };
    } = yield call(API.fetch, {
      ...oldParams,
      ...params
    });
    const { totalProducts, currentPage } = response.pagination;

    const result = {
      products: response.data,
      pagination: {
        totalProducts: totalProducts,
        currentPage
      },
      params: { ...oldParams, ...params }
    };
    if (response) {
      yield put(Actions.fetchSuccess(result));
    }
  } catch (error: any) {
    console.log('Error');

    // const { data, status } = error.response;
    // yield put(
    //   Actions.fetchFailure({
    //     status: status || error?.status,
    //     statusText: data || error?.statusText,
    //   })
    // );
  }
}

// function* getSaga({ params }) {
//   try {
//     const response = yield call(API.get, params?.id);
//     if (response) {
//       yield put(Actions.getSuccess(response));
//     }
//   } catch (error) {
//     const { data, status } = error.response;
//     yield put(
//       Actions.getFailure({
//         status: status || error?.status,
//         statusText: data || error?.statusText,
//       })
//     );
//   }
// }
function* deleteSaga({ params }: any) {
  try {
    const response: IResponse<IProduct> = yield call(API.delete, params);
    console.log(response);
    if (response?.status === 'OK') {
      yield fetchSaga({
        category: '',
        limit: 12,
        page: 1,
        search: ''
      });
    }
  } catch (error) {
    // const { data, status } = error.response;
    // yield put(
    //   Actions.deleteFailure({
    //     status: status || error?.status,
    //     statusText: data || error?.statusText
    //   })
    // );
  }
}
function* patchSaga({ params }: any) {
  console.log(params);

  try {
    if (params?._id) {
      yield call(API.patch, params);
    } else {
      yield call(API.post, params);
    }

    yield put(Actions.fetchRequest({ page: 1, limit: 12 }));
  } catch (error) {
    // const { data, status } = error.response;
    // yield put(
    // Actions.patchFailure({
    //   status: status || error?.status,
    //   statusText: data || error?.statusText
    // })
    // );
  }
}
export function* productSaga() {
  yield takeEvery(Types.FETCH_REQUEST, fetchSaga);
  yield takeEvery(Types.PATCH_REQUEST, patchSaga);
  yield takeEvery(Types.DELETE_REQUEST, deleteSaga);

  // yield takeEvery(Types.GET_REQUEST, getSaga);
}
