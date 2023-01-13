import { Boundary, Box, Button, Circle, Coin, CoinsContainer } from './bodies';

export const bodyTypes = {
  boundary: Boundary,
  button: Button,
  circle: Circle,
  box: Box,
  coinsContainer: CoinsContainer,
  coin: Coin,
} as const;

type BodyTypes = keyof typeof bodyTypes;
// TODO: Get from bodyTypes values
export type Bodies = Boundary | Button | Circle | Box | CoinsContainer | Coin;

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
