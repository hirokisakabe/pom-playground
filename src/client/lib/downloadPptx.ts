function isErrorResponse(value: unknown): value is { error: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "error" in value &&
    typeof Object.getOwnPropertyDescriptor(value, "error")?.value === "string"
  );
}

export async function downloadPptx(xml: string): Promise<void> {
  const res = await fetch("/api/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ xml }),
  });

  if (!res.ok) {
    let message = "ダウンロードに失敗しました";
    try {
      const text = await res.text();
      const parsed: unknown = JSON.parse(text);
      if (isErrorResponse(parsed)) {
        message = parsed.error;
      }
    } catch {
      // JSONパースに失敗した場合はデフォルトメッセージを使用
    }
    throw new Error(message);
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "output.pptx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 0);
}
