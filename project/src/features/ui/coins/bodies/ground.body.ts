import { Bodies, Body, World } from 'matter-js';
import p5Types from 'p5';

export class Ground {
  body: Body;

  constructor(private world: World, private p5: p5Types) {
    const options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(
      this.p5.width / 2,
      this.p5.height + 50,
      this.p5.width,
      100,
      options,
    );
    World.add(this.world, this.body);
  }
}
