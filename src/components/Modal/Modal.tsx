import { Modal as BaseModal, ModalProps } from 'antd';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const ModalStyled = styled(BaseModal)`
  .ant-modal-title {
    color: red !important;
    text-align: center !important;
    font-size: 18px;
    line-height: 24px;
  }
  .ant-btn {
    background-color: ${({ theme }) => theme.primary} !important;
    color: white !important;
    font-size: 15px;
    font-weight: 500;
  }
`;
export interface IModalProps extends ModalProps {
  isOpen: boolean;
  title: string;
  content?: ReactNode | string;
  handleOk?: () => void;
  handleCancel?: () => void;
}

const Modal: FC<IModalProps> = ({ isOpen, handleOk, handleCancel, title, content }) => {
  return (
    <>
      <ModalStyled title={title} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        {content}
      </ModalStyled>
    </>
  );
};

export default Modal;
