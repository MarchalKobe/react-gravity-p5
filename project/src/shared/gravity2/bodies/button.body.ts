import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';
import { MutableRefObject } from 'react';

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
  button: HTMLButtonElement;

  constructor(
    private world: World,
    private container: MutableRefObject<HTMLDivElement>,
    private properties: ButtonBodyProps,
  ) {
    const { x, y, width, height, label, borderRadius, className, onClick } =
      this.properties;
    const options: IChamferableBodyDefinition = {
      friction: 0.7,
      // restitution: 0.6,
      chamfer: { radius: borderRadius },
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(this.world, this.body);

    const radius = Array.isArray(borderRadius)
      ? `${borderRadius.join('px ')}px`
      : `${borderRadius}px`;

    this.button = document.createElement('button');
    this.button.className = `absolute ${className}`;
    this.button.textContent = label;
    this.button.addEventListener('click', onClick);
    this.button.style.setProperty('border-radius', radius);
    this.button.style.setProperty('width', `${width}px`);
    this.button.style.setProperty('height', `${height}px`);
    this.container.current.appendChild(this.button);
    this.show();
  }

  show() {
    const { width, height } = this.properties;
    const { position, angle } = this.body;
    this.button.style.setProperty('left', `${position.x - width / 2}px`);
    this.button.style.setProperty('top', `${position.y - height / 2}px`);
    this.button.style.setProperty('rotate', `${angle * (180 / Math.PI)}deg`);
  }

  destroy() {
    this.button.remove();
  }
}
