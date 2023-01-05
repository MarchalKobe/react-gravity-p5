import dynamic from 'next/dynamic';
import p5Types from 'p5';
import { FunctionComponent } from 'react';

export interface GravityTestProps {}

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const canvasWidth = 600;
const canvasHeight = 600;

const numCircles = 10;
const circleDiameter = 60;
const circles: { x: number; y: number }[] = [];

export const GravityTest1: FunctionComponent<GravityTestProps> = ({}) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(canvasWidth, canvasHeight);

    const diagonal = Math.hypot(canvasWidth, canvasHeight);
    const diagonalHalf = diagonal / 2;

    const angle = (2 * Math.PI) / numCircles;
    for (let i = 0; i < numCircles; i++) {
      const randomOffsetAngle = p5.random(-angle * 0.4, angle * 0.4);
      const randomOffsetDistance = p5.random(0, circleDiameter);

      const distance = diagonalHalf + circleDiameter + randomOffsetDistance;
      const currentAngle = angle * i + randomOffsetAngle;
      const x = Math.sin(currentAngle) * distance;
      const y = Math.cos(currentAngle) * distance;

      circles.push({ x, y });
    }

    p5.stroke('transparent');
    p5.fill('#232832');
  };

  const draw = (p5: p5Types) => {
    p5.background(220);

    for (const c of circles) {
      p5.circle(c.x + canvasWidth / 2, c.y + canvasHeight / 2, circleDiameter);
    }

    update();
  };

  const update = () => {
    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];

      circle.x += -circle.x * 0.01;
      circle.y += -circle.y * 0.01;
    }

    for (let i = 0; i < circles.length; i++) {
      for (let j = i; j < circles.length; j++) {
        const circleA = circles[i];
        const circleB = circles[j];

        const dx = circleB.x - circleA.x;
        const dy = circleB.y - circleA.y;
        const distanceBetweenCenters = Math.hypot(dx, dy);
        const areOverlapping = distanceBetweenCenters < circleDiameter;

        if (areOverlapping) {
          const overlapDistance = circleDiameter - distanceBetweenCenters;
          const percentOverlap = overlapDistance / circleDiameter;

          const halfPercent = percentOverlap * 0.5;

          circleA.x -= dx * halfPercent;
          circleA.y -= dy * halfPercent;

          circleB.x += dx * halfPercent;
          circleB.y += dy * halfPercent;
        }
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};
