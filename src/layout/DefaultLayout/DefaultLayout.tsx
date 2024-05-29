import { ReactNode } from 'react';
import { Footer, Header, Logo, Wrapper } from '../../components';

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  return (
    <Wrapper>
      <Header />
      <Logo />
      <main>{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

export default DefaultLayout;
