import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';
import { MutableRefObject } from 'react';

export interface CircleBodyProps {
  x: number;
  y: number;
  radius: number;
  className: string;
}

export class Circle {
  body: Body;
  circle: HTMLDivElement;

  constructor(
    private world: World,
    private container: MutableRefObject<HTMLDivElement>,
    private properties: CircleBodyProps,
  ) {
    const { x, y, radius, className } = this.properties;
    const options: IChamferableBodyDefinition = {
      friction: 0.7,
      // restitution: 1,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(this.world, this.body);

    this.circle = document.createElement('div');
    this.circle.className = `absolute ${className}`;
    this.circle.style.setProperty('border-radius', '100%');
    this.circle.style.setProperty('width', `${radius * 2}px`);
    this.circle.style.setProperty('height', `${radius * 2}px`);
    this.container.current.appendChild(this.circle);
    this.show();
  }

  show() {
    const { radius } = this.properties;
    const { position, angle } = this.body;
    this.circle.style.setProperty('left', `${position.x - radius}px`);
    this.circle.style.setProperty('top', `${position.y - radius}px`);
    this.circle.style.setProperty('rotate', `${angle * (180 / Math.PI)}deg`);
  }

  destroy() {
    this.circle.remove();
  }
}
