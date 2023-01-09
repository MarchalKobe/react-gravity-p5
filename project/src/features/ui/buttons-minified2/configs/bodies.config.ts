import { BodyProps } from '~/shared/gravity2/types';

const buttonStyle =
  'flex items-center justify-center gap-4 font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-survey-color-7 transition-opacity';

export const bodiesConfig: BodyProps = {
  canvasWidth: 1360,
  canvasHeight: 604,
  timeoutSeconds: 2450,
  bodies: [
    {
      // GROUND
      type: 'boundary',
      properties: {
        x: 1360 / 2,
        y: 604 + 50,
        width: 1360,
        height: 100,
      },
    },
    {
      // SIDE LEFT
      type: 'boundary',
      properties: {
        x: 1360 / 2 - 50,
        y: 604 / 2,
        width: 100,
        height: 604,
      },
    },
    {
      // SIDE RIGHT
      type: 'boundary',
      properties: {
        x: 1360,
        y: 604 / 2,
        width: 100,
        height: 604,
      },
    },
    {
      type: 'button',
      properties: {
        x: 1000,
        y: 60,
        width: 250,
        height: 60,
        label: 'IEMAND OP INTERNET',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-2 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button IEMAND OP INTERNET');
        },
      },
    },
    {
      type: 'button',
      properties: {
        x: 850,
        y: 150,
        width: 290,
        height: 70,
        label: 'EEN HULPORGANISATIE',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-1 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button EEN HULPORGANISATIE');
        },
      },
    },
    {
      type: 'button',
      properties: {
        x: 1050,
        y: 230,
        width: 330,
        height: 70,
        label: 'BEGELEIDER VAN MIJN HOBBY',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-6 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button BEGELEIDER VAN MIJN HOBBY');
        },
      },
    },
    {
      type: 'button',
      properties: {
        x: 800,
        y: 240,
        width: 155,
        height: 70,
        label: 'VRIENDEN',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-5 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button VRIENDEN');
        },
      },
    },
    {
      type: 'button',
      properties: {
        x: 804,
        y: 355,
        width: 230,
        height: 70,
        label: 'MIJN LEERKRACHT',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-3 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button MIJN LEERKRACHT');
        },
      },
    },
    {
      type: 'button',
      properties: {
        x: 1060,
        y: 365,
        width: 280,
        height: 70,
        label: 'IEMAND VAN DE FAMILIE',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-2 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button IEMAND VAN DE FAMILIE');
        },
      },
    },
    {
      type: 'button',
      properties: {
        x: 760,
        y: 440,
        width: 150,
        height: 70,
        label: 'NIEMAND',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-5 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button NIEMAND');
        },
      },
    },
    {
      type: 'button',
      properties: {
        x: 950,
        y: 450,
        width: 185,
        height: 70,
        label: 'MIJN OUDERS',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-6 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button MIJN OUDERS');
        },
      },
    },
    {
      type: 'button',
      properties: {
        x: 1180,
        y: 440,
        width: 250,
        height: 70,
        label: 'MIJN GROOTOUDERS',
        borderRadius: 24,
        className: `${buttonStyle} text-survey-color-7 bg-survey-color-1 border-2 border-survey-color-7`,
        onClick: () => {
          console.log('Clicked on button MIJN GROOTOUDERS');
        },
      },
    },
    {
      type: 'circle',
      properties: {
        x: 1020,
        y: 155,
        radius: 20,
        className: 'border-2 border-survey-color-7 bg-survey-color-4',
      },
    },
    {
      type: 'circle',
      properties: {
        x: 950,
        y: 300,
        radius: 30,
        className: 'border-2 border-survey-color-7 bg-survey-color-4',
      },
    },
    {
      type: 'box',
      properties: {
        x: 1260,
        y: 525,
        width: 50,
        height: 50,
        className: 'border-2 border-survey-color-7 bg-survey-color-4',
      },
    },
  ],
};
