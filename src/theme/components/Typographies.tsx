import { useEffect, useRef, useState } from "react";

import { Grid, Typography, type TypographyProps } from "@ppl/ui";

/**
 * Komponenta pro zobrazení ukázky typografie s dynamickými informacemi o font-size a line-height.
 * Hodnoty se získávají pomocí getComputedStyle, takže reagují na změny breakpointů.
 */
const TypographyInfo = ({
  variant,
  children,
}: {
  /**
   * Varianta typografie, pro kterou se zobrazí informace.
   */
  variant: NonNullable<TypographyProps["variant"]>;

  /**
   * Text ukázky.
   */
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

    // Inicializace
    updateStyles();

    // Sledování změn velikosti elementu (breakpointy)
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

const Typographies = () => {
  return (
    <Grid container columns={9} alignItems="center">
      <Grid>
        <Typography component="strong" className="font-bold">
          Variant
        </Typography>
      </Grid>
      <Grid size={8}>
        <Typography component="strong" className="font-bold">
          Example text
        </Typography>
      </Grid>
      <Grid>
        <Typography component="strong" className="font-bold">
          h1
        </Typography>
      </Grid>
      <Grid size={8}>
        <TypographyInfo variant="h1">Heading h1</TypographyInfo>
      </Grid>
      <Grid>
        <Typography component="strong" className="font-bold">
          h2
        </Typography>
      </Grid>
      <Grid size={8}>
        <TypographyInfo variant="h2">Heading h2</TypographyInfo>
      </Grid>
      <Grid>
        <Typography component="strong" className="font-bold">
          h3
        </Typography>
      </Grid>
      <Grid size={8}>
        <TypographyInfo variant="h3">Heading h3</TypographyInfo>
      </Grid>
      <Grid>
        <Typography component="strong" className="font-bold">
          h4
        </Typography>
      </Grid>
      <Grid size={8}>
        <TypographyInfo variant="h4">Heading h4</TypographyInfo>
      </Grid>
      <Grid>
        <Typography component="strong" className="font-bold">
          h5
        </Typography>
      </Grid>
      <Grid size={8}>
        <TypographyInfo variant="h5">Heading h5</TypographyInfo>
      </Grid>
      <Grid>
        <Typography component="strong" className="font-bold">
          body
        </Typography>
      </Grid>
      <Grid size={8}>
        <TypographyInfo variant="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </TypographyInfo>
      </Grid>
      <Grid>
        <Typography component="strong" className="font-bold">
          labelM
        </Typography>
      </Grid>
      <Grid size={8}>
        <TypographyInfo variant="labelM">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </TypographyInfo>
      </Grid>
      <Grid>
        <Typography component="strong" className="font-bold">
          labelS
        </Typography>
      </Grid>
      <Grid size={8}>
        <TypographyInfo variant="labelS">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </TypographyInfo>
      </Grid>
    </Grid>
  );
};

export default Typographies;
