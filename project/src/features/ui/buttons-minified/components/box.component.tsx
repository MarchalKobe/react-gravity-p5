import { Body } from 'matter-js';
import { FunctionComponent, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  body: Body;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  className: string;
}

export const BoxComponent: FunctionComponent<BoxProps> = ({
  body,
  x,
  y,
  width,
  height,
  className,
  ...props
}) => {
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
