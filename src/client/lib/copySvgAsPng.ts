export async function copySvgAsPng(svgString: string): Promise<void> {
  if (
    !("clipboard" in navigator) ||
    !("write" in navigator.clipboard) ||
    typeof ClipboardItem === "undefined"
  ) {
    throw new Error(
      "お使いのブラウザはクリップボードへの画像コピーに対応していません",
    );
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svgElement = doc.documentElement;

  let width = parseFloat(svgElement.getAttribute("width") ?? "0");
  let height = parseFloat(svgElement.getAttribute("height") ?? "0");

  const hasValidSize =
    Number.isFinite(width) &&
    width > 0 &&
    Number.isFinite(height) &&
    height > 0;

  if (!hasValidSize) {
    const viewBox = svgElement.getAttribute("viewBox");
    if (viewBox) {
      const parts = viewBox.split(/[\s,]+/);
      width = parseFloat(parts[2]) || 1280;
      height = parseFloat(parts[3]) || 720;
    } else {
      width = 1280;
      height = 720;
    }
  }

  if (!svgElement.getAttribute("xmlns")) {
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  }

  const serializer = new XMLSerializer();
  const svgData = serializer.serializeToString(svgElement);
  const svgBlob = new Blob([svgData], {
    type: "image/svg+xml;charset=utf-8",
  });
  const url = URL.createObjectURL(svgBlob);

  try {
    const img = await loadImage(url);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas context is not available");
    }

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    const pngBlob = await canvasToBlob(canvas);

    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": pngBlob }),
    ]);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error("Failed to load SVG as image"));
    };
    img.src = src;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Failed to convert canvas to PNG"));
      }
    }, "image/png");
  });
}
