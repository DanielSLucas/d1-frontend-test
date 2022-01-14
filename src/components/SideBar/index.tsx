import React, { useCallback, useState } from 'react';
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
  SunIcon,
  MoonIcon,
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

import IconWithTooltip from '../IconWithTooltip';

import logoImg from '../../../public/logo.png';

type SideBarProps = {
  toogleTheme(): void;
};

const SideBar: React.FC<SideBarProps> = ({ toogleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeButtonClick = useCallback(() => {
    toogleTheme();
    setIsDarkMode(state => !state);
  }, [toogleTheme]);

  return (
    <Container>
      <LinearGradientLine />
      <Content>
        <Brand>
          <Image src={logoImg} />
        </Brand>
        <Menu>
          <MenuItem>
            <IconWithTooltip to="#" altText="Análises">
              <PieChartIcon />
            </IconWithTooltip>
          </MenuItem>

          <MenuItem>
            <IconWithTooltip to="#" altText="Jornadas">
              <RocketIcon />
            </IconWithTooltip>
          </MenuItem>

          <MenuItem>
            <IconWithTooltip to="#" altText="Clientes">
              <UserFriendsIcon />
            </IconWithTooltip>
          </MenuItem>

          <MenuItem>
            <IconWithTooltip to="#" altText="CCM Cloud">
              <CloudIcon />
            </IconWithTooltip>
          </MenuItem>

          <div>
            <LinearGradientLine />
          </div>

          <MenuItem>
            <IconWithTooltip to="#" altText="Versão 01">
              <ExternalLinkSquareAltIcon />
            </IconWithTooltip>
          </MenuItem>
        </Menu>

        <SecondaryMenu>
          <MenuItem>
            <IconWithTooltip to="#" altText="Administração">
              <DiamondIcon />
            </IconWithTooltip>
          </MenuItem>

          <MenuItem>
            <IconWithTooltip to="#" altText="Help Desk">
              <ToolsIcon />
            </IconWithTooltip>
          </MenuItem>

          <MenuItem>
            <IconWithTooltip to="#" altText="Trocar conta">
              <ExchangeAltIcon />
            </IconWithTooltip>
          </MenuItem>

          <MenuItem>
            <IconWithTooltip to="#" altText="Sair">
              <SignOutAltIcon />
            </IconWithTooltip>
          </MenuItem>

          {/* <div>
            <LinearGradientLine />
          </div> */}

          <MenuItem>
            <IconWithTooltip
              type="button"
              altText={isDarkMode ? 'Light' : 'Dark'}
              buttonProps={{ onClick: handleThemeButtonClick }}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </IconWithTooltip>
          </MenuItem>
        </SecondaryMenu>
      </Content>
      <LinearGradientLine />
    </Container>
  );
};

export default SideBar;
