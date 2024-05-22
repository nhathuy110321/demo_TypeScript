import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 42px;
  background-color: ${(props) => props.theme.extraGray};
`;

const Container = ({
  children,
  ...props
}: PropsWithChildren) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export default Container;
