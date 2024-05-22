import styled from 'styled-components';

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
  return (
    <>
      <HomeMain>
        <MainContentStyled></MainContentStyled>
      </HomeMain>
    </>
  );
};

export default Home;
