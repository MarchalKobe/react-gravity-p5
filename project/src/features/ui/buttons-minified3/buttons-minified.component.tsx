import { Body, World, testbed } from 'planck-js/dist/planck-with-testbed';
import { FunctionComponent, MutableRefObject, useEffect, useRef } from 'react';

export interface ButtonsMinifiedProps {}

const timeStep = 1 / 60;
const velocityIterations = 6;
const positionIterations = 2;

let world: World;
let groundBody: Body;
let body: Body;

let loopInterval: NodeJS.Timeout;

let box: HTMLDivElement;
let ground: HTMLDivElement;

export const ButtonsMinified: FunctionComponent<
  ButtonsMinifiedProps
> = ({}) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const loop = () => {
    world.step(timeStep, velocityIterations, positionIterations);
    const position = body.getPosition();
    const angle = body.getAngle();
    console.log(position.x, position.y, angle);

    box.style.setProperty('left', `${position.x * 10 - 10 / 2}px`);
    box.style.setProperty('top', `${position.y * 10 - 10 / 2}px`);
    box.style.setProperty('rotate', `${angle * (180 / Math.PI)}deg`);
  };

  useEffect(() => {
    console.log(testbed);

    // testbed('Buttons', () => {
    //   world = new World({
    //     gravity: Vec2(0.0, 9.8),
    //   });

    //   groundBody = world.createBody({
    //     position: Vec2(0.0, 100.0),
    //   });
    //   const groundBox = Box(50.0, 10.0);
    //   groundBody.createFixture(groundBox, 0.0);

    //   body = world.createBody({
    //     type: 'dynamic',
    //     position: Vec2(0.0, 0.0),
    //   });
    //   const dynamicBox = Box(1.0, 1.0);
    //   body.createFixture({
    //     shape: dynamicBox,
    //     density: 1.0,
    //     friction: 0.3,
    //   });

    //   box = document.createElement('div');
    //   box.className = `absolute border-2 border-survey-color-7 bg-survey-color-4`;
    //   box.style.setProperty('width', `${10 * 10}px`);
    //   box.style.setProperty('height', `${10 * 10}px`);
    //   document.body.appendChild(box);
    //   // container.current.appendChild(box);

    //   ground = document.createElement('div');
    //   ground.className = `absolute border-2 border-survey-color-7 bg-survey-color-4`;
    //   ground.style.setProperty('width', `${50 * 10}px`);
    //   ground.style.setProperty('height', `${10 * 10}px`);
    //   ground.style.setProperty('left', `${0 * 10 - 10 / 2}px`);
    //   ground.style.setProperty('top', `${100 * 10 - 10 / 2}px`);
    //   document.body.appendChild(ground);

    //   return world;
    // });

    // loopInterval = setInterval(loop, timeStep * 1000);

    return () => {
      // world.destroyBody(groundBody);
      // world.destroyBody(body);
      // clearInterval(loopInterval);
      // box.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[1360px] h-[604px] bg-survey-color-4 overflow-hidden border-2 border-survey-color-7 rounded-[40px] m-10"
    >
      {/* <div className="absolute -right-[116px] top-16 bg-[#C1DCA5] w-[990px] h-[990px] rounded-full" /> */}
    </div>
  );
};
