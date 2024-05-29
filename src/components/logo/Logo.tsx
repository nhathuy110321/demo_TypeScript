import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../assets/imgs/LOGO.png';

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
const Logo = () => {
  return (
    <StyledLogo>
      <img src={LogoIcon} alt="#" />
    </StyledLogo>
  );
};

export default Logo;
