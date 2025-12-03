import { Button, Divider, Grid, Tooltip, Typography } from "@ppl/ui";

const Tooltips = () => {
  return (
    <Grid container>
      {/* Výchozí vzhled */}
      <Grid size={12}>
        <div className="bg-headline-5 mb-10 flex flex-col items-center justify-center p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <Tooltip title="Toto je tooltip">
            <Button>Najeď myší</Button>
          </Tooltip>
        </div>
      </Grid>

      {/* SECTION: Basic Tooltip */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Basic Tooltip
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Základní tooltip se zobrazí při najetí myší na element.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Tooltip title="Základní tooltip">
            <Button variant="outlined">Hover me</Button>
          </Tooltip>
          <Tooltip title="Tooltip s delším textem, který popisuje funkci tlačítka">
            <Button variant="outlined">Delší popis</Button>
          </Tooltip>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Disabled Listeners */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Disabled Listeners
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Můžete zakázat jednotlivé způsoby aktivace tooltipu.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Tooltip title="Pouze hover" disableFocusListener disableTouchListener>
            <Button variant="outlined">Pouze hover</Button>
          </Tooltip>
          <Tooltip title="Pouze focus" disableHoverListener disableTouchListener>
            <Button variant="outlined">Pouze focus (Tab)</Button>
          </Tooltip>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Interactive Tooltip */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Interactive Tooltip
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Ve výchozím stavu je tooltip interaktivní - zůstane otevřený při najetí myší na něj. Toto chování lze vypnout
          pomocí <code>disableInteractive</code>.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Tooltip title="Interaktivní tooltip - zůstane otevřený">
            <Button variant="outlined">Interaktivní</Button>
          </Tooltip>
          <Tooltip title="Neinteraktivní - zavře se hned" disableInteractive>
            <Button variant="outlined">Neinteraktivní</Button>
          </Tooltip>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Accessibility */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Accessibility
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Tooltip standardně používá <code>aria-labelledby</code>. Pro popisný text použijte <code>describeChild</code>{" "}
          pro přepnutí na <code>aria-describedby</code>.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Tooltip title="Přihlásit se">
            <Button>Přihlásit</Button>
          </Tooltip>
          <Tooltip title="Kliknutím odešlete formulář" describeChild>
            <Button>Odeslat</Button>
          </Tooltip>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Rich Content */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Rich Content
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Tooltip může obsahovat i komplexnější obsah pomocí ReactNode.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Tooltip
            title={
              <div>
                <strong>Důležité upozornění</strong>
                <p className="mt-1 text-sm">Tato akce je nevratná.</p>
              </div>
            }
          >
            <Button color="destructive">Smazat</Button>
          </Tooltip>
        </div>
      </Grid>
    </Grid>
  );
};

export default Tooltips;
