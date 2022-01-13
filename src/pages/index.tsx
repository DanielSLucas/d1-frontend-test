/* eslint-disable react/no-array-index-key */
import { useCallback, useMemo, useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import useSWR from 'swr';
import ClickAwayListener from 'react-click-away-listener';

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
  ModalContainer,
  Modal,
  FakeTableRow,
} from '../styles/App';

type APIFilter = {
  id: number;
  name: string;
  quantity: number;
};

type Filter = {
  id: number;
  name: string;
  quantity: number;
  icon: JSX.Element;
  text: string;
};

type Jorney = {
  name: string;
  status: number;
  recipients: string;
  success: string;
  id: string;
};

type filterTextAndIcon = {
  [id: number]: {
    icon: JSX.Element;
    text: string;
  };
};

const filtersTextAndIcons: filterTextAndIcon = {
  0: {
    icon: <ThIcon className="todas" />,
    text: 'Todas',
  },
  1: {
    icon: <PaperPlaneIcon className="enviando" />,
    text: 'Enviando',
  },
  2: {
    icon: <PlayCircleIcon className="ativadas" />,
    text: 'Ativadas',
  },
  3: {
    icon: <PenIcon className="configurando" />,
    text: 'Configurando',
  },
  4: {
    icon: <BedIcon className="ociosa" />,
    text: 'Ociosa',
  },
  5: {
    icon: <CheckIcon className="concluida" />,
    text: 'Concluída',
  },
};

type HomeProps = {
  APIfilters: APIFilter[];
};

const Home: NextPage<HomeProps> = ({ APIfilters }) => {
  const [selectedFilterIndex, setselectedFilterIndex] = useState(0);
  const [isShowingModal, setIsShowingModal] = useState(false);

  const filters: Filter[] = useMemo(() => {
    return APIfilters.map(filter => {
      return {
        ...filter,
        icon: filtersTextAndIcons[filter.id].icon,
        text: filtersTextAndIcons[filter.id].text,
      };
    });
  }, [APIfilters]);

  const jorneysResponse = useSWR<Jorney[]>(
    `https://api-d1-test.herokuapp.com/api/journey/${
      filters &&
      (filters[selectedFilterIndex].name === 'Todos'
        ? ''
        : filters[selectedFilterIndex].id)
    }`,
    async url => {
      const response = await fetch(url);

      return response.json();
    },
  );

  const handleFilterClick = useCallback((filterIndex: number) => {
    setselectedFilterIndex(filterIndex);
  }, []);

  const toggleModal = useCallback(() => {
    setIsShowingModal(state => !state);
  }, []);

  return (
    <Container>
      <SideBar />
      {isShowingModal && (
        <ModalContainer>
          <ClickAwayListener onClickAway={toggleModal}>
            <Modal>
              <section>
                <header>
                  <h2>Nova Jornada</h2>
                  <hr />
                </header>

                <div>
                  <p>
                    Dê um <label htmlFor="jorneyName">nome</label> para essa
                    Jornada
                  </p>
                  <Input type="text" id="jorneyName" />
                  <span>Você poderá alterar essa informação depois.</span>
                </div>

                <footer>
                  <div>
                    <button type="button" onClick={toggleModal}>
                      Continuar
                    </button>
                    <button type="button" onClick={toggleModal}>
                      Cancelar
                    </button>
                  </div>
                </footer>
              </section>
            </Modal>
          </ClickAwayListener>
        </ModalContainer>
      )}
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
              <Button icon={<PlusIcon />} onClick={toggleModal}>
                Nova Jornada
              </Button>
            </div>
          </HeaderRightSide>
        </Header>
        <main>
          <h1>Jornadas</h1>

          <div>
            <Aside>
              {filters &&
                filters.map((filter, i) => (
                  <>
                    <GridItem>{filter.icon}</GridItem>

                    <GridItem>
                      <button
                        type="button"
                        onClick={() => handleFilterClick(i)}
                        className={
                          filters[selectedFilterIndex].id === filter.id
                            ? 'selected'
                            : ''
                        }
                      >
                        {filter.text}
                      </button>
                    </GridItem>

                    <GridItem>
                      <span
                        className={
                          filters[selectedFilterIndex].id === filter.id
                            ? 'selected'
                            : ''
                        }
                      >
                        {filter.quantity}
                      </span>
                    </GridItem>
                  </>
                ))}
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
                {jorneysResponse.data ? (
                  jorneysResponse.data.map(jorney => (
                    <tr key={jorney.id}>
                      <td>{jorney.name}</td>
                      <td className="centeredText">{jorney.recipients}</td>
                      <td className="centeredText">{jorney.success}</td>
                      <td>
                        <div>{filtersTextAndIcons[jorney.status].icon}</div>
                        {filtersTextAndIcons[jorney.status].text}
                      </td>
                    </tr>
                  ))
                ) : (
                  <FakeTableRow colSpan={4} />
                )}
              </tbody>
            </ResultsTable>
          </div>
        </main>
      </Content>
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await fetch('https://api-d1-test.herokuapp.com/api/filter');

  const APIfilters: APIFilter[] = await response.json();

  return {
    props: {
      APIfilters,
    },
  };
};
