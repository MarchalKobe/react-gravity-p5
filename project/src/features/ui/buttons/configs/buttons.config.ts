interface ButtonProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  color: string;
  backgroundColor: string;
  onClick: Function;
}

export const buttonsConfig: ButtonProps[] = [
  {
    x: 150,
    y: 20,
    width: 250,
    height: 60,
    label: 'IEMAND OP INTERNET',
    color: '#232832',
    backgroundColor: '#FBD7B5',
    onClick: () => {
      console.log('Clicked on button 1');
    },
  },
  {
    x: 440,
    y: 20,
    width: 290,
    height: 70,
    label: 'EEN HULPORGANISATIE',
    color: '#232832',
    backgroundColor: '#E6C7FF',
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
    color: '#232832',
    backgroundColor: '#C6E4FE',
    onClick: () => {
      console.log('Clicked on button 3');
    },
  },
];
