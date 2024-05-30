import BaseTextarea, { TextAreaProps } from 'antd/es/input/TextArea';
import { FC } from 'react';
import { Controller, useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const TextareaStyled = styled(BaseTextarea)`
  padding: 10px 20px;
  min-height: 150px !important;
  border: 1px solid #858585;
  font-size: 1.8rem;
  color: #575757;
  border-radius: 5px;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }

  &.has-error {
    border-color: ${({ theme }) => theme.textRed};
  }
`;

const LabelStyled = styled.label`
  display: inline-block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

const ErrorStyled = styled.span`
  display: inline-block;
  margin-top: 5px;
  color: ${({ theme }) => theme.textRed};
`;

type Props = TextAreaProps & {
  name: string;
  labelName?: string;
};
const Textarea: FC<Props> = ({ labelName, name, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error }
  } = useController({ name, control });
  return (
    <div className='form-group'>
      {labelName && <LabelStyled htmlFor={name}>{labelName}</LabelStyled>}
      {control && (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <TextareaStyled {...field} {...props} id={name} className={`${error ? 'has-error' : ''}`} />
          )}
        />
      )}
      {!!error && <ErrorStyled>{error.message}</ErrorStyled>}
    </div>
  );
};

export default Textarea;
