import styled from 'styled-components';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import ProductCard from '../productCard/ProductCard';
import IProduct from '../../types/product';

import Modal, { IModalProps } from '../Modal/Modal';
import { IFormModalProduct } from '../../types/modal';

import { patchRequest } from '../../saga/Products/Products.Action';

import Input from '../common/form/input/Input';
import { Button } from '../common';
import Textarea from '../common/form/textArea/Textarea';

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 15px;
`;
const AddCardStyled = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
  .ant-btn {
    width: 55px;
    height: auto;
  }
`;
// const LabelStyled = styled.label`
//   display: inline-block;
//   font-size: 18px;
//   line-height: 24px;
//   font-weight: 500;
//   margin-bottom: 10px;

//   color: ${({ theme }) => theme.textPrimary};
// `;
const FormUpdateStyled = styled.div`
  .ant-input {
    width: 100% !important;
  }

  #description {
    font-size: 1.2rem;
    border-color: ${({ theme }) => theme.primary} !important ;
  }
`;
interface IProps {
  products?: IProduct[];
}
const ListProduct: FC<IProps> = ({ products }) => {
  const dispatch = useDispatch();

  const methodsModalAdd = useForm<IFormModalProduct>({
    defaultValues: {
      imageUrl: '',
      title: '',
      price: 0,
      likedCount: 0,
      description: ''
    }
  });
  const [modal, setModal] = useState<IModalProps>({
    isOpen: false,
    title: ''
  });

  const handleShowModalAdd = () => {
    setModal({
      isOpen: true,
      title: 'THÊM MỚI SẢN PHẨM',
      content: (
        <FormProvider {...methodsModalAdd}>
          <FormUpdateStyled>
            <Input name={'imageUrl'} labelName={'Image URL:'} />
            <Input name={'title'} labelName={'title:'} />
            <Input name={'price'} labelName={'Price:'} />
            <Input name={'likedCount'} labelName={'Liked Count:'} />
            <Textarea name={'descreption'} labelName={'description'} />
            <Input name={'username'} labelName={'username:'} />
          </FormUpdateStyled>
        </FormProvider>
      ),
      handleOk: async () => {
        const newData = methodsModalAdd.getValues();
        try {
          await dispatch(patchRequest(newData));

          methodsModalAdd.reset();
          handleCancel();
        } catch (error) {
          console.error('Error add product:', error);
        }
        handleCancel();
      },
      handleCancel
    });
  };
  const handleCancel = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <div>
      {modal.isOpen && <Modal {...modal} />}

      <AddCardStyled>
        <Button className='ant-btn-default' type='primary' onClick={handleShowModalAdd}>
          <i className='fa-solid fa-plus'></i>
        </Button>
      </AddCardStyled>
      <ProductListStyled>
        {products?.map((product: IProduct) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </ProductListStyled>
    </div>
  );
};

export default ListProduct;
