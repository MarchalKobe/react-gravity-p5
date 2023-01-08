import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';
import { MutableRefObject } from 'react';

export interface BoundaryBodyProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Boundary {
  body: Body;

  constructor(
    private world: World,
    private container: MutableRefObject<HTMLDivElement>,
    private properties: BoundaryBodyProps,
  ) {
    const { x, y, width, height } = this.properties;
    const options: IChamferableBodyDefinition = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(this.world, this.body);
  }

  // Boundary is invisible
  show() {}

  // Boundary is invisible
  destroy() {}
}
