import { Bodies, Body, World } from 'matter-js';
import p5Types from 'p5';

export class Ground {
  body: Body;

  constructor(private world: World, private p5: p5Types) {
    const options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(
      p5.width / 2,
      p5.height + 50,
      p5.width,
      100,
      options,
    );
    World.add(this.world, this.body);
  }

  show = () => {
    this.p5.noStroke();
    this.p5.fill('#000000');
    this.p5.rectMode(this.p5.CENTER);
    this.p5.rect(
      this.body.position.x,
      this.body.position.y,
      this.p5.width,
      100,
    );
  };
}
