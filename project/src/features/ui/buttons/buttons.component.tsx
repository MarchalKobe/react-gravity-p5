import { Engine, World } from 'matter-js';
import dynamic from 'next/dynamic';
import p5Types from 'p5';
import { FunctionComponent } from 'react';

import { Button, Ground } from './bodies';
import { buttonsConfig } from './configs';

export interface ButtonsProps {}

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

let engine: Engine;
let world: World;
const buttons: Button[] = [];

export const Buttons: FunctionComponent<ButtonsProps> = ({}) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    new Ground(world, p5);

    buttonsConfig.map(({ x, y, width, height, label, style, onClick }) => {
      buttons.push(
        new Button(world, p5, x, y, width, height, label, style, onClick),
      );
    });
  };

  const draw = (p5: p5Types) => {
    p5.background('#D6F1BA');
    Engine.update(engine);
    buttons.map((button) => {
      button.show();
    });
  };

  return <Sketch setup={setup} draw={draw} />;
};
