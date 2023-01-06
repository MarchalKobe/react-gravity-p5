import { Body } from 'matter-js';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  body: Body;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  className: string;
  onClick: () => void;
}

export const ButtonComponent: FunctionComponent<ButtonProps> = ({
  body,
  x,
  y,
  width,
  height,
  label,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        'absolute text-survey-color-7 bg-white flex items-center justify-center gap-4 font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-survey-color-7 transition-opacity',
        className,
      )}
      style={{
        left: `${body.position.x - width / 2}px`,
        top: `${body.position.y - height / 2}px`,
        width: `${width}px`,
        height: `${height}px`,
        rotate: `${body.angle * (180 / Math.PI)}deg`,
      }}
    >
      {label}
    </button>
  );
};
