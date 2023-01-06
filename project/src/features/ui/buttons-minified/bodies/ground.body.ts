import { Bodies, Body, Render, World } from 'matter-js';

export class Ground {
  body: Body;

  constructor(private render: Render, private world: World) {
    const options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(
      this.render.options.width! / 2,
      this.render.options.height! + 50,
      this.render.options.width!,
      100,
      options,
    );
    World.add(this.world, this.body);
  }
}
