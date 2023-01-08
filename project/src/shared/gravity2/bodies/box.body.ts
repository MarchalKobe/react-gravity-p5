import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';
import { MutableRefObject } from 'react';

export interface BoxBodyProps {
  x: number;
  y: number;
  width: number;
  height: number;
  className: string;
}

export class Box {
  body: Body;
  box: HTMLDivElement;

  constructor(
    private world: World,
    private container: MutableRefObject<HTMLDivElement>,
    private properties: BoxBodyProps,
  ) {
    const { x, y, width, height, className } = this.properties;
    const options: IChamferableBodyDefinition = {
      friction: 0.7,
      // restitution: 1,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(this.world, this.body);

    this.box = document.createElement('div');
    this.box.className = `absolute ${className}`;
    this.box.style.setProperty('width', `${width}px`);
    this.box.style.setProperty('height', `${height}px`);
    this.container.current.appendChild(this.box);
    this.show();
  }

  show() {
    const { width, height } = this.properties;
    const { position, angle } = this.body;
    this.box.style.setProperty('left', `${position.x - width / 2}px`);
    this.box.style.setProperty('top', `${position.y - height / 2}px`);
    this.box.style.setProperty('rotate', `${angle * (180 / Math.PI)}deg`);
  }

  destroy() {
    this.box.remove();
  }
}
