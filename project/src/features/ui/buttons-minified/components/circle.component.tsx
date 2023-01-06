import { Body } from 'matter-js';
import { FunctionComponent, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CircleProps extends HTMLAttributes<HTMLDivElement> {
  body: Body;
  x: number;
  y: number;
  radius: number;
  label: string;
  className: string;
}

export const CircleComponent: FunctionComponent<CircleProps> = ({
  body,
  x,
  y,
  radius,
  className,
  ...props
}) => {
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
