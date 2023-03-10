import { FunctionComponent, MutableRefObject, useRef } from 'react';

import { GravityComponent } from '~/shared/gravity1/ui';

import { bodiesConfig } from './configs/bodies.config';

export interface ButtonsMinifiedProps {}

export const ButtonsMinified: FunctionComponent<
  ButtonsMinifiedProps
> = ({}) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div
      ref={containerRef}
      className="relative w-[1360px] h-[604px] bg-survey-color-4 overflow-hidden border-2 border-survey-color-7 rounded-[40px] m-10"
    >
      <div className="absolute -right-[116px] top-16 bg-[#C1DCA5] w-[990px] h-[990px] rounded-full" />
      <GravityComponent container={containerRef} config={bodiesConfig} />
    </div>
  );
};
