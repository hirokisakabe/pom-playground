import { buildPptx, parseXml } from "@hirokisakabe/pom";
import { convertPptxToSvg } from "pptx-glimpse";

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

export async function convertXmlToPreview(
  xml: string,
): Promise<{ svgs: string[] }> {
  const nodes = parseXml(xml);
  const pptx = await buildPptx(nodes, { w: SLIDE_WIDTH, h: SLIDE_HEIGHT });
  const buffer = await pptx.write({
    outputType: "uint8array",
  });
  if (!(buffer instanceof Uint8Array)) {
    throw new Error("Unexpected output type from pptx.write");
  }
  const slides = await convertPptxToSvg(buffer, { width: SLIDE_WIDTH });
  return { svgs: slides.map((s) => s.svg) };
}
