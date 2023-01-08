import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';

export interface BoxBodyProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  className: string;
}

export class Box {
  body: Body;

  constructor(private world: World, private properties: BoxBodyProps) {
    const { x, y, width, height, label } = this.properties;
    const options: IChamferableBodyDefinition = {
      friction: 0.7,
      // restitution: 1,
      label: label,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(this.world, this.body);
  }
}
