import { FunctionComponent } from 'react';

import { Boundary, Box, Button, Circle } from './bodies';
import { BoundaryComponent } from './ui/components/boundary.component';
import { BoxComponent } from './ui/components/box.component';
import { ButtonComponent } from './ui/components/button.component';
import { CircleComponent } from './ui/components/circle.component';

export const bodyComponentTypes = {
  boundary: BoundaryComponent,
  button: ButtonComponent,
  circle: CircleComponent,
  box: BoxComponent,
};

export const bodyTypes = {
  boundary: Boundary,
  button: Button,
  circle: Circle,
  box: Box,
};

type BodyTypes = keyof typeof bodyComponentTypes;

type GetFunctionComponentProps<T> = T extends FunctionComponent<infer P>
  ? P
  : never;

export type BodyProps = {
  canvasWidth: number;
  canvasHeight: number;
  timeoutSeconds?: number;
  bodies: {
    [BodyType in BodyTypes]: {
      type: BodyType;
      properties: GetFunctionComponentProps<
        typeof bodyComponentTypes[BodyType]
      >['properties'];
    };
  }[BodyTypes][];
};
