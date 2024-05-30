import AxiosRequest from '../../API/Axios';

import IProduct from '../../types/product';
import { IProductParams } from '../../types/common';

const Home_API = {
  fetch: async (params: IProductParams) => {
    return await AxiosRequest.get(`product/get-all`, { params });
  },
  // get: async (id) => {
  //   return await AxiosRequest.get(`products/${id}`)
  // },
  post: async (data: IProduct) => {
    delete data['_id'];
    return await AxiosRequest.post(`product/create`, { ...data });
  },
  patch: async (payload: IProduct) => {
    const { _id, ...data } = payload;
    return await AxiosRequest.patch(`product/update/${_id}`, { ...data });
  },
  // delete: async (_id: string): Promise<IResponse<IProduct>> => {
  //   return await AxiosRequest.delete(`product/delete/${_id}`);
  // }

  delete: async (_id: string) => {
    return await AxiosRequest.delete(`product/delete/${_id}`);
  }
};

export default Home_API;
