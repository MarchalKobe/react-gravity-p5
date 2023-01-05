import { Bodies, Body, IChamferableBodyDefinition, World } from 'matter-js';
import p5Types, { Element } from 'p5';

export class Button {
  body: Body;
  button: Element;

  constructor(
    private world: World,
    private p5: p5Types,
    private x: number,
    private y: number,
    private width: number,
    private height: number,
    private label: string,
    private color: string,
    private backgroundColor: string,
    private onClick: Function,
  ) {
    const options: IChamferableBodyDefinition = {
      friction: 0.8,
      restitution: 0.6,
      chamfer: { radius: 24 },
    };
    this.body = Bodies.rectangle(this.x, this.y, width, height, options);
    World.add(this.world, this.body);

    this.button = this.p5.createButton(this.label);

    this.button.mouseClicked(() => this.onClick());
    this.button.mouseOver(() => {
      this.button.style('opacity', 0.8);
    });
    this.button.mouseOut(() => {
      this.button.style('opacity', 1);
    });

    this.button.hide();
  }

  show = () => {
    var pos = this.body.position;
    var angle = this.body.angle;

    this.button.show();
    this.button.position(pos.x - this.width / 2, pos.y - this.height / 2);
    this.button.size(this.width, this.height);
    this.button.style('color', this.color);
    this.button.style('background', this.backgroundColor);
    this.button.style('border-radius', '24px');
    this.button.style('border', '2px solid #232832');
    this.button.style('rotate', `${angle * (180 / Math.PI)}deg`);
  };
}
