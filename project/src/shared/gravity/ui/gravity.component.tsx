import {
  Body,
  Composite,
  Engine,
  Events,
  Render,
  Runner,
  World,
} from 'matter-js';
import {
  FunctionComponent,
  HTMLAttributes,
  MutableRefObject,
  useEffect,
  useState,
} from 'react';

import { bodyComponentTypes, BodyProps, bodyTypes } from '../types';

export interface GravityProps extends HTMLAttributes<HTMLDivElement> {
  container: MutableRefObject<HTMLDivElement>;
  config: BodyProps;
}

let engine: Engine;
let world: World;
let render: Render;
let runner: Runner;

export const GravityComponent: FunctionComponent<GravityProps> = ({
  container,
  config,
}) => {
  const { canvasWidth, canvasHeight, timeoutSeconds } = config;

  const [bodies, setBodies] = useState<Body[]>([]);

  const update = () => {
    setBodies([...Composite.allBodies(world)]);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      engine = Engine.create();
      world = engine.world;

      render = Render.create({
        element: container.current,
        engine: engine,
        options: {
          width: canvasWidth,
          height: canvasHeight,
        },
      });

      config.bodies.map(({ type, properties }) => {
        const BodyType = bodyTypes[type];
        // @ts-ignore
        new BodyType(world, properties);
      });

      // * For configuring the properties
      // Render.run(render);
      runner = Runner.run(engine);
      Events.on(engine, 'afterUpdate', update);
      setBodies([...Composite.allBodies(world)]);

      if (timeoutSeconds) {
        setTimeout(() => {
          Runner.stop(runner);
        }, timeoutSeconds);
      }
    }

    return () => {
      World.clear(world, false);
      Engine.clear(engine);
      Render.stop(render);
      Runner.stop(runner);
      render.canvas.remove();
    };
  }, [container, config, canvasWidth, canvasHeight, timeoutSeconds]);

  return (
    <>
      {config.bodies.map(({ properties, type }) => {
        const currentBody = bodies.find(
          (body) => body.label === properties.label,
        );
        if (!currentBody) return <></>;
        const BodyComponent = bodyComponentTypes[type];

        console.log(properties.label);

        return (
          <BodyComponent
            key={properties.label}
            body={currentBody}
            // @ts-ignore
            properties={properties}
          />
        );
      })}
    </>
  );
};
