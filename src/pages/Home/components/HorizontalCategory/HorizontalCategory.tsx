import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchRequest } from '../../../../saga/Products/Products.Action';
import { RootState } from '../../../../store/rootReducer';

const StyledHorizontalCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.extraGray};
`;
const LinkStyled = styled.a`
  font-size: 15px;
  line-height: 21.72px;
  font-weight: 700;
  cursor: pointer;
`;
enum Type {
  ALL = '',
  KEYBOARD = 'keyboard',
  KEYCAP = 'keycap',
  SWITCH = 'switch'
}
interface ICategoryMenu {
  type: Type;
  categoryName: string;
}

const categorys: ICategoryMenu[] = [
  {
    type: Type.ALL,
    categoryName: 'Tất cả'
  },
  {
    type: Type.KEYBOARD,
    categoryName: 'Keyboard'
  },
  {
    type: Type.KEYCAP,
    categoryName: 'Keycap'
  },
  {
    type: Type.SWITCH,
    categoryName: 'Switch'
  }
];
const HorizontalCategory = () => {
  const dispatch = useDispatch();
  const params = useSelector((state: RootState) => state.product.params);
  const [activeCategory, setActiveCategory] = useState('');

  const handleFilterByCategory = (type: Type) => {
    setActiveCategory(type);
    dispatch(fetchRequest({ ...params, category: type }));
  };

  return (
    <StyledHorizontalCategory>
      {categorys.map((item) => (
        <LinkStyled
          key={item.type}
          onClick={() => handleFilterByCategory(item.type)}
          className={`hover-link ${activeCategory === item.type ? 'active' : ''}`}
        >
          {item.categoryName}
        </LinkStyled>
      ))}
    </StyledHorizontalCategory>
  );
};

export default HorizontalCategory;
