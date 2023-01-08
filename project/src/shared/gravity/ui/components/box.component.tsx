import { Body } from 'matter-js';
import { FunctionComponent, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { BoxBodyProps } from '../../bodies/box.body';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  body: Body;
  properties: BoxBodyProps;
}

export const BoxComponent: FunctionComponent<BoxProps> = ({
  body,
  properties,
  ...props
}) => {
  const { width, height, className } = properties;

  return (
    <div
      {...props}
      className={twMerge('absolute', className)}
      style={{
        left: `${body.position.x - width / 2}px`,
        top: `${body.position.y - height / 2}px`,
        width: `${width}px`,
        height: `${height}px`,
        rotate: `${body.angle * (180 / Math.PI)}deg`,
      }}
    />
  );
};
