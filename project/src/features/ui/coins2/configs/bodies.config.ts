import { BodyProps } from '~/shared/gravity2/types';

export const bodiesConfig: BodyProps = {
  canvasWidth: 1360,
  canvasHeight: 604,
  hasMouseInteraction: true,
  bodies: [
    {
      type: 'coinsContainer',
      properties: {
        x: 1360 / 2,
        y: 604 / 2,
        className: 'bg-survey-color-3',
      },
    },
    {
      type: 'boundary',
      properties: {
        x: 1360 / 2,
        y: 604 - 100,
        width: 1360,
        height: 100,
      },
    },
    {
      type: 'coin',
      properties: {
        x: 1360 / 2 + 100,
        y: 604 / 2 - 60,
        radius: 20,
        className: 'border-2 border-survey-color-7 bg-survey-color-7',
      },
    },
    {
      type: 'coin',
      properties: {
        x: 1360 / 2 + 125,
        y: 604 / 2 - 100,
        radius: 20,
        className: 'border-2 border-survey-color-7 bg-survey-color-7',
      },
    },
    {
      type: 'coin',
      properties: {
        x: 1360 / 2 + 70,
        y: 604 / 2 - 100,
        radius: 20,
        className: 'border-2 border-survey-color-7 bg-survey-color-7',
      },
    },
    {
      type: 'coin',
      properties: {
        x: 1360 / 2 + 120,
        y: 604 / 2 - 20,
        radius: 20,
        className: 'border-2 border-survey-color-7 bg-survey-color-7',
      },
    },
  ],
};
