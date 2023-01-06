interface ButtonProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  style: string;
  onClick: Function;
}

export const buttonsConfig: ButtonProps[] = [
  {
    x: 150,
    y: 60,
    width: 250,
    height: 60,
    label: 'IEMAND OP INTERNET',
    style:
      'text-survey-color-7 bg-survey-color-2 rounded-3xl border-2 border-survey-color-7 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-survey-color-7',
    onClick: () => {
      console.log('Clicked on button 1');
    },
  },
  {
    x: 440,
    y: 50,
    width: 290,
    height: 70,
    label: 'EEN HULPORGANISATIE',
    style:
      'text-survey-color-7 bg-survey-color-1 rounded-3xl border-2 border-survey-color-7 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-survey-color-7',
    onClick: () => {
      console.log('Clicked on button 2');
    },
  },
  {
    x: 300,
    y: 160,
    width: 155,
    height: 60,
    label: 'VRIENDEN',
    style:
      'text-survey-color-7 bg-survey-color-5 rounded-3xl border-2 border-survey-color-7 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-survey-color-7',
    onClick: () => {
      console.log('Clicked on button 3');
    },
  },
];
