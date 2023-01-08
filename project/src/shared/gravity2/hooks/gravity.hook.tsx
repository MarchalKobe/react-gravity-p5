import { Engine, Events, Render, Runner, World } from 'matter-js';
import { MutableRefObject, useEffect } from 'react';

import { BodyProps, bodyTypes } from '../types';

export interface GravityProps {
  container: MutableRefObject<HTMLDivElement>;
  config: BodyProps;
}

let engine: Engine;
let world: World;
let render: Render;
let runner: Runner;
let bodies: any[]; // TODO

export const useGravity = ({ container, config }: GravityProps) => {
  const { canvasWidth, canvasHeight, timeoutSeconds } = config;

  useEffect(() => {
    const update = () => {
      bodies.map((body) => {
        body.show();
      });
    };

    if (typeof document !== 'undefined') {
      bodies = [];
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
        bodies.push(new BodyType(world, container, properties));
      });

      // * For configuring the properties
      // Render.run(render);
      runner = Runner.run(engine);
      Events.on(engine, 'afterUpdate', update);

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

      bodies.map((body) => {
        body.destroy();
      });
    };
  }, [container, config, canvasWidth, canvasHeight, timeoutSeconds]);

  return null;
};
