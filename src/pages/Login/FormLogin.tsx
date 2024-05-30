import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schemaLogin from './Schema';
import Input from '../../components/common/form/input/Input';
import { Button } from '../../components/common';

const FormStyled = styled.form`
  padding-bottom: 130px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  .ant-btn {
    max-width: 400px;
    width: 100%;
    margin-bottom: 100px;
    font-size: 25px;
    font-weight: 700;
  }
  .ant-input {
    padding-left: 70px;
  }
`;

const FormLogin = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: `all`
  });
  const handleSubmit = (values: any) => {
    console.log('Form', values);
  };
  return (
    <FormProvider {...methods}>
      <FormStyled>
        <Input name='email' labelName='メールアドレス' icon={<img src='/iconEmail.png' alt='' />} />
        <Input name='password' type='password' labelName='パスワード' icon={<img src='/iconPassword.png' alt='' />} />
        <Button className='ant-btn-primary' type='primary' onClick={methods.handleSubmit(handleSubmit)}>
          ログイン
        </Button>
      </FormStyled>
    </FormProvider>
  );
};

export default FormLogin;
