import {
  Composite,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from 'matter-js';
import { MutableRefObject, useEffect } from 'react';

import { Bodies, BodyProps, bodyTypes } from '../types';

export interface GravityProps {
  container: MutableRefObject<HTMLDivElement>;
  config: BodyProps;
}

let engine: Engine;
let world: World;
let render: Render;
let bodies: Bodies[];
let runner: Runner;

let loopTimeout: NodeJS.Timeout;
// let loopInterval: NodeJS.Timeout;

const delta = 1000 / 60;
const subSteps = 3;
const subDelta = delta / subSteps;

export const useGravity = ({ container, config }: GravityProps) => {
  const { canvasWidth, canvasHeight, timeoutSeconds, hasMouseInteraction } =
    config;

  useEffect(() => {
    const update = () => {
      bodies.map((body) => {
        body.show();
      });
    };

    // const loop = () => {
    //   Engine.update(engine);
    // };

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

      if (hasMouseInteraction) {
        const mouse = Mouse.create(container.current);
        const mouseConstraint = MouseConstraint.create(engine, {
          mouse,
        });
        Composite.add(engine.world, mouseConstraint);
      }

      // * For configuring the properties
      // Render.run(render);
      runner = Runner.run(engine);
      // loopInterval = setInterval(loop, loopSpeed);
      Events.on(engine, 'afterUpdate', update);

      // (function run() {
      //   window.requestAnimationFrame(run);
      //   for (let i = 0; i < subSteps; i += 1) {
      //     Engine.update(engine, subDelta);
      //   }
      // })();

      if (timeoutSeconds) {
        loopTimeout = setTimeout(() => {
          Runner.stop(runner);
          // clearInterval(loopInterval);
        }, timeoutSeconds);
      }
    }

    return () => {
      World.clear(world, false);
      Engine.clear(engine);
      Render.stop(render);
      Runner.stop(runner);
      // clearInterval(loopInterval);
      clearTimeout(loopTimeout);
      render.canvas.remove();

      bodies.map((body) => {
        body.destroy();
      });
    };
  }, [
    container,
    config,
    canvasWidth,
    canvasHeight,
    timeoutSeconds,
    hasMouseInteraction,
  ]);

  return null;
};
