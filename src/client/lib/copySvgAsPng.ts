import { honoClient } from "./honoClient";

export async function copySvgAsPng(xml: string, slide: number): Promise<void> {
  if (
    !("clipboard" in navigator) ||
    !("write" in navigator.clipboard) ||
    typeof ClipboardItem === "undefined"
  ) {
    throw new Error(
      "お使いのブラウザはクリップボードへの画像コピーに対応していません",
    );
  }

  const res = await honoClient.api.png.$post({
    json: { xml, slide },
  });

  if (!res.ok) {
    throw new Error("PNG の生成に失敗しました");
  }

  const blob = await res.blob();

  await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
}
