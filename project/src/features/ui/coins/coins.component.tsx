import { Bodies, Engine, Render, Runner, World } from 'matter-js';
import { FunctionComponent } from 'react';

export interface CoinsProps {}

let engine: Engine;
let world: World;
let render: Render;

if (typeof document !== 'undefined') {
  engine = Engine.create();
  world = engine.world;

  render = Render.create({
    element: document.body,
    engine: engine,
  });

  const container = Bodies.rectangle(
    render.options.width! / 2,
    render.options.height! / 2,
    284,
    236,
    { isStatic: true, chamfer: { radius: [0, 0, 100, 100] } },
  );

  const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
  const circle = Bodies.circle(
    render.options.width! / 2,
    render.options.height! / 2,
    10,
  );

  World.add(engine.world, [ground, container, circle]);

  Render.run(render);
  Runner.run(engine);
}

export const Coins: FunctionComponent<CoinsProps> = ({}) => {
  return <div></div>;
};
