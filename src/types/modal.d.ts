import IProduct from './product';

export interface IFormModalProduct extends IProduct {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  likeCount: number;
}
