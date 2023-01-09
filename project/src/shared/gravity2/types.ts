import { Boundary, Box, Button, Circle, Coin, CoinsContainer } from './bodies';

export const bodyTypes = {
  boundary: Boundary,
  button: Button,
  circle: Circle,
  box: Box,
  coinsContainer: CoinsContainer,
  coin: Coin,
};

type BodyTypes = keyof typeof bodyTypes;

export type BodyProps = {
  canvasWidth: number;
  canvasHeight: number;
  timeoutSeconds?: number;
  hasMouseInteraction?: boolean;
  bodies: {
    [BodyType in BodyTypes]: {
      type: BodyType;
      properties: ConstructorParameters<typeof bodyTypes[BodyType]>[2];
    };
  }[BodyTypes][];
};
