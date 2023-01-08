import { Body } from 'matter-js';
import { FunctionComponent, HTMLAttributes } from 'react';

import { BoundaryBodyProps } from '../../bodies/boundary.body';

export interface BoundaryProps extends HTMLAttributes<HTMLDivElement> {
  body: Body;
  properties: BoundaryBodyProps;
}

export const BoundaryComponent: FunctionComponent<BoundaryProps> = ({}) => {
  // Boundary is invisible
  return <></>;
};
