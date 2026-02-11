import { useState } from "react";
import { Alert, Button, Divider, Typography } from "@ppl/ui";
import type { AlertVariant } from "@ppl/ui";
import { Bell01 } from "@untitledui/icons/Bell01";

export default function Alerts() {
  const [closedAlerts, setClosedAlerts] = useState<string[]>([]);

  const variants: { key: AlertVariant; label: string; description: string }[] = [
    { key: "success", label: "Success", description: "Operace byla úspěšně dokončena." },
    { key: "warning", label: "Warning", description: "Pozor, tato akce může mít nežádoucí důsledky." },
    { key: "error", label: "Error", description: "Při zpracování požadavku došlo k chybě." },
    { key: "info", label: "Info", description: "Toto je informativní zpráva pro uživatele." },
    { key: "general", label: "General", description: "Obecná zpráva bez specifického typu." },
  ];

  const handleClose = (id: string) => {
    setClosedAlerts(prev => [...prev, id]);
  };

  const resetAlerts = () => {
    setClosedAlerts([]);
  };

  return (
    <>
      <Typography variant="h2" color="primary" gutterBottom>
        Alert
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-8">
        Alert komponenta slouží k zobrazení důležitých zpráv uživateli. Na rozdíl od Toast je Alert vždy viditelný v
        rámci obsahu stránky. Podporuje různé barevné varianty, vlastní ikony a akční tlačítka.
      </Typography>

      <Typography variant="h3" color="carton" gutterBottom>
        Varianty
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Alert podporuje 5 barevných variant: success, warning, error, info a general (výchozí). Každá varianta má
        automaticky přiřazenou ikonu a barevné schéma.
      </Typography>
      <div className="flex flex-col gap-4">
        {variants.map(v => (
          <Alert key={v.key} variant={v.key} hideCloseButton>
            <strong>{v.label}:</strong> {v.description}
          </Alert>
        ))}
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Vlastní ikona
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Každá varianta má výchozí ikonu, ale lze ji přepsat pomocí prop icon. Nastavením icon na null se ikona skryje.
      </Typography>
      <div className="flex flex-col gap-4">
        <Alert variant="info" icon={Bell01} hideCloseButton>
          Alert s vlastní ikonou zvonečku místo výchozí info ikony.
        </Alert>
        <Alert variant="general" icon={null} hideCloseButton>
          Alert bez ikony - pouze text zprávy.
        </Alert>
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Akční tlačítka
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Do alertu lze přidat vlastní akční tlačítka pomocí prop action.
      </Typography>
      <div className="flex flex-col gap-4">
        <Alert
          variant="warning"
          hideCloseButton
          action={
            <Button size="small" variant="outlined" color="primary">
              Více info
            </Button>
          }
        >
          Vaše session brzy vyprší. Uložte si prosím práci.
        </Alert>
        <Alert
          variant="error"
          hideCloseButton
          action={
            <Button size="small" variant="contained" color="destructive">
              Zkusit znovu
            </Button>
          }
        >
          Nepodařilo se načíst data ze serveru.
        </Alert>
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Bez zavíracího tlačítka
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Výchozí chování zobrazuje zavírací tlačítko (křížek). Pomocí prop hideCloseButton lze toto tlačítko skrýt pro
        zprávy, které nelze zavřít.
      </Typography>
      <div className="flex flex-col gap-4">
        <Alert variant="info">Alert se zavíracím tlačítkem (výchozí stav).</Alert>
        <Alert variant="info" hideCloseButton>
          Alert bez zavíracího tlačítka - nelze zavřít.
        </Alert>
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Interaktivní zavírání
      </Typography>
      <Typography variant="body" className="text-text-secondary mb-4">
        Pomocí prop onClose lze reagovat na zavření alertu. Klikněte na křížek pro zavření alertu.
      </Typography>
      <div className="mb-4">
        <Button variant="outlined" color="primary" onClick={resetAlerts}>
          Obnovit všechny alerty
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {variants.map(v => {
          const alertId = `interactive-${v.key}`;
          if (closedAlerts.includes(alertId)) {
            return null;
          }
          return (
            <Alert key={alertId} variant={v.key} onClose={() => handleClose(alertId)}>
              <strong>{v.label}:</strong> Klikněte na křížek pro zavření tohoto alertu.
            </Alert>
          );
        })}
        {closedAlerts.length === variants.length && (
          <Typography variant="body" className="text-text-secondary italic">
            Všechny alerty byly zavřeny. Klikněte na tlačítko výše pro jejich obnovení.
          </Typography>
        )}
      </div>
    </>
  );
}
