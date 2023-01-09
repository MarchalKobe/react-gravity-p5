import {
  Bodies,
  Body,
  Common,
  IChamferableBodyDefinition,
  World,
} from 'matter-js';
import { MutableRefObject } from 'react';

import { coinsContainerVertices } from '../constants/coins-container.constant';

export interface CoinsContainerBodyProps {
  x: number;
  y: number;
  className: string;
}

export class CoinsContainer {
  body: Body;
  coinsContainer: HTMLDivElement;

  constructor(
    private world: World,
    private container: MutableRefObject<HTMLDivElement>,
    private properties: CoinsContainerBodyProps,
  ) {
    Common.setDecomp(require('poly-decomp'));
    const { x, y, className } = this.properties;
    const options: IChamferableBodyDefinition = {
      isStatic: true,
    };
    // TODO: Temporary fix?
    const xOffset = 5;
    const yOffset = 77;
    this.body = Bodies.fromVertices(
      x + xOffset,
      y + yOffset,
      coinsContainerVertices,
      options,
      true,
    );
    World.add(this.world, this.body);

    const width = 284;
    const height = 236;

    this.coinsContainer = document.createElement('div');
    this.coinsContainer.className = `absolute ${className}`;
    this.coinsContainer.style.setProperty(
      'border-radius',
      '0px 0px 100px 100px',
    );
    this.coinsContainer.style.setProperty('width', `${width}px`);
    this.coinsContainer.style.setProperty('height', `${height}px`);
    this.coinsContainer.style.setProperty('left', `${x - width / 2}px`);
    this.coinsContainer.style.setProperty('top', `${y - height / 2}px`);
    this.container.current.appendChild(this.coinsContainer);
    this.show();
  }

  // Coins container is static
  show() {}

  destroy() {}
}
