import { buildPptx, parseXml } from "@hirokisakabe/pom";
import { convertPptxToPng } from "pptx-glimpse";

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

export async function convertXmlToPng(
  xml: string,
  slide: number,
): Promise<ArrayBuffer> {
  const nodes = parseXml(xml);
  const pptx = await buildPptx(nodes, { w: SLIDE_WIDTH, h: SLIDE_HEIGHT });
  const buffer = await pptx.write({
    outputType: "uint8array",
  });
  if (!(buffer instanceof Uint8Array)) {
    throw new Error("Unexpected output type from pptx.write");
  }
  const images = await convertPptxToPng(buffer, {
    width: SLIDE_WIDTH,
    slides: [slide],
  });
  if (images.length === 0) {
    throw new Error(`Slide ${String(slide)} not found`);
  }
  const png = images[0].png;
  const arrayBuffer = new ArrayBuffer(png.byteLength);
  new Uint8Array(arrayBuffer).set(png);
  return arrayBuffer;
}
