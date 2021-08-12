import { useEffect, useState } from "react";

type Props = {
  onScriptLoad?: (event) => void;
  onScriptError?: (event) => void;
  scriptUrl: string;
};

export default function loadScript({
  onScriptLoad,
  onScriptError,
  scriptUrl,
}: Props) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [ready, setReady] = useState<Boolean>(false);
  const [errored, setErrored] = useState<Boolean>(false);

  useEffect(() => {
    const document = globalThis?.document;

    let existingScript = document?.querySelector(`script[src="${scriptUrl}"]`);

    if (document && !errored && !loading && !ready && !existingScript) {
      const script = document.createElement("script");
      script.setAttribute("src", scriptUrl);
      script.setAttribute("async", "true");

      script.addEventListener("load", (ev) => {
        setLoading(false);
        setReady(true);
        if (onScriptLoad) {
          onScriptLoad(ev);
        }
      });

      script.addEventListener("error", (ev) => {
        setLoading(false);
        setReady(false);
        setErrored(true);

        if (onScriptError) {
          onScriptError(ev);
        }
      });
    }
  });

  return { ready, errored, loading };
}
