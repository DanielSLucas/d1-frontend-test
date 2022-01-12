/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { useCallback, useState } from 'react';

import { Container, Tooltip } from './styles';

type IconLinkProps = {
  to: string;
  altText: string;
};

const IconLink: React.FC<IconLinkProps> = ({ to, altText, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShowingTooltip, setIsShowingTooltip] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setIsShowingTooltip(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTimeout(() => {
      setIsShowingTooltip(false);
    }, 500);
  }, []);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={to}>
        <a>{children}</a>
      </Link>
      {isShowingTooltip && <Tooltip isHovered={isHovered}>{altText}</Tooltip>}
    </Container>
  );
};

export default IconLink;
