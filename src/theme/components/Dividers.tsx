import { Divider, Grid, Typography } from "@ppl/ui";

const Dividers = () => {
  return (
    <Grid container>
      <Grid size={12}>
        <div className="mb-10 flex flex-col items-center justify-center bg-[var(--color-headline-5)] p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <div className="w-full max-w-md">
            <Divider />
          </div>
        </div>
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Horizontální orientace - varianty
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container spacing={4}>
          <Grid size={4}>
            <Typography variant="h5" gutterBottom>
              Full Width
            </Typography>
            <Divider />
          </Grid>
          <Grid size={4}>
            <Typography variant="h5" gutterBottom>
              Inset
            </Typography>
            <Divider variant="inset" />
          </Grid>
          <Grid size={4}>
            <Typography variant="h5" gutterBottom>
              Middle
            </Typography>
            <Divider variant="middle" />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-8" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Světlá varianta
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container spacing={4}>
          <Grid size={6}>
            <Typography variant="h5" gutterBottom>
              Normální
            </Typography>
            <Divider />
          </Grid>
          <Grid size={6}>
            <Typography variant="h5" gutterBottom>
              Světlá
            </Typography>
            <Divider light />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-8" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          S obsahem (text, komponenty)
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container spacing={4}>
          <Grid size={12}>
            <Typography variant="h5" gutterBottom>
              Text na středu
            </Typography>
            <Divider>NEBO</Divider>
          </Grid>
          <Grid size={12}>
            <Typography variant="h5" gutterBottom>
              Text vlevo
            </Typography>
            <Divider textAlign="left">Sekce 1</Divider>
          </Grid>
          <Grid size={12}>
            <Typography variant="h5" gutterBottom>
              Text vpravo
            </Typography>
            <Divider textAlign="right">Konec</Divider>
          </Grid>
          <Grid size={12}>
            <Typography variant="h5" gutterBottom>
              S delším textem
            </Typography>
            <Divider>Pokračování na další stránce</Divider>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-8" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Vertikální orientace
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="h5" gutterBottom>
          Ve flex containeru
        </Typography>
        <div className="flex h-32 items-center gap-4">
          <div className="flex-1 bg-[var(--color-primary-5)] p-4 text-center">
            <Typography>Obsah 1</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="flex-1 bg-[var(--color-primary-5)] p-4 text-center">
            <Typography>Obsah 2</Typography>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="flex-1 bg-[var(--color-primary-5)] p-4 text-center">
            <Typography>Obsah 3</Typography>
          </div>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-8" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h5" gutterBottom>
          Vertikální varianty
        </Typography>
        <div className="flex h-40 gap-8">
          <div className="flex items-center gap-4">
            <Typography component="span">Full Width</Typography>
            <Divider orientation="vertical" flexItem />
          </div>
          <div className="flex items-center gap-4">
            <Typography component="span">Inset</Typography>
            <Divider orientation="vertical" variant="inset" flexItem />
          </div>
          <div className="flex items-center gap-4">
            <Typography component="span">Middle</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
          </div>
          <div className="flex items-center gap-4">
            <Typography component="span">Light</Typography>
            <Divider orientation="vertical" light flexItem />
          </div>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-8" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Vertikální s obsahem
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex h-64 items-center gap-4">
          <div className="flex-1 bg-[var(--color-headline-5)] p-4">
            <Typography variant="h5" gutterBottom>
              Levý panel
            </Typography>
            <Typography variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </div>
          <Divider orientation="vertical" flexItem>
            <Typography variant="labelS" component="span" className="rotate-90 whitespace-nowrap">
              Oddělení
            </Typography>
          </Divider>
          <div className="flex-1 bg-[var(--color-headline-5)] p-4">
            <Typography variant="h5" gutterBottom>
              Pravý panel
            </Typography>
            <Typography variant="body">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          </div>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-8" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Praktické použití
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="rounded-lg border border-[var(--color-headline-20)] bg-white p-6">
          <Typography variant="h5" gutterBottom>
            Formulář
          </Typography>
          <Typography variant="body" className="mb-4">
            Základní informace
          </Typography>

          <Divider className="my-4" />

          <Typography variant="body" className="mb-4">
            Kontaktní údaje
          </Typography>

          <Divider className="my-4">
            <Typography variant="labelS" component="span">
              Volitelné
            </Typography>
          </Divider>

          <Typography variant="body" className="mb-4">
            Dodatečné poznámky
          </Typography>
        </div>
      </Grid>

      <Grid size={12}>
        <div className="mt-8 rounded-lg border border-[var(--color-headline-20)] bg-white">
          <div className="p-4">
            <Typography variant="h5">Položka seznamu 1</Typography>
          </div>
          <Divider variant="inset" />
          <div className="p-4">
            <Typography variant="h5">Položka seznamu 2</Typography>
          </div>
          <Divider variant="inset" />
          <div className="p-4">
            <Typography variant="h5">Položka seznamu 3</Typography>
          </div>
        </div>
      </Grid>

      <Grid size={12}>
        <div className="mt-8 flex h-48 rounded-lg border border-[var(--color-headline-20)] bg-white">
          <div className="flex-1 p-6">
            <Typography variant="h5" gutterBottom>
              Panel A
            </Typography>
            <Typography variant="body">Obsah prvního panelu s nějakým textem a informacemi.</Typography>
          </div>
          <Divider orientation="vertical" />
          <div className="flex-1 p-6">
            <Typography variant="h5" gutterBottom>
              Panel B
            </Typography>
            <Typography variant="body">Obsah druhého panelu s dalšími informacemi.</Typography>
          </div>
          <Divider orientation="vertical" />
          <div className="flex-1 p-6">
            <Typography variant="h5" gutterBottom>
              Panel C
            </Typography>
            <Typography variant="body">Obsah třetího panelu s ještě více informací.</Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Dividers;
