import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';

export interface ButtonBodyProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  borderRadius?: [number, number, number, number] | number;
  className: string;
  onClick: () => void;
}

export class Button {
  body: Body;

  constructor(private world: World, private properties: ButtonBodyProps) {
    const { x, y, width, height, label, borderRadius } = this.properties;
    const options: IChamferableBodyDefinition = {
      friction: 0.7,
      // restitution: 0.6,
      chamfer: { radius: borderRadius },
      label: label,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(this.world, this.body);
  }
}
