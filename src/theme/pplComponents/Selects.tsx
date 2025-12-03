import { useState } from "react";
import { Select, Typography } from "@ppl/ui";

const basicOptions = [
  { value: "option1", label: "Možnost 1" },
  { value: "option2", label: "Možnost 2" },
  { value: "option3", label: "Možnost 3" },
  { value: "option4", label: "Možnost 4", disabled: true },
];

const groupedOptions = [
  {
    label: "Kategorie A",
    options: [
      { value: "a1", label: "Položka A1" },
      { value: "a2", label: "Položka A2" },
    ],
  },
  {
    label: "Kategorie B",
    options: [
      { value: "b1", label: "Položka B1" },
      { value: "b2", label: "Položka B2" },
    ],
  },
];

export default function Selects() {
  const [filledValue, setFilledValue] = useState<string>("option1");
  const [groupedValue, setGroupedValue] = useState<string>("a1");

  return (
    <>
      <Typography variant="h3" color="carton" gutterBottom>
        Select
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Header row */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center" />
          <div className="min-w-[250px] text-center">
            <Typography component="strong" className="font-bold">
              Empty
            </Typography>
          </div>
          <div className="min-w-[250px] text-center">
            <Typography component="strong" className="font-bold">
              Filled
            </Typography>
          </div>
        </div>

        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <Select label="Title" options={basicOptions} helperText="Helper text" />
          </div>
          <div className="min-w-[250px]">
            <Select
              label="Title"
              options={basicOptions}
              value={filledValue}
              onChange={setFilledValue}
              helperText="Helper text"
            />
          </div>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <Select label="Title" options={basicOptions} interactionState="hover" helperText="Helper text" />
          </div>
          <div className="min-w-[250px]">
            <Select
              label="Title"
              options={basicOptions}
              value="option1"
              interactionState="hover"
              helperText="Helper text"
            />
          </div>
        </div>

        {/* Focus */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <Select label="Title" options={basicOptions} interactionState="focus" helperText="Helper text" />
          </div>
          <div className="min-w-[250px]">
            <Select
              label="Title"
              options={basicOptions}
              value="option1"
              interactionState="focus"
              helperText="Helper text"
            />
          </div>
        </div>

        {/* Error */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Error
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <Select label="Title" options={basicOptions} error helperText="Field is required" />
          </div>
          <div className="min-w-[250px]">
            <Select label="Title" options={basicOptions} value="option1" error helperText="Invalid selection" />
          </div>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <Select label="Title" options={basicOptions} disabled helperText="Helper text" />
          </div>
          <div className="min-w-[250px]">
            <Select label="Title" options={basicOptions} value="option1" disabled helperText="Helper text" />
          </div>
        </div>

        {/* Grouped */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Grouped
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <Select label="Grouped Select" groupedOptions={groupedOptions} helperText="With grouped options" />
          </div>
          <div className="min-w-[250px]">
            <Select
              label="Grouped Select"
              groupedOptions={groupedOptions}
              value={groupedValue}
              onChange={setGroupedValue}
              helperText="With grouped options"
            />
          </div>
        </div>

        {/* Custom Render */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Custom Render
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <Select
              label="Custom Option"
              options={basicOptions}
              helperText="With custom option rendering"
              renderOption={(option, state) => (
                <div className="flex items-center gap-2">
                  {state.selected && <span className="text-primary">✓</span>}
                  <span className={state.highlighted ? "font-semibold" : ""}>{option.label}</span>
                </div>
              )}
            />
          </div>
          <div className="min-w-[250px]">
            <Select
              label="Custom Value"
              options={basicOptions}
              value="option2"
              helperText="With custom value rendering"
              renderValue={selected => (
                <span className="text-primary font-semibold">★ {selected?.label || "Vyberte..."}</span>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
