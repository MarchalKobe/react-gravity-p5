import { Bodies, Body, Render, World } from 'matter-js';

export class SideRight {
  body: Body;

  constructor(private render: Render, private world: World) {
    const options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(
      this.render.options.width!,
      this.render.options.height! / 2,
      100,
      this.render.options.height!,
      options,
    );
    World.add(this.world, this.body);
  }
}
