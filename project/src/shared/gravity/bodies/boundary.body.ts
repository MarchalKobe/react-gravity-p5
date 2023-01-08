import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';

export interface BoundaryBodyProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
}

export class Boundary {
  body: Body;

  constructor(private world: World, private properties: BoundaryBodyProps) {
    const { x, y, width, height } = this.properties;
    const options: IChamferableBodyDefinition = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(this.world, this.body);
  }
}
