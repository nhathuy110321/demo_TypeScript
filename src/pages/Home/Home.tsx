import styled from 'styled-components';
import { About, Banner, CategoryBar, HeaderSearch, HorizontalCategory } from './components';
import { useDispatch, useSelector } from 'react-redux';
import ListProduct from '../../components/listProduct/ListProduct';
import { useEffect, useState } from 'react';
import { RootState } from '../../store/rootReducer';
import { fetchRequest } from '../../saga/Products/Products.Action';
import Pagination from '../../components/pagination/Pagination';

const HomeMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 20px;
`;
const MainContentStyled = styled.div`
  .paginations {
    margin-top: 40px;
    margin-bottom: 44px;
    text-align: right;
  }
`;
const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchRequest({ ...product.params, page }));
  }, [page]);
  return (
    <>
      <HeaderSearch />
      <HorizontalCategory />
      <About />
      <Banner />
      <HomeMain>
        <CategoryBar />
        <MainContentStyled>
          <ListProduct products={product.products} />
          <Pagination
            total={product.pagination.totalProducts}
            onChange={(value: any) => setPage(value)}
            current={product.pagination.currentPage}
            pageSize={product.params.limit}
          />
        </MainContentStyled>
      </HomeMain>
    </>
  );
};

export default Home;
