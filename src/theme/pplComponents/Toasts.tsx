import { useState } from "react";
import { Button, Divider, Toast, Typography } from "@ppl/ui";
import type { ToastVariant } from "@ppl/ui";
import { Bell01 } from "@untitledui/icons/Bell01";

export default function Toasts() {
  const [openVariant, setOpenVariant] = useState<ToastVariant | null>(null);
  const [openPosition, setOpenPosition] = useState<string | null>(null);
  const [openAutoHide, setOpenAutoHide] = useState(false);
  const [openCustomIcon, setOpenCustomIcon] = useState(false);
  const [openNoIcon, setOpenNoIcon] = useState(false);
  const [openCustomAction, setOpenCustomAction] = useState(false);
  const [openNoClose, setOpenNoClose] = useState(false);

  const variants: { key: ToastVariant; label: string }[] = [
    { key: "success", label: "Success" },
    { key: "warning", label: "Warning" },
    { key: "danger", label: "Danger" },
    { key: "primary", label: "Primary" },
    { key: "general", label: "General" },
  ];

  const positions: {
    key: string;
    label: string;
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  }[] = [
    { key: "top-left", label: "Top Left", vertical: "top", horizontal: "left" },
    { key: "top-center", label: "Top Center", vertical: "top", horizontal: "center" },
    { key: "top-right", label: "Top Right", vertical: "top", horizontal: "right" },
    { key: "bottom-left", label: "Bottom Left", vertical: "bottom", horizontal: "left" },
    { key: "bottom-center", label: "Bottom Center", vertical: "bottom", horizontal: "center" },
    { key: "bottom-right", label: "Bottom Right", vertical: "bottom", horizontal: "right" },
  ];

  const currentPosition = positions.find(p => p.key === openPosition);

  return (
    <>
      <Typography variant="h2" color="primary" gutterBottom>
        Toast
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-8">
        Toast komponenta slouží k zobrazení krátkých notifikací uživateli. Podporuje různé barevné varianty, pozice na
        obrazovce, automatické skrytí a vlastní akce.
      </Typography>

      <Typography variant="h3" color="carton" gutterBottom>
        Varianty
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Toast podporuje 5 barevných variant: success, warning, danger, primary a general (výchozí).
      </Typography>
      <div className="flex flex-wrap gap-4">
        {variants.map(v => (
          <Button key={v.key} variant="outlined" color="primary" onClick={() => setOpenVariant(v.key)}>
            {v.label}
          </Button>
        ))}
      </div>

      {variants.map(v => (
        <Toast
          key={v.key}
          open={openVariant === v.key}
          message={`Toto je ${v.label.toLowerCase()} toast notifikace`}
          variant={v.key}
          onClose={() => setOpenVariant(null)}
        />
      ))}

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Pozice na obrazovce
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Toast lze umístit do 6 různých pozic pomocí prop anchorOrigin.
      </Typography>
      <div className="flex flex-wrap gap-4">
        {positions.map(p => (
          <Button key={p.key} variant="outlined" color="primary" onClick={() => setOpenPosition(p.key)}>
            {p.label}
          </Button>
        ))}
      </div>

      {currentPosition && (
        <Toast
          open={!!openPosition}
          message={`Toast v pozici ${currentPosition.label}`}
          variant="primary"
          anchorOrigin={{ vertical: currentPosition.vertical, horizontal: currentPosition.horizontal }}
          onClose={() => setOpenPosition(null)}
        />
      )}

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Auto-hide
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Toast může automaticky zmizet po uplynutí nastaveného času (v milisekundách). Výchozí hodnota je null (bez
        auto-hide).
      </Typography>
      <div className="flex flex-wrap gap-4">
        <Button variant="outlined" color="primary" onClick={() => setOpenAutoHide(true)}>
          Auto-hide po 3 sekundách
        </Button>
      </div>

      <Toast
        open={openAutoHide}
        message="Tento toast zmizí za 3 sekundy"
        variant="success"
        autoHideDuration={3000}
        onClose={() => setOpenAutoHide(false)}
      />

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Vlastní ikona
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Každá varianta má výchozí ikonu, ale lze ji přepsat pomocí prop icon. Nastavením icon na null se ikona skryje.
      </Typography>
      <div className="flex flex-wrap gap-4">
        <Button variant="outlined" color="primary" onClick={() => setOpenCustomIcon(true)}>
          Vlastní ikona
        </Button>
        <Button variant="outlined" color="primary" onClick={() => setOpenNoIcon(true)}>
          Bez ikony
        </Button>
      </div>

      <Toast
        open={openCustomIcon}
        message="Toast s vlastní ikonou zvonečku"
        variant="primary"
        icon={Bell01}
        onClose={() => setOpenCustomIcon(false)}
      />

      <Toast
        open={openNoIcon}
        message="Toast bez ikony"
        variant="general"
        icon={null}
        onClose={() => setOpenNoIcon(false)}
      />

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Vlastní akce
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Do toastu lze přidat vlastní akční tlačítka pomocí prop action. Může být ReactNode nebo render funkce s
        přístupem k onClose.
      </Typography>
      <div className="flex flex-wrap gap-4">
        <Button variant="outlined" color="primary" onClick={() => setOpenCustomAction(true)}>
          Toast s akcí
        </Button>
      </div>

      <Toast
        open={openCustomAction}
        message="Operace byla dokončena"
        variant="success"
        action={({ onClose }) => (
          <Button size="small" variant="text" color="primaryLight" onClick={onClose}>
            Zpět
          </Button>
        )}
        onClose={() => setOpenCustomAction(false)}
      />

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Skrytí zavíracího tlačítka
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Pomocí prop hideCloseButton lze skrýt výchozí zavírací křížek. V kombinaci s autoHideDuration se toast zavře
        automaticky.
      </Typography>
      <div className="flex flex-wrap gap-4">
        <Button variant="outlined" color="primary" onClick={() => setOpenNoClose(true)}>
          Bez zavíracího tlačítka
        </Button>
      </div>

      <Toast
        open={openNoClose}
        message="Toast bez zavíracího tlačítka (zmizí za 3s)"
        variant="warning"
        hideCloseButton
        autoHideDuration={3000}
        onClose={() => setOpenNoClose(false)}
      />
    </>
  );
}
