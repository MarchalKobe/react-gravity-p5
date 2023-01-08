import { Body } from 'matter-js';
import { FunctionComponent, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { CircleBodyProps } from '../../bodies/circle.body';

export interface CircleProps extends HTMLAttributes<HTMLDivElement> {
  body: Body;
  properties: CircleBodyProps;
}

export const CircleComponent: FunctionComponent<CircleProps> = ({
  body,
  properties,
  ...props
}) => {
  const { radius, className } = properties;

  return (
    <div
      {...props}
      className={twMerge('absolute rounded-full', className)}
      style={{
        left: `${body.position.x - radius}px`,
        top: `${body.position.y - radius}px`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        rotate: `${body.angle * (180 / Math.PI)}deg`,
      }}
    />
  );
};
