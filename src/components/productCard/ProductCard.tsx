import React, { FC, useState } from 'react';
import Button from '../common/button/Button';

import {
  ButtonGroupStyled,
  CardBottomStyled,
  CardImgStyled,
  CardImgWrapperStyled,
  CardStyled,
  CardTopStyled,
  CertifierSpanStyled,
  CertifierStyled,
  DescrioptionStyled,
  FavouriteStyled,
  FormUpdateStyled,
  // LabelStyled,
  ProductNameStyled,
  QuantityCount,
  QuantityImgStyled,
  QuantityPriceStyled,
  QuantityStyled,
  UserAvtStyled,
  UserNameStyled,
  UserStyled
} from './ProductCardStyle';
import IProduct from '../../types/product';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import Input from '../common/form/input/Input';
import { IFormModalProduct } from '../../types/modal';
import Modal, { IModalProps } from '../Modal/Modal';

import { deleteRequest, patchRequest } from '../../saga/Products/Products.Action';
import Textarea from '../common/form/textArea/Textarea';

// import { useDispatch } from 'react-redux'

// import {
//   deleteRequest,
//   patchRequest,
// } from '../../saga/Products/Products.Action'
interface IProductCardProps {
  product: IProduct;
}
const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const methodsModalEdit = useForm<IFormModalProduct>({});

  const [modal, setModal] = useState<IModalProps>({
    isOpen: false,
    title: ''
  });

  //   //EDIT
  const handleShowModalEdit = () => {
    const Modalvalue: Partial<IFormModalProduct> = {
      _id: product._id,
      imageUrl: product.imageUrl,
      title: product.title,
      description: product.description
    };
    Object.keys(Modalvalue).forEach((key) => {
      const modalKey = key as keyof IFormModalProduct;
      methodsModalEdit.setValue(modalKey, Modalvalue[modalKey] as any);
    });
    setModal({
      isOpen: true,
      title: 'CẬP NHẬT SẢN PHẨM',
      content: (
        <FormProvider {...methodsModalEdit}>
          <FormUpdateStyled>
            <Input name={'imageUrl'} labelName={'imageUrl'} />
            <Input name={'title'} labelName={'Title'} />

            <Textarea name={'description'} labelName={'Description'} />
          </FormUpdateStyled>
        </FormProvider>
      ),

      handleOk: async () => {
        const newProduct = methodsModalEdit.getValues();

        try {
          dispatch(patchRequest(newProduct));

          handleCancel();
        } catch (error) {
          console.error('Error updating product:', error);
        }
      },
      handleCancel
    });
  };

  //DELETE

  const handleShowModalDelete = () => {
    setModal({
      isOpen: true,
      title: 'XÓA SẢN PHẨM',
      content: 'Bạn có chắc chắn muốn xóa sản phẩm',
      handleOk: async () => {
        try {
          if (product?._id) {
            dispatch(deleteRequest(product._id));
            handleCancel();
          }
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      },
      handleCancel
    });
  };

  const handleCancel = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <CardStyled>
      {modal.isOpen && <Modal {...modal} />}
      <ButtonGroupStyled>
        <Button className='ant-btn-primary' type='primary' onClick={handleShowModalEdit}>
          <i className='fa-regular fa-pen-to-square'></i>
        </Button>

        <Button className='ant-btn-primary' type='primary' onClick={() => handleShowModalDelete()}>
          <i className='fa-solid fa-trash'></i>
        </Button>
      </ButtonGroupStyled>

      <CardTopStyled>
        <CardImgWrapperStyled>
          <CardImgStyled src={product.imageUrl} />
        </CardImgWrapperStyled>
        <UserStyled>
          <UserAvtStyled src='card1.png' />
          <div>
            <UserNameStyled>{product.username}</UserNameStyled>
          </div>
        </UserStyled>
        <ProductNameStyled>{product.title}</ProductNameStyled>
        <DescrioptionStyled>{product.description}</DescrioptionStyled>
      </CardTopStyled>

      <CardBottomStyled>
        <QuantityStyled>
          <QuantityImgStyled src='quantity.png' />
          <QuantityCount>{product.likedCount}</QuantityCount>
        </QuantityStyled>
        <QuantityPriceStyled>¥ {product.price}</QuantityPriceStyled>
      </CardBottomStyled>
      {product.isCertificated && (
        <CertifierStyled>
          <CertifierSpanStyled>イケア家具組立認定サポーター</CertifierSpanStyled>
        </CertifierStyled>
      )}
      {product.saved && (
        <FavouriteStyled>
          <img src='iconfavourite.png' alt=''></img>
        </FavouriteStyled>
      )}
    </CardStyled>
  );
};

export default ProductCard;
