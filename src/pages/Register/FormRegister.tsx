import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SchemaRegister from './SchemaRegister';
import Radio from '../../components/common/form/radio/Radio';
import Checkbox from '../../components/common/form/checkbox/Checkbox';
import { Button } from '../../components/common';
import Input from '../../components/common/form/input/Input';

const FormStyled = styled.form`
  padding-bottom: 130px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;

  .ant-btn {
    max-width: 400px;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
  }
  .ant-radio-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .ant-radio-wrapper span:nth-child(2) {
    font-size: 18px;
  }

  .register-checkbox {
    margin-top: 10px;
  }
`;
const HalfFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;
const LastNameStyled = styled.div`
  width: 100%;
`;
const FormRegister = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      nickName: '',
      gender: '',
      province: '',
      dob: '',
      lastName: '',
      firstName: '',
      phone: '',
      terms: false
    },
    resolver: yupResolver(SchemaRegister),
    mode: `all`
  });
  const handleSubmit = (values: any) => {
    console.log('Form', values);
  };
  return (
    <FormProvider {...methods}>
      <FormStyled>
        <Input labelName='メールアドレス' name='email' />
        <Input labelName='パスワード（半角英数８桁以上）' name='password' type='password' />
        <Input labelName='パスワード再確認' name='confirmPassword' type='password' />
        <Input labelName='ニックネーム' name='nickName' />
        <Radio
          options={[
            { label: '男性', value: 'male' },
            { label: '女性', value: 'female' },
            { label: 'その他', value: 'other' }
          ]}
          name='gender'
          defaultValue='male'
        />
        <Input labelName='都道府県を選んでください' name='province' />
        <Input labelName='生年月日（年代のみ公開されます）' placeholder='例: 2000/01/01' name='dob' />
        <HalfFormGroup>
          <LastNameStyled>
            <Input labelName='姓 (非公開)' name='lastName' />
          </LastNameStyled>
          <LastNameStyled>
            <Input labelName='名 (非公開)' name='firstName' />
          </LastNameStyled>
        </HalfFormGroup>
        <Input labelName='(任意）友達紹介コード' name='phone' />
        <Checkbox className='register-checkbox' name='terms' question='利用規約 と プライバシーポリシー' />

        <Button className='ant-btn-primary' type='primary' onClick={methods.handleSubmit(handleSubmit)}>
          同意して登録（無料）
        </Button>
      </FormStyled>
    </FormProvider>
  );
};

export default FormRegister;
