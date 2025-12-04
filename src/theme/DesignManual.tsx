import type { ComponentType, ReactNode, SVGProps } from "react";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Type01,
  Tag01,
  CursorClick02,
  CheckSquare,
  Toggle01Left,
  CheckCircle,
  Palette as PaletteIcon,
  ArrowCircleBrokenUpRight,
  Award01,
  Edit05,
  Loading02,
} from "@untitledui/icons";
import { Tooltip } from "@base-ui-components/react/tooltip";

import { Divider, Icon, IconButton, Typography } from "@ppl/ui";

import Badges from "./components/Badges";
import Buttons from "./components/Buttons";
import Checkbox from "./components/Checkbox";
import Chips from "./components/Chips";
import Icons from "./components/Icons";
import Palette from "./components/Palette";
import Radio from "./components/Radio";
import Radius from "./components/Radius";
import Selects from "./components/Selects";
import Switch from "./components/Switch";
import TextFields from "./components/TextFields";
import Skeletons from "./components/Skeletons";
import Tooltips from "./components/Tooltips";
import Typographies from "./components/Typographies";

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
    id: "textfield",
    label: "TextField",
    component: <TextFields />,
    icon: Edit05,
  },
  {
    id: "select",
    label: "Select",
    component: <Selects />,
    icon: CheckSquare,
  },
  {
    id: "badge",
    label: "Badge",
    component: <Badges />,
    icon: Award01,
  },
  {
    id: "chip",
    label: "Chip",
    component: <Chips />,
    icon: Tag01,
  },
  {
    id: "checkbox",
    label: "Checkbox",
    component: <Checkbox />,
    icon: CheckSquare,
  },
  {
    id: "switch",
    label: "Switch",
    component: <Switch />,
    icon: Toggle01Left,
  },
  {
    id: "radio",
    label: "Radio",
    component: <Radio />,
    icon: CheckCircle,
  },
  {
    id: "tooltip",
    label: "Tooltip",
    component: <Tooltips />,
    icon: CursorClick02,
  },
  {
    id: "skeleton",
    label: "Skeleton",
    component: <Skeletons />,
    icon: Loading02,
  },
];

const DesignManual = () => {
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
        <div className={`border-headline-10 flex border-b p-2 ${isPanelExpanded ? "justify-end" : "justify-center"}`}>
          <IconButton
            aria-label={isPanelExpanded ? "Minimalizovat panel" : "Rozbalit panel"}
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => setIsPanelExpanded(!isPanelExpanded)}
          >
            <Icon icon={isPanelExpanded ? ChevronLeft : ChevronRight} size="small" />
          </IconButton>
        </div>

        {/* Navigační položky */}
        <nav className="py-4">
          <Tooltip.Provider>
            {modules.map(module => {
              if (!isPanelExpanded) {
                return (
                  <Tooltip.Root key={module.id}>
                    <Tooltip.Trigger
                      className={`hover:bg-headline-5 flex w-full cursor-pointer items-center justify-center gap-3 px-4 py-3 transition-colors`}
                      onClick={() => scrollToSection(module.id)}
                    >
                      <Icon icon={module.icon} size="medium" color="primary" />
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
                  <Icon icon={module.icon} size="medium" color="primary" />
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
            Jednotný design systém pro aplikace PPL postavený na moderních webových technologiích. Využívá{" "}
            <Typography component="strong" color="primary" className="font-bold">
              Tailwind CSS
            </Typography>{" "}
            pro utility-first přístup ke stylování, design tokeny pro centrální správu designových proměnných (barvy,
            typografie, rozestupy) a{" "}
            <Typography component="strong" color="primary" className="font-bold">
              React komponenty
            </Typography>{" "}
            pro znovupoužitelné UI prvky. Tokeny jsou definovány v JSON formátu a automaticky transformovány do CSS
            custom properties, což zajišťuje konzistenci designu napříč všemi aplikacemi a umožňuje snadnou údržbu a
            změny vzhledu na jednom místě. Pro ikony využívá knihovnu{" "}
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
            <Container id={module.id}>
              <Typography variant="h2" color="primary" gutterBottom>
                {module.label}
              </Typography>
              {module.component}
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignManual;
