import { Bodies, Body, World } from 'matter-js';
import p5Types from 'p5';

export class Box {
  body: Body;

  constructor(
    private world: World,
    private p5: p5Types,
    private x: number,
    private y: number,
    private width: number,
    private height: number,
  ) {
    const options = {
      friction: 0.3,
      restitution: 0.6,
    };

    this.body = Bodies.rectangle(this.x, this.y, width, height, options);
    World.add(this.world, this.body);
  }

  show = () => {
    var pos = this.body.position;
    var angle = this.body.angle;
    this.p5.push();
    this.p5.translate(pos.x, pos.y);
    this.p5.rotate(angle);
    this.p5.rectMode(this.p5.CENTER);
    this.p5.strokeWeight(1);
    this.p5.stroke(255);
    this.p5.fill(127);
    this.p5.rect(0, 0, this.width, this.height);
    this.p5.pop();
  };
}
