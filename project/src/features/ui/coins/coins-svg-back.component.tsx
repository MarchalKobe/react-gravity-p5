import { Bodies, Engine, Render, Runner, World, Svg, Common } from 'matter-js';
import 'pathseg';
import { FunctionComponent } from 'react';

export interface CoinsProps {}

let engine: Engine;
let world: World;
let render: Render;

const select = (root: Document, selector: string) => {
  return Array.prototype.slice.call(root.querySelectorAll(selector));
};

if (typeof document !== 'undefined') {
  const svgString =
    '<svg width="294" height="241" viewBox="0 0 294 241" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 141.349V1H5V137.791L5.50088 146.309L6.50265 153.825L8.50617 162.844L11.5115 171.362L13.515 176.874L17.0212 183.889L22.03 191.906L27.5397 199.422L32.5485 204.934L44.0688 215.456L56.5908 223.473L64.6049 227.482L76.1252 231.991L87.1446 234.497L93.1552 235.499L103.173 236H192.33L202.848 234.998L210.862 233.495L217.875 231.49L223.885 229.486L230.898 226.48L238.912 222.471L243.921 219.465L249.43 215.456L253.437 211.949L257.945 207.94L262.453 203.431L268.965 195.414L273.473 188.9L279.483 178.377L282.489 169.859L284.993 162.844L286.496 155.829L288.499 145.808L289 138.793V1H293V142.874L292.484 148.977L291.968 153.553L290.421 161.689L288.357 168.809L285.777 176.436L282.682 183.047L278.555 190.674L273.396 198.302L268.753 203.896L262.562 210.506L254.823 217.626L247.085 223.219L237.283 228.813L227.996 232.881L215.615 236.949L205.297 238.983L193.947 240H102.117L92.3145 239.492L85.6078 238.474L74.258 235.932L63.424 231.864L55.6855 228.304L47.947 223.728L41.2403 219.151L33.5018 212.54L26.7951 205.93L22.1519 200.336L17.5088 193.726L13.3816 187.115L9.77032 179.996L6.67491 171.86L4.61131 165.757L2.5477 156.604L1.5159 148.468L1 141.349Z" stroke="black"/></svg>';
  var parser = new DOMParser();
  var svgDocument = parser.parseFromString(svgString, 'image/svg+xml');

  Common.setDecomp(require('poly-decomp'));

  engine = Engine.create();
  world = engine.world;

  render = Render.create({
    element: document.body,
    engine: engine,
  });

  const vertexSets = select(svgDocument, 'path').map((path) => {
    return Svg.pathToVertices(path, 30);
  });

  console.log(JSON.stringify(vertexSets));

  // TODO: Temporary fix?
  const xOffset = 5;
  const yOffset = 77;

  const container = Bodies.fromVertices(
    render.options.width! / 2 + xOffset,
    render.options.height! / 2 + yOffset,
    vertexSets,
    {
      isStatic: true,
    },
    true,
  );

  const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
  const circle = Bodies.circle(
    render.options.width! / 2,
    render.options.height! / 2,
    5,
    {
      isStatic: true,
    },
  );

  World.add(engine.world, [ground, container, circle]);

  Render.run(render);
  Runner.run(engine);
}

export const Coins: FunctionComponent<CoinsProps> = ({}) => {
  return <div></div>;
};
