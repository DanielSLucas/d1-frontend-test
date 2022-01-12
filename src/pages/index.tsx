import type { NextPage } from 'next';
import Image from 'next/image';
import useSWR from 'swr';

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
import { useCallback, useMemo, useState } from 'react';
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

type Filter = {
  id: number;
  name: string;
  quantity: number;
};

type filterTextAndIcon = {
  [id: number]: {
    icon: JSX.Element;
    text: string;
  };
};

type Jorney = {
  name: string;
  status: number;
  recipients: string;
  success: string;
  id: string;
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

const Home: NextPage = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    id: 0,
    name: 'Todos',
    quantity: 8,
    icon: <ThIcon className="todas" />,
    text: 'Todas',
  });

  const filtersResponse = useSWR<Filter[]>(
    'https://api-d1-test.herokuapp.com/api/filter',
    async url => {
      const response = await fetch(url);

      return response.json();
    },
  );

  const jorneysResponse = useSWR<Jorney[]>(
    `https://api-d1-test.herokuapp.com/api/journey/${
      selectedFilter.id === 0 ? '' : selectedFilter.id
    }`,
    async url => {
      const response = await fetch(url);

      return response.json();
    },
  );

  const filters = useMemo(() => {
    if (!filtersResponse.data) return null;

    return filtersResponse.data.map(filter => {
      return {
        ...filter,
        icon: filtersTextAndIcons[filter.id].icon,
        text: filtersTextAndIcons[filter.id].text,
      };
    });
  }, [filtersResponse.data]);

  const handleFilterClick = useCallback((filter: typeof selectedFilter) => {
    setSelectedFilter(filter);
  }, []);

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
              {filters &&
                filters.map(filter => (
                  <>
                    <GridItem>{filter.icon}</GridItem>

                    <GridItem>
                      <button
                        type="button"
                        onClick={() => handleFilterClick(filter)}
                        className={
                          selectedFilter.id === filter.id ? 'selected' : ''
                        }
                      >
                        {filter.text}
                      </button>
                    </GridItem>

                    <GridItem>
                      <span
                        className={
                          selectedFilter.id === filter.id ? 'selected' : ''
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
                {jorneysResponse.data &&
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
                  ))}
              </tbody>
            </ResultsTable>
          </div>
        </main>
      </Content>
    </Container>
  );
};

export default Home;
