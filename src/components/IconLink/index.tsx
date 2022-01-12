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

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={to}>
        <a>{children}</a>
      </Link>
      {isHovered && <Tooltip>{altText}</Tooltip>}
    </Container>
  );
};

export default IconLink;
