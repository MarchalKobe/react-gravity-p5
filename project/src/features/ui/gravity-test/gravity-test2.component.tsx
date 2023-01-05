import dynamic from 'next/dynamic';
import p5Types from 'p5';
import { FunctionComponent } from 'react';

export interface GravityTestProps {}

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const canvasWidth = 600;
const canvasHeight = 600;

const numCubes = 7;
const cubeSize = 60;
const cubes: { x: number; y: number }[] = [
  {
    x: 70,
    y: 170,
  },
  {
    x: 140,
    y: 170,
  },
  {
    x: 210,
    y: 170,
  },
  {
    x: 280,
    y: 170,
  },
  {
    x: 90,
    y: 230,
  },
  {
    x: 160,
    y: 230,
  },
  {
    x: 250,
    y: 230,
  },
];

export const GravityTest2: FunctionComponent<GravityTestProps> = ({}) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(canvasWidth, canvasHeight);

    // for (let i = 0; i < numCubes; i++) {
    //   const x = (cubeSize + 10) * (i + 1);
    //   const y = cubeSize;
    //   cubes.push({ x, y });
    // }

    // console.log(cubes);

    p5.stroke('transparent');
    p5.fill('#232832');
  };

  const draw = (p5: p5Types) => {
    p5.background(220);

    for (const c of cubes) {
      p5.square(c.x, c.y, cubeSize);
    }

    update();
  };

  const update = () => {
    for (let i = 0; i < cubes.length; i++) {
      const cube = cubes[i];

      // cube.x += -cube.x * 0.01;
      cube.y += cube.y * 0.02;
      if (cube.y > canvasHeight - cubeSize) cube.y = canvasHeight - cubeSize;
    }

    for (let i = 0; i < cubes.length; i++) {
      for (let j = i; j < cubes.length; j++) {
        const cubeA = cubes[i];
        const cubeB = cubes[j];

        const dx = cubeB.x - cubeA.x;
        const dy = cubeB.y - cubeA.y;
        const distanceBetweenCenters = Math.hypot(dx, dy);
        const areOverlapping = distanceBetweenCenters < cubeSize;

        if (areOverlapping) {
          const overlapDistance = cubeSize - distanceBetweenCenters;
          const percentOverlap = overlapDistance / cubeSize;

          const halfPercent = percentOverlap * 0.5;

          cubeA.x -= dx * halfPercent;
          cubeA.y -= dy * halfPercent;

          cubeB.x += dx * halfPercent;
          cubeB.y += dy * halfPercent;
        }
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
