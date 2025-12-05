import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Grid, Typography, type TypographyProps } from "@ppl/ui";

type ViewMode = "auto" | "mobile" | "desktop";

/**
 * Komponenta pro zobrazení ukázky typografie s dynamickými informacemi o font-size a line-height.
 * Hodnoty se získávají pomocí getComputedStyle, takže reagují na změny breakpointů.
 */
const TypographyInfo = ({
  variant,
  children,
}: {
  variant: NonNullable<TypographyProps["variant"]>;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLElement>(null);
  const [styleInfo, setStyleInfo] = useState({ fontSize: "", lineHeight: "" });

  useEffect(() => {
    const updateStyles = () => {
      if (ref.current) {
        const computed = window.getComputedStyle(ref.current);
        setStyleInfo({
          fontSize: computed.fontSize,
          lineHeight: computed.lineHeight,
        });
      }
    };

    updateStyles();

    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(updateStyles);
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [variant]);

  return (
    <div>
      <Typography variant={variant} ref={ref}>
        {children}
      </Typography>
      <Typography variant="body" color="text" className="mt-1 opacity-70">
        font-size: {styleInfo.fontSize}, line-height: {styleInfo.lineHeight}
      </Typography>
    </div>
  );
};

const TypographyGrid = ({ labelSize = 1, contentSize = 8 }: { labelSize?: number; contentSize?: number }) => (
  <Grid container columns={labelSize + contentSize} alignItems="center">
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        Variant
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <Typography component="strong" className="font-bold">
        Example text
      </Typography>
    </Grid>
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        h1
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <TypographyInfo variant="h1">Heading h1</TypographyInfo>
    </Grid>
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        h2
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <TypographyInfo variant="h2">Heading h2</TypographyInfo>
    </Grid>
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        h3
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <TypographyInfo variant="h3">Heading h3</TypographyInfo>
    </Grid>
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        h4
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <TypographyInfo variant="h4">Heading h4</TypographyInfo>
    </Grid>
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        h5
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <TypographyInfo variant="h5">Heading h5</TypographyInfo>
    </Grid>
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        body
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <TypographyInfo variant="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </TypographyInfo>
    </Grid>
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        labelM
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <TypographyInfo variant="labelM">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </TypographyInfo>
    </Grid>
    <Grid size={labelSize}>
      <Typography component="strong" className="font-bold">
        labelS
      </Typography>
    </Grid>
    <Grid size={contentSize}>
      <TypographyInfo variant="labelS">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </TypographyInfo>
    </Grid>
  </Grid>
);

/**
 * Hook pro renderování React komponent do iframe pomocí portalu.
 * Kopíruje styly z hlavního dokumentu do iframe.
 */
const useIframePortal = (iframeRef: React.RefObject<HTMLIFrameElement | null>) => {
  const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      const iframeDoc = iframe.contentDocument;
      if (!iframeDoc) return;

      // Zkopírovat všechny styly z hlavního dokumentu
      const parentStyles = document.querySelectorAll('style, link[rel="stylesheet"]');
      parentStyles.forEach(style => {
        const clone = style.cloneNode(true) as HTMLElement;
        iframeDoc.head.appendChild(clone);
      });

      // Nastavit základní styly body
      iframeDoc.body.style.margin = "0";
      iframeDoc.body.style.padding = "16px";

      setIframeBody(iframeDoc.body);
    };

    iframe.addEventListener("load", handleLoad);

    // Trigger load pokud už je iframe načtený
    if (iframe.contentDocument?.readyState === "complete") {
      handleLoad();
    }

    return () => iframe.removeEventListener("load", handleLoad);
  }, [iframeRef]);

  return iframeBody;
};

/**
 * Komponenta pro zobrazení obsahu v iframe s automatickou výškou.
 */
const IframePreview = ({ width, children }: { width: number; children: React.ReactNode }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeBody = useIframePortal(iframeRef);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    if (!iframeBody) return;

    const updateHeight = () => {
      // Použít výšku prvního child elementu + padding
      const firstChild = iframeBody.firstElementChild as HTMLElement | null;
      if (firstChild) {
        const rect = firstChild.getBoundingClientRect();
        setHeight(rect.height + 32); // 16px padding nahoře + 16px dole
      }
    };

    // Počkat na renderování obsahu
    const timeoutId = setTimeout(updateHeight, 50);

    const observer = new ResizeObserver(updateHeight);
    if (iframeBody.firstElementChild) {
      observer.observe(iframeBody.firstElementChild);
    }

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [iframeBody, children]);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width,
        height,
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        display: "block",
      }}
      title="Typography Preview"
    >
      {iframeBody && createPortal(children, iframeBody)}
    </iframe>
  );
};

const Typographies = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("auto");

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={() => setViewMode("auto")}
          className={`px-3 py-1 rounded border ${viewMode === "auto" ? "bg-primary-100 border-primary-100 text-white" : "border-gray-300"}`}
        >
          Auto
        </button>
        <button
          type="button"
          onClick={() => setViewMode("mobile")}
          className={`px-3 py-1 rounded border ${viewMode === "mobile" ? "bg-primary-100 border-primary-100 text-white" : "border-gray-300"}`}
        >
          Mobile
        </button>
        <button
          type="button"
          onClick={() => setViewMode("desktop")}
          className={`px-3 py-1 rounded border ${viewMode === "desktop" ? "bg-primary-100 border-primary-100 text-white" : "border-gray-300"}`}
        >
          Desktop
        </button>
      </div>

      {viewMode === "auto" ? (
        <TypographyGrid />
      ) : (
        <div className="overflow-x-auto">
          <IframePreview width={viewMode === "mobile" ? 500 : 800}>
            <TypographyGrid labelSize={viewMode === "mobile" ? 2 : 1} contentSize={viewMode === "mobile" ? 5 : 8} />
          </IframePreview>
        </div>
      )}
    </div>
  );
};

export default Typographies;
