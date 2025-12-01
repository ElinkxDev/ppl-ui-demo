import type { ComponentType, ReactNode, SVGProps } from "react";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CursorClick02,
  Edit05,
  CheckSquare,
  CheckCircle,
  Toggle01Left,
  Tag01,
  AlignLeft01,
  Palette as PaletteIcon,
} from "@untitledui/icons";
import { Tooltip } from "@base-ui-components/react/tooltip";

import { Divider, Icon, IconButton, Typography } from "@ppl/ui";

import Buttons from "./pplComponents/Buttons";
import TextFields from "./pplComponents/TextFields";
import TextAreas from "./pplComponents/TextAreas";
import Checkboxes from "./pplComponents/Checkboxes";
import Radios from "./pplComponents/Radios";
import Switches from "./pplComponents/Switches";
import ChipsAndBadges from "./pplComponents/ChipsAndBadges";
import { Type01 } from "@untitledui/icons/Type01";
import Typographies from "./components/Typographies";
import Radius from "./components/Radius";
import { ArrowCircleBrokenUpRight } from "@untitledui/icons/ArrowCircleBrokenUpRight";
import Icons from "./components/Icons";
import Palette from "./pplComponents/Pallete";
import Selects from "./pplComponents/Selects";

const Container = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  return (
    <div id={id} className="px-10 py-4 md:px-30">
      {children}
    </div>
  );
};

// Typy pro konfiguraci modulů
interface ModuleConfig {
  /**
   * Unikátní ID modulu (používá se pro scroll anchor).
   */
  id: string;

  /**
   * Zobrazovaný název modulu.
   */
  label: string;

  /**
   * React komponenta modulu.
   */
  component: ReactNode;

  /**
   * Ikona z @untitledui/icons.
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

// Konfigurace všech modulů design systému
const modules: ModuleConfig[] = [
  {
    id: "palette",
    label: "Palette",
    component: <Palette />,
    icon: PaletteIcon,
  },
  {
    id: "typography",
    label: "Typography",
    component: <Typographies />,
    icon: Type01,
  },
  {
    id: "radius",
    label: "Radius",
    component: <Radius />,
    icon: ArrowCircleBrokenUpRight,
  },
  {
    id: "icons",
    label: "Icons",
    component: <Icons />,
    icon: Tag01,
  },
  {
    id: "buttons",
    label: "Buttons",
    component: <Buttons />,
    icon: CursorClick02,
  },
  {
    id: "textfields",
    label: "Text Fields",
    component: <TextFields />,
    icon: Edit05,
  },
  {
    id: "textareas",
    label: "Text Areas",
    component: <TextAreas />,
    icon: AlignLeft01,
  },
  {
    id: "selects",
    label: "Selects",
    component: <Selects />,
    icon: AlignLeft01,
  },
  {
    id: "checkboxes",
    label: "Checkboxes",
    component: <Checkboxes />,
    icon: CheckSquare,
  },
  {
    id: "radios",
    label: "Radio Buttons",
    component: <Radios />,
    icon: CheckCircle,
  },
  {
    id: "switches",
    label: "Switches",
    component: <Switches />,
    icon: Toggle01Left,
  },
  {
    id: "chips-badges",
    label: "Chips & Badges",
    component: <ChipsAndBadges />,
    icon: Tag01,
  },
];

const PPLDesignManual = () => {
  const [isPanelExpanded, setIsPanelExpanded] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative py-10">
      {/* Navigační panel */}
      <div
        className={`border-headline-10 fixed left-0 z-50 border-r bg-white transition-all duration-300 ${
          isPanelExpanded ? "w-64" : "w-16"
        }`}
        style={{
          top: "var(--header-height, 60px)",
          height: "calc(100vh - var(--header-height, 60px))",
        }}
      >
        {/* Toggle button */}
        <div
          className={`border-headline-10 flex border-b p-2 ${isPanelExpanded ? "justify-end" : "justify-center"}`}
        >
          <IconButton
            aria-label={isPanelExpanded ? "Minimalizovat panel" : "Rozbalit panel"}
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => setIsPanelExpanded(!isPanelExpanded)}
          >
            <Icon icon={isPanelExpanded ? ChevronLeft : ChevronRight} size="sm" />
          </IconButton>
        </div>

        {/* Navigační položky */}
        <nav className="py-4">
          <Tooltip.Provider>
            {modules.map((module) => {
              if (!isPanelExpanded) {
                return (
                  <Tooltip.Root key={module.id}>
                    <Tooltip.Trigger
                      className={`hover:bg-headline-5 flex w-full cursor-pointer items-center justify-center gap-3 px-4 py-3 transition-colors`}
                      onClick={() => scrollToSection(module.id)}
                    >
                      <Icon icon={module.icon} size="md" color="primary" />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Positioner side="right" sideOffset={8}>
                        <Tooltip.Popup className="text-text-inverse rounded px-2 py-1 text-sm shadow-lg">
                          {module.label}
                        </Tooltip.Popup>
                      </Tooltip.Positioner>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                );
              }

              return (
                <button
                  key={module.id}
                  onClick={() => scrollToSection(module.id)}
                  className={`hover:bg-headline-5 flex w-full cursor-pointer items-center gap-3 px-4 py-3 transition-colors`}
                >
                  <Icon icon={module.icon} size="md" color="primary" />
                  <Typography variant="body" color="text" className="text-left">
                    {module.label}
                  </Typography>
                </button>
              );
            })}
          </Tooltip.Provider>
        </nav>
      </div>

      {/* Main content s margin left */}
      <div className={`transition-all duration-300 ${isPanelExpanded ? "ml-64" : "ml-16"}`}>
        <Container>
          <Typography variant="h1" color="primary" gutterBottom>
            Universal PPL design system
          </Typography>
          <Typography variant="body" className="text-text-secondary mb-8">
            Jednotný design systém pro aplikace PPL postavený na moderních webových technologiích.
            Využívá{" "}
            <Typography component="strong" color="primary" className="font-bold">
              Tailwind CSS
            </Typography>{" "}
            pro utility-first přístup ke stylování, design tokeny pro centrální správu designových
            proměnných (barvy, typografie, rozestupy) a{" "}
            <Typography component="strong" color="primary" className="font-bold">
              React komponenty
            </Typography>{" "}
            pro znovupoužitelné UI prvky. Tokeny jsou definovány v JSON formátu a automaticky
            transformovány do CSS custom properties, což zajišťuje konzistenci designu napříč všemi
            aplikacemi a umožňuje snadnou údržbu a změny vzhledu na jednom místě. Pro ikony využívá
            knihovnu{" "}
            <Typography component="strong" color="primary" className="font-bold">
              @untitledui/icons
            </Typography>
            . Všechny komponenty jsou navrženy s důrazem na{" "}
            <Typography component="strong" color="primary" className="font-bold">
              přístupnost
            </Typography>{" "}
            a lze je plnohodnotně ovládat pomocí klávesnice.
          </Typography>
        </Container>

        {/* Dynamicky generované sekce z konfigurace */}
        {modules.map((module, index) => (
          <div key={module.id}>
            {index > 0 && <Divider className="my-10" />}
            <Container id={module.id}>{module.component}</Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PPLDesignManual;
