import type { NextPage } from 'next';
import Image from 'next/image';

import {
  SearchIcon,
  PlusIcon,
  ThIcon,
  PaperPlaneIcon,
  PlayCircleIcon,
  PenIcon,
  BedIcon,
  CheckIcon,
} from 'react-line-awesome';
import acmeImg from '../../public/images/acme2.png';
import Button from '../components/Button';
import Input from '../components/Input';

import SideBar from '../components/SideBar';

import {
  Container,
  Content,
  Header,
  HeaderLeftSide,
  HeaderRightSide,
} from '../styles/App';

const Home: NextPage = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <HeaderLeftSide>
            <div>
              A<span>Antônio da Silva</span>
            </div>
            <div>
              <Image
                src={acmeImg}
                alt="Acme Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </HeaderLeftSide>
          <HeaderRightSide>
            <div>
              <Input icon={<SearchIcon />} type="text" placeholder="Busca" />
            </div>

            <div>
              <Button icon={<PlusIcon />}>Nova Jornada</Button>
            </div>
          </HeaderRightSide>
        </Header>
      </Content>
    </Container>
  );
};

export default Home;
