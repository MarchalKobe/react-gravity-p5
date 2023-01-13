import {
  Body,
  Composite,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
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

let loopTimeout: NodeJS.Timeout;
let loopInterval: NodeJS.Timeout;

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
      Render.run(render);
      // loopInterval = setInterval(loop, loopSpeed);
      Events.on(engine, 'afterUpdate', update);

      const limitMaxSpeed = () => {
        const maxSpeed = 0.1;

        world.bodies.map((body) => {
          console.log(body.label);

          console.log('test');

          if (body.velocity.x > maxSpeed) {
            Body.setVelocity(body, { x: maxSpeed, y: body.velocity.y });
          }

          if (body.velocity.x < -maxSpeed) {
            Body.setVelocity(body, { x: -maxSpeed, y: body.velocity.y });
          }

          if (body.velocity.y > maxSpeed) {
            Body.setVelocity(body, { x: body.velocity.x, y: maxSpeed });
          }

          if (body.velocity.y < -maxSpeed) {
            Body.setVelocity(body, { x: -body.velocity.x, y: -maxSpeed });
          }
        });
      };
      // Events.on(engine, 'beforeUpdate', limitMaxSpeed);

      (function run() {
        window.requestAnimationFrame(run);
        for (let i = 0; i < subSteps; i += 1) {
          Engine.update(engine, subDelta);
        }
      })();

      if (timeoutSeconds) {
        loopTimeout = setTimeout(() => {
          clearInterval(loopInterval);
        }, timeoutSeconds);
      }
    }

    return () => {
      World.clear(world, false);
      Engine.clear(engine);
      Render.stop(render);
      clearInterval(loopInterval);
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
