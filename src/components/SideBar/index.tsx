import React from 'react';
import Image from 'next/image';

import {
  PieChartIcon,
  DiamondIcon,
  RocketIcon,
  UserFriendsIcon,
  CloudIcon,
  ExternalLinkSquareAltIcon,
  ToolsIcon,
  ExchangeAltIcon,
  SignOutAltIcon,
} from 'react-line-awesome';

import {
  Container,
  Content,
  Brand,
  Menu,
  MenuItem,
  SecondaryMenu,
  LinearGradientLine,
} from './styles';

import IconLink from '../IconLink';

import logoImg from '../../../public/logo.png';

const SideBar: React.FC = () => {
  return (
    <Container>
      <LinearGradientLine />
      <Content>
        <Brand>
          <Image src={logoImg} />
        </Brand>
        <Menu>
          <MenuItem>
            <IconLink to="#" altText="Análises">
              <PieChartIcon />
            </IconLink>
          </MenuItem>

          <MenuItem>
            <IconLink to="#" altText="Jornadas">
              <RocketIcon />
            </IconLink>
          </MenuItem>

          <MenuItem>
            <IconLink to="#" altText="Clientes">
              <UserFriendsIcon />
            </IconLink>
          </MenuItem>

          <MenuItem>
            <IconLink to="#" altText="CCM Cloud">
              <CloudIcon />
            </IconLink>
          </MenuItem>

          <div>
            <LinearGradientLine />
          </div>

          <MenuItem>
            <IconLink to="#" altText="Versção 01">
              <ExternalLinkSquareAltIcon />
            </IconLink>
          </MenuItem>
        </Menu>

        <SecondaryMenu>
          <MenuItem>
            <IconLink to="#" altText="Administração">
              <DiamondIcon />
            </IconLink>
          </MenuItem>

          <MenuItem>
            <IconLink to="#" altText="Help Desk">
              <ToolsIcon />
            </IconLink>
          </MenuItem>

          <MenuItem>
            <IconLink to="#" altText="Trocar conta">
              <ExchangeAltIcon />
            </IconLink>
          </MenuItem>

          <MenuItem>
            <IconLink to="#" altText="Sair">
              <SignOutAltIcon />
            </IconLink>
          </MenuItem>
        </SecondaryMenu>
      </Content>
      <LinearGradientLine />
    </Container>
  );
};

export default SideBar;
