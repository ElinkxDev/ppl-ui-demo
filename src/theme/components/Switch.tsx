import React from "react";

import { Divider, Grid, Switch, Typography } from "@ppl/ui";

// Ukázka komponenty Switch – struktura konzistentní s Buttons.tsx
const Switches = () => {
  type SwitchColor = "primary" | "success" | "error" | "warning" | "carton";
  const colors: { key: SwitchColor; label: string }[] = [
    { key: "primary", label: "Primary" },
    { key: "success", label: "Success" },
    { key: "error", label: "Error" },
    { key: "warning", label: "Warning" },
    { key: "carton", label: "Carton" },
  ];

  return (
    <Grid container>
      {/* Výchozí vzhled */}
      <Grid size={12}>
        <div className="mb-10 flex flex-col items-center justify-center bg-[var(--color-headline-5)] p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <div className="flex items-center gap-8">
            <Switch />
          </div>
        </div>
      </Grid>

      {/* SECTION: Variant and color combinations */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Variant and color combinations
        </Typography>
      </Grid>

      {/* Header row */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          {colors.map(c => (
            <Grid size={2} key={c.key}>
              <Typography component="strong" className="block text-center font-bold">
                {c.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Checked row (color visible) */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Checked
            </Typography>
          </Grid>
          {colors.map(c => (
            <Grid size={2} key={c.key}>
              <Switch color={c.key} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Unchecked row (neutral track) */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Unchecked
            </Typography>
          </Grid>
          {colors.map(c => (
            <Grid size={2} key={c.key}>
              <Switch color={c.key} checked={false} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Disabled */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Disabled
        </Typography>
      </Grid>

      {/* Disabled header row */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          {colors.map(c => (
            <Grid size={2} key={c.key}>
              <Typography component="strong" className="block text-center font-bold">
                {c.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Disabled Checked */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Checked
            </Typography>
          </Grid>
          {colors.map(c => (
            <Grid size={2} key={c.key}>
              <Switch disabled color={c.key} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Disabled Unchecked */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Unchecked
            </Typography>
          </Grid>
          {colors.map(c => (
            <Grid size={2} key={c.key}>
              <Switch disabled color={c.key} checked={false} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Switches;
