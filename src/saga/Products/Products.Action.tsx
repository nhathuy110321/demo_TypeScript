import { IFetchSuccessPayload, IProductParams } from '../../types/common';
import IProduct from '../../types/product';
import * as Types from './Products.Type';

// Định nghĩa các action types
export const fetchRequest = (params: IProductParams) => ({
  type: Types.FETCH_REQUEST,
  params
});
export const fetchSuccess = (payload: IFetchSuccessPayload) => ({
  type: Types.FETCH_SUCCESS,
  payload
});

export const patchRequest = (params: IProduct) => ({
  type: Types.PATCH_REQUEST,
  params
});
export const patchSuccess = (payload: IFetchSuccessPayload) => ({
  type: Types.PATCH_SUCCESS,
  payload
});
// export const patchFailure = (error) => ({ type: Types.PATCH_FAILURE, error })

// export const getRequest = (params) => ({ type: Types.GET_REQUEST, params })
// export const getSuccess = (payload) => ({ type: Types.GET_SUCCESS, payload })
// export const getFailure = (error) => ({ type: Types.GET_FAILURE, error })

export const deleteRequest = (params: string) => ({
  type: Types.DELETE_REQUEST,
  params
});

export const deleteSuccess = (payload: IFetchSuccessPayload) => ({
  type: Types.DELETE_SUCCESS,
  payload
});
// export const deleteFailure = (error) => ({ type: Types.DELETE_FAILURE, error })

// export const fetchFailure = (error) => ({ type: Types.FETCH_FAILURE, error })
