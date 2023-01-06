import {
  Bodies,
  Body,
  Composite,
  Engine,
  Events,
  IChamferableBodyDefinition,
  Render,
  Runner,
  World,
} from 'matter-js';
import {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Ground, SideLeft, SideRight } from './bodies';
import { BoxComponent, ButtonComponent, CircleComponent } from './components';
import { bodiesConfig } from './configs/bodies.config';

export interface ButtonsMinifiedProps {}

let engine: Engine;
let world: World;
let render: Render;
let runner: Runner;

export const ButtonsMinified: FunctionComponent<
  ButtonsMinifiedProps
> = ({}) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [bodies, setBodies] = useState<Body[]>([]);

  const update = () => {
    setBodies([...Composite.allBodies(world)]);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      engine = Engine.create();
      world = engine.world;

      render = Render.create({
        element: containerRef.current,
        engine: engine,
        options: {
          width: 1360,
          height: 604,
        },
      });

      bodiesConfig.map(({ type, properties }) => {
        const { label, x, y } = properties;

        if (type === 'button') {
          const { width, height } = properties;

          const options: IChamferableBodyDefinition = {
            friction: 0.7,
            // restitution: 0.6,
            chamfer: { radius: 24 }, // TODO: Get radius from style
            label,
          };
          const button = Bodies.rectangle(x, y, width, height, options);
          World.add(world, button);
        }

        if (type === 'circle') {
          const { radius } = properties;

          const options: IChamferableBodyDefinition = {
            friction: 0.7,
            // restitution: 1,
            label,
          };
          const circle = Bodies.circle(x, y, radius, options);
          World.add(world, circle);
        }

        if (type === 'box') {
          const { width, height } = properties;

          const options: IChamferableBodyDefinition = {
            friction: 0.7,
            // restitution: 1,
            label,
          };
          const box = Bodies.rectangle(x, y, width, height, options);
          World.add(world, box);
        }
      });

      new SideLeft(render, world);
      new SideRight(render, world);
      new Ground(render, world);

      // Render.run(render);
      runner = Runner.run(engine);
      Events.on(engine, 'afterUpdate', update);
      setBodies([...Composite.allBodies(world)]);

      // TODO: Can we do this?
      setTimeout(() => {
        Runner.stop(runner);
      }, 3000);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[1360px] h-[604px] bg-survey-color-4 overflow-hidden border-2 border-survey-color-7 rounded-[40px] m-10"
    >
      <div className="absolute -right-[116px] top-16 bg-[#C1DCA5] w-[990px] h-[990px] rounded-full" />
      {bodiesConfig.map(({ type, properties }) => {
        const currentBody = bodies.find(
          (body) => body.label === properties.label,
        );
        if (!currentBody) return <></>;

        if (type === 'button') {
          return (
            <ButtonComponent
              key={properties.label}
              body={currentBody}
              {...properties}
            />
          );
        }

        if (type === 'circle') {
          return (
            <CircleComponent
              key={properties.label}
              body={currentBody}
              {...properties}
            />
          );
        }

        if (type === 'box') {
          return (
            <BoxComponent
              key={properties.label}
              body={currentBody}
              {...properties}
            />
          );
        }
      })}
    </div>
  );
};
