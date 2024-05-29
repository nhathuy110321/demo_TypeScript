import React from 'react';
import styled from 'styled-components';

import Banner1 from '../../../../assets/imgs/banner1.png';
import Banner2 from '../../../../assets/imgs/banner2.png';

const BannerStyled = styled.div`
  --gap: 35px;
  width: 100%;
  display: flex;
  gap: var(--gap);
  /* justify-content: space-between; */
`;

const BannerImgStyled = styled.img`
  /* max-width: calc(50% - calc(var(--gap) / 2)); */
  width: 100%;
  object-fit: cover;
`;

const Banner = () => {
  return (
    <BannerStyled>
      <>
        <BannerImgStyled src={Banner1} />
      </>
      <>
        <BannerImgStyled src={Banner2} />
      </>
    </BannerStyled>
  );
};

export default Banner;
