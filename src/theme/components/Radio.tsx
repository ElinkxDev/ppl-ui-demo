import React from "react";
import { Heart, Home02, User01 } from "@untitledui/icons";

import { Divider, Grid, Icon, Radio, RadioGroup, Typography } from "@ppl/ui";

// Ukázka komponenty Radio – struktura konzistentní s Checkbox.tsx
const Radios = () => {
  type RadioColor = "primary" | "success" | "error" | "warning" | "carton";
  const colors: Array<{ key: RadioColor; label: string }> = [
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
        <div className="bg-headline-5 mb-10 flex flex-col items-center justify-center p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <div className="flex items-center gap-8">
            <RadioGroup defaultValue="default">
              <Radio value="default" />
            </RadioGroup>
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
          {colors.map((c) => (
            <Grid size={2} key={c.key}>
              <Typography component="strong" className="block text-center font-bold">
                {c.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Checked row */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Checked
            </Typography>
          </Grid>
          {colors.map((c) => (
            <Grid size={2} key={c.key}>
              <RadioGroup defaultValue="checked">
                <Radio value="checked" color={c.key} />
              </RadioGroup>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Unchecked row */}
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Unchecked
            </Typography>
          </Grid>
          {colors.map((c) => (
            <Grid size={2} key={c.key}>
              <RadioGroup defaultValue="other">
                <Radio value="unchecked" color={c.key} />
              </RadioGroup>
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
          {colors.map((c) => (
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
          {colors.map((c) => (
            <Grid size={2} key={c.key}>
              <RadioGroup defaultValue="checked" disabled>
                <Radio value="checked" color={c.key} />
              </RadioGroup>
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
          {colors.map((c) => (
            <Grid size={2} key={c.key}>
              <RadioGroup defaultValue="other" disabled>
                <Radio value="unchecked" color={c.key} />
              </RadioGroup>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: RadioGroup Implementation Examples */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          RadioGroup Implementation Examples
        </Typography>
      </Grid>

      {/* Example 1: Basic RadioGroup */}
      <Grid size={12}>
        <div className="mb-6 flex flex-col gap-4">
          <Typography variant="h5" component="h4" gutterBottom>
            Basic RadioGroup
          </Typography>
          <RadioGroup defaultValue="option2">
            <div className="flex flex-col gap-3">
              <label className="flex cursor-pointer items-center gap-2">
                <Radio value="option1" />
                <span>Option 1</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <Radio value="option2" />
                <span>Option 2</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <Radio value="option3" />
                <span>Option 3</span>
              </label>
            </div>
          </RadioGroup>
        </div>
      </Grid>

      {/* Example 2: RadioGroup with different colors */}
      <Grid size={12}>
        <div className="mb-6 flex flex-col gap-4">
          <Typography variant="h5" component="h4" gutterBottom>
            RadioGroup with Different Colors
          </Typography>
          <RadioGroup defaultValue="success">
            <div className="flex flex-col gap-3">
              <label className="flex cursor-pointer items-center gap-2">
                <Radio value="primary" color="primary" />
                <span>Primary Color</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <Radio value="success" color="success" />
                <span>Success Color</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <Radio value="error" color="error" />
                <span>Error Color</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <Radio value="warning" color="warning" />
                <span>Warning Color</span>
              </label>
            </div>
          </RadioGroup>
        </div>
      </Grid>

      {/* Example 3: Horizontal RadioGroup */}
      <Grid size={12}>
        <div className="mb-6 flex flex-col gap-4">
          <Typography variant="h5" component="h4" gutterBottom>
            Horizontal RadioGroup
          </Typography>
          <RadioGroup defaultValue="medium" row className="gap-5">
            <label className="flex cursor-pointer items-center gap-2">
              <Radio value="small" />
              <span>Small</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <Radio value="medium" />
              <span>Medium</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <Radio value="large" />
              <span>Large</span>
            </label>
          </RadioGroup>
        </div>
      </Grid>

      {/* Example 4: Disabled RadioGroup */}
      <Grid size={12}>
        <div className="mb-6 flex flex-col gap-4">
          <Typography variant="h5" component="h4" gutterBottom>
            Disabled RadioGroup
          </Typography>
          <RadioGroup defaultValue="option2" disabled>
            <div className="flex flex-col gap-3">
              <label className="flex cursor-not-allowed items-center gap-2 opacity-50">
                <Radio value="option1" />
                <span>Disabled Option 1</span>
              </label>
              <label className="flex cursor-not-allowed items-center gap-2 opacity-50">
                <Radio value="option2" />
                <span>Disabled Option 2 (Checked)</span>
              </label>
              <label className="flex cursor-not-allowed items-center gap-2 opacity-50">
                <Radio value="option3" />
                <span>Disabled Option 3</span>
              </label>
            </div>
          </RadioGroup>
        </div>
      </Grid>

      {/* Example 5: Controlled RadioGroup */}
      <Grid size={12}>
        <div className="mb-6 flex flex-col gap-4">
          <Typography variant="h5" component="h4" gutterBottom>
            Controlled RadioGroup (with state)
          </Typography>
          <ControlledRadioExample />
        </div>
      </Grid>
    </Grid>
  );
};

// Controlled example helper component
const ControlledRadioExample = () => {
  const [value, setValue] = React.useState("heart");

  return (
    <div className="flex flex-col gap-4">
      <Typography>Selected: {value}</Typography>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex flex-col gap-3">
          <label className="flex cursor-pointer items-center gap-2">
            <Radio value="heart" color="primary" />
            <Icon icon={Heart} size="md" color="primary" />
            <span>Heart</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <Radio value="home" color="success" />
            <Icon icon={Home02} size="md" color="success" />
            <span>Home</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <Radio value="user" color="warning" />
            <Icon icon={User01} size="md" color="warning" />
            <span>User</span>
          </label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default Radios;
