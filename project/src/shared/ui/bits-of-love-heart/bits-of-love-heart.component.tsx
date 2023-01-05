import React, { FunctionComponent } from 'react';

export interface BitsOfLoveHeartProps {
  colorClassName?: string;
}

const bars = [
  'h-[3px] group-hover:bottom-[6px] group-hover:h-[3px]',
  'h-[8px] group-hover:bottom-[4px] group-hover:h-[7px]',
  'h-[9px] group-hover:bottom-[2px] group-hover:h-[8px]',
  'h-[5px] group-hover:bottom-[0] group-hover:h-[8px]',
  'h-[6px] group-hover:bottom-[2px] group-hover:h-[8px]',
  'h-[10px] group-hover:bottom-[4px] group-hover:h-[7px]',
  'h-[3px] group-hover:bottom-[6px] group-hover:h-[3px]',
];

export const BitsOfLoveHeart: FunctionComponent<BitsOfLoveHeartProps> = ({
  colorClassName = 'bg-current group-hover:bg-gray-400',
}) => {
  return (
    <span className="group w-[13px] inline-flex items-end justify-between ml-0.5 mr-1 h-3">
      {bars.map((bar, index) => (
        <span
          key={index}
          className={`inline-block relative w-px transition-all bottom-0 ${colorClassName}  ${bar}`}
        />
      ))}
    </span>
  );
};
