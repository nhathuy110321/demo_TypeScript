import { Button as BaseButton, ButtonProps } from 'antd';
import { ButtonType as BaseButtonType } from 'antd/lib/button';

import styled from 'styled-components';

const ButtonStyled = styled(BaseButton)`
  font-weight: 700;
  font-size: 1.8rem;
  border-radius: 5px;

  &.ant-btn-default {
    /* padding: 12px 16px; */
    font-size: 18px;
    font-weight: 700;
    line-height: 24.5px;
    height: 50px;
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transition: all 0.2s linear;

    &:hover {
      color: white !important;
      border-color: ${({ theme }) =>
        theme.primary} !important;
      background-color: ${({ theme }) =>
        theme.primary} !important;
    }
  }

  &.ant-btn-primary {
    height: 55px;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transition: all 0.2s linear;

    &:hover {
      background-color: ${({ theme }) =>
        theme.primary} !important;
      opacity: 0.8;
    }
  }

  &.ant-btn-text {
    min-width: 200px;
    height: 55px;
    background-color: #efefef !important;

    &:hover {
      opacity: 0.8;
    }
  }

  &.ant-btn-icon-only {
    width: 42px;
    height: 42px;
  }
`;

type ButtonType = BaseButtonType;

interface IProps extends Omit<ButtonProps, 'type'> {
  type: ButtonType;
}
const Button = ({ type, ...props }: IProps) => (
  <ButtonStyled type={type} {...props} />
);
export default Button;
