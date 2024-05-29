import IProduct from './product';

export interface IResponse<T> {
  status: string;
  message: string;
  data: T;
}

// export interface IPaginationParam {
//   page: number;
//   limit: number;
// }

export interface IProductParams {
  page: number;
  limit: number;
  search?: string;
  category?: string;
}
export interface IPagination {
  totalProducts: number;
  currentPage: number;
}
export interface IFetchSuccessPayload {
  products: IProduct[];
  pagination: IPagination;
  params: IProductParams;
}
