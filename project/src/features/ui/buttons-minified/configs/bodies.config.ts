import { FunctionComponent } from 'react';

import { BoxComponent, ButtonComponent, CircleComponent } from '../components';

const bodyTypes = {
  button: ButtonComponent,
  circle: CircleComponent,
  box: BoxComponent,
};

type BodyTypes = keyof typeof bodyTypes;

type GetFunctionComponentProps<T> = T extends FunctionComponent<infer P>
  ? P
  : never;

type BodyProps = {
  [BodyType in BodyTypes]: {
    type: BodyType;
    properties: Omit<
      GetFunctionComponentProps<typeof bodyTypes[BodyType]>,
      'body'
    >;
  };
}[BodyTypes];

export const bodiesConfig: BodyProps[] = [
  {
    type: 'button',
    properties: {
      x: 1000,
      y: 60,
      width: 250,
      height: 60,
      label: 'IEMAND OP INTERNET',
      className:
        'text-survey-color-7 bg-survey-color-2 rounded-3xl border-2 border-survey-color-7',
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
      className:
        'text-survey-color-7 bg-survey-color-1 rounded-3xl border-2 border-survey-color-7',
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
      className:
        'text-survey-color-7 bg-survey-color-6 rounded-3xl border-2 border-survey-color-7',
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
      className:
        'text-survey-color-7 bg-survey-color-5 rounded-3xl border-2 border-survey-color-7',
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
      className:
        'text-survey-color-7 bg-survey-color-3 rounded-3xl border-2 border-survey-color-7',
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
      className:
        'text-survey-color-7 bg-survey-color-2 rounded-3xl border-2 border-survey-color-7',
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
      className:
        'text-survey-color-7 bg-survey-color-5 rounded-3xl border-2 border-survey-color-7',
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
      className:
        'text-survey-color-7 bg-survey-color-6 rounded-3xl border-2 border-survey-color-7',
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
      className:
        'text-survey-color-7 bg-survey-color-1 rounded-3xl border-2 border-survey-color-7',
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
      label: 'CIRCLE1',
      className: 'border-2 border-survey-color-7 bg-survey-color-4',
    },
  },
  {
    type: 'circle',
    properties: {
      x: 950,
      y: 300,
      radius: 30,
      label: 'CIRCLE2',
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
      label: 'BOX1',
      className: 'border-2 border-survey-color-7 bg-survey-color-4',
    },
  },
];
