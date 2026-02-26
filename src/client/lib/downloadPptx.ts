interface StructuredError {
  type: string;
  message: string;
}

function isErrorResponse(value: unknown): value is { error: StructuredError } {
  if (typeof value !== "object" || value === null || !("error" in value)) {
    return false;
  }
  const err: unknown = Object.getOwnPropertyDescriptor(value, "error")?.value;
  if (typeof err !== "object" || err === null) {
    return false;
  }
  if (!("type" in err) || !("message" in err)) {
    return false;
  }
  const typeVal: unknown = Object.getOwnPropertyDescriptor(err, "type")?.value;
  const msgVal: unknown = Object.getOwnPropertyDescriptor(
    err,
    "message",
  )?.value;
  return typeof typeVal === "string" && typeof msgVal === "string";
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
        message = parsed.error.message;
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
