import { Boundary, Box, Button, Circle } from './bodies';

export const bodyTypes = {
  boundary: Boundary,
  button: Button,
  circle: Circle,
  box: Box,
};

type BodyTypes = keyof typeof bodyTypes;

export type BodyProps = {
  canvasWidth: number;
  canvasHeight: number;
  timeoutSeconds?: number;
  bodies: {
    [BodyType in BodyTypes]: {
      type: BodyType;
      properties: ConstructorParameters<typeof bodyTypes[BodyType]>[2];
    };
  }[BodyTypes][];
};
