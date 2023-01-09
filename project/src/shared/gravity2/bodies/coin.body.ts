import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';
import { MutableRefObject } from 'react';

export interface CoinBodyProps {
  x: number;
  y: number;
  radius: number;
  className: string;
}

export class Coin {
  body: Body;
  coin: HTMLDivElement;

  constructor(
    private world: World,
    private container: MutableRefObject<HTMLDivElement>,
    private properties: CoinBodyProps,
  ) {
    const { x, y, radius, className } = this.properties;
    const options: IChamferableBodyDefinition = {
      friction: 0,
      // restitution: 1,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(this.world, this.body);

    this.coin = document.createElement('div');
    this.coin.className = `absolute ${className}`;
    this.coin.style.setProperty('border-radius', '100%');
    this.coin.style.setProperty('width', `${radius * 2}px`);
    this.coin.style.setProperty('height', `${radius * 2}px`);
    this.container.current.appendChild(this.coin);
    this.show();
  }

  show() {
    const { radius } = this.properties;
    const { position, angle } = this.body;
    this.coin.style.setProperty('left', `${position.x - radius}px`);
    this.coin.style.setProperty('top', `${position.y - radius}px`);
    this.coin.style.setProperty('rotate', `${angle * (180 / Math.PI)}deg`);
  }

  destroy() {
    this.coin.remove();
  }
}
