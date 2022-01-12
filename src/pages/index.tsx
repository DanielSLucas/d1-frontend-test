import type { NextPage } from 'next';
import SideBar from '../components/SideBar';

import { Container } from '../styles/App';

const Home: NextPage = () => {
  return (
    <Container>
      <SideBar />
    </Container>
  );
};

export default Home;
