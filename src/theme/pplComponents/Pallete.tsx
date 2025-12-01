import { Divider, Typography } from "@ppl/ui";

/**
 * Pallete - PPL Design System Color Palette Preview
 *
 * Komponenta pro náhled na barevnou paletu PPL Design Systému.
 */

interface ColorSwatchProps {
  name: string;
  colorClass?: string;
  hexValue: string;
  style?: React.CSSProperties;
}

interface DarkModeSwatchProps {
  name: string;
  hexValue: string;
}

function ColorSwatch({ name, colorClass, hexValue, style }: ColorSwatchProps) {
  return (
    <div className="flex flex-col">
      <div
        className={`${colorClass ?? ""} border-headline-10 h-32 w-full rounded-md border`}
        style={style}
      />
      <div className="mt-2">
        <p className="text-headline text-sm font-medium">{name}</p>
        <p className="text-text-60 text-xs">{hexValue}</p>
      </div>
    </div>
  );
}

function DarkModeSwatch({ name, hexValue }: DarkModeSwatchProps) {
  return (
    <div className="flex flex-col">
      <div
        className="h-32 w-full rounded-md border border-white/20"
        style={{ backgroundColor: hexValue }}
      />
      <div className="mt-2">
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-sm text-white/60">{hexValue}</p>
      </div>
    </div>
  );
}

const baseColors: ColorSwatchProps[] = [
  { name: "Background", colorClass: "bg-background", hexValue: "#FFFFFF" },
  { name: "Primary", colorClass: "bg-primary", hexValue: "#004B93" },
  { name: "Headline", colorClass: "bg-headline", hexValue: "#1D1D1D" },
  { name: "Text", colorClass: "bg-text", hexValue: "#495057" },
  { name: "Success", colorClass: "bg-success", hexValue: "#0AA87B" },
  { name: "Error", colorClass: "bg-error", hexValue: "#D40511" },
  { name: "Warning", colorClass: "bg-warning", hexValue: "#F46A13" },
  { name: "PPL Carton", colorClass: "bg-carton", hexValue: "#D4AC74" },
  { name: "PostYellow", colorClass: "bg-post-yellow", hexValue: "#FFCC00" },
];

const darkModeColors: DarkModeSwatchProps[] = [
  { name: "Background", hexValue: "#0F0E13" },
  { name: "Primary", hexValue: "#2B92F2" },
  { name: "Headline", hexValue: "#FFFFFF" },
  { name: "Text", hexValue: "#B0B4B8" },
  { name: "Success", hexValue: "#52CCA9" },
  { name: "Error", hexValue: "#E5454D" },
  { name: "Warning", hexValue: "#E78040" },
  { name: "PPL Carton", hexValue: "#D4AC74" },
  { name: "PostYellow", hexValue: "#FFCC00" },
];

export function Pallete() {
  return (
    <>
      <Typography variant="h3" color="carton" gutterBottom>
        Main Color Palette
      </Typography>
      <div className="grid grid-cols-4 gap-6">
        {baseColors.map((color) => (
          <ColorSwatch key={color.name} {...color} />
        ))}
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Dark Mode Color Palette
      </Typography>
      <div className="rounded-lg bg-black p-6">
        <div className="grid grid-cols-4 gap-6">
          {darkModeColors.map((color) => (
            <DarkModeSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Gradient
      </Typography>

      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col">
          <div
            className={`to-primary border-headline-10 h-32 w-full rounded-md border bg-linear-to-r from-[#2574C3]`}
          />
          <div className="mt-2">
            <p className="text-headline text-sm font-medium">Primary Gradient</p>
            <p className="text-text-60 text-xs">Linear from:#2574C3, to: #004B93</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={`border-headline-10 h-32 w-full rounded-md border bg-linear-to-r from-[var(--color-primary-10)] to-[var(--color-primary-30)]`}
          />
          <div className="mt-2">
            <p className="text-headline text-sm font-medium">Secondary Gradient</p>
            <p className="text-text-60 text-xs">Linear from:#E5EDF4, to: #B8D9F5</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pallete;
