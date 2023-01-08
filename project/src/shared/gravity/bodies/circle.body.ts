import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';

export interface CircleBodyProps {
  x: number;
  y: number;
  radius: number;
  label: string;
  className: string;
}

export class Circle {
  body: Body;

  constructor(private world: World, private properties: CircleBodyProps) {
    const { x, y, radius, label } = this.properties;
    const options: IChamferableBodyDefinition = {
      friction: 0.7,
      // restitution: 1,
      label: label,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(this.world, this.body);
  }
}
