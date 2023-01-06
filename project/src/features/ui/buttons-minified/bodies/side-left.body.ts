import { Bodies, Body, Render, World } from 'matter-js';

export class SideLeft {
  body: Body;

  constructor(private render: Render, private world: World) {
    const options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(
      this.render.options.width! / 2 - 50,
      this.render.options.height! / 2,
      100,
      this.render.options.height!,
      options,
    );
    World.add(this.world, this.body);
  }
}
