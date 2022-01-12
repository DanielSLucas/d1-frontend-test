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
  Aside,
  GridItem,
  ResultsTable,
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
        <main>
          <h1>Jornadas</h1>

          <div>
            <Aside>
              <GridItem>
                <ThIcon className="todas" />
              </GridItem>

              <GridItem>
                <button className="selected" type="button">
                  Todas
                </button>
              </GridItem>

              <GridItem>
                <span className="selected">12</span>
              </GridItem>

              <GridItem>
                <PaperPlaneIcon className="enviando" />
              </GridItem>

              <GridItem>
                <button type="button">Enviando</button>
              </GridItem>

              <GridItem>
                <span>12</span>
              </GridItem>

              <GridItem>
                <PlayCircleIcon className="ativadas" />
              </GridItem>

              <GridItem>
                <button type="button">Ativadas</button>
              </GridItem>

              <GridItem>
                <span>15</span>
              </GridItem>

              <GridItem>
                <PenIcon className="configurando" />
              </GridItem>

              <GridItem>
                <button type="button">Configurando</button>
              </GridItem>

              <GridItem>
                <span>25</span>
              </GridItem>

              <GridItem>
                <BedIcon className="ociosa" />
              </GridItem>

              <GridItem>
                <button type="button">Ociosa</button>
              </GridItem>

              <GridItem>
                <span>45</span>
              </GridItem>

              <GridItem>
                <CheckIcon className="concluida" />
              </GridItem>

              <GridItem>
                <button type="button">Concluída</button>
              </GridItem>

              <GridItem>
                <span>45</span>
              </GridItem>
            </Aside>

            <ResultsTable>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th className="centeredText">Destinatários</th>
                  <th className="centeredText">Sucesso</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cobrança</td>
                  <td className="centeredText">20.210.000</td>
                  <td className="centeredText">30%</td>
                  <td>
                    <PaperPlaneIcon className="enviando" /> Enviando
                  </td>
                </tr>

                <tr>
                  <td>Divulgação Novos Serviços</td>
                  <td className="centeredText">1.940.000</td>
                  <td className="centeredText">10%</td>
                  <td>
                    <PaperPlaneIcon className="enviando" /> Enviando
                  </td>
                </tr>
              </tbody>
            </ResultsTable>
          </div>
        </main>
      </Content>
    </Container>
  );
};

export default Home;
