import { ReactNode } from 'react';
import { Footer, Header, Wrapper } from '../../components';

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  return (
    <Wrapper>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

export default DefaultLayout;
