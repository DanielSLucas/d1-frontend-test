/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { ButtonHTMLAttributes, useCallback, useState } from 'react';

import { Container, Tooltip } from './styles';

type IconWithTooltipProps = {
  type?: 'link' | 'button';
  to?: string;
  altText: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({
  type = 'link',
  to = '#',
  altText,
  children,
  buttonProps,
}) => {
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
      {type === 'button' ? (
        <button type="button" {...buttonProps}>
          {children}
        </button>
      ) : (
        <Link href={to}>
          <a>{children}</a>
        </Link>
      )}

      {isShowingTooltip && <Tooltip isHovered={isHovered}>{altText}</Tooltip>}
    </Container>
  );
};

export default IconWithTooltip;
