import { Inbox01 } from "@untitledui/icons";

import { Badge, Divider, Grid, Icon, Typography } from "@ppl/ui";

const Badges = () => {
  type BadgeColor = "primary" | "error" | "success" | "warning" | "carton";
  const colors: { key: BadgeColor; label: string }[] = [
    { key: "primary", label: "Primary" },
    { key: "error", label: "Error" },
    { key: "success", label: "Success" },
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
          <Badge badgeContent={4} color="primary">
            <Icon icon={Inbox01} size="large" />
          </Badge>
        </div>
      </Grid>

      {/* SECTION: Basic Badge */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Basic Badge
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Základní varianty badge s různým obsahem.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Badge badgeContent={4} color="primary">
            <Icon icon={Inbox01} size="large" />
          </Badge>
          <Badge badgeContent={99} color="primary">
            <Icon icon={Inbox01} size="large" />
          </Badge>
          <Badge badgeContent={100} color="primary">
            <Icon icon={Inbox01} size="large" />
          </Badge>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Color Variants */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Variant and color combinations
        </Typography>
      </Grid>

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

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Standard
            </Typography>
          </Grid>
          {colors.map(c => (
            <Grid size={2} key={c.key}>
              <Badge badgeContent={4} color={c.key}>
                <Icon icon={Inbox01} size="large" />
              </Badge>
            </Grid>
          ))}
        </Grid>
      </Grid>

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

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Dot
            </Typography>
          </Grid>
          {colors.map(c => (
            <Grid size={2} key={c.key}>
              <Badge variant="dot" badgeContent={1} color={c.key}>
                <Icon icon={Inbox01} size="large" />
              </Badge>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Maximum Value */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Maximum Value
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Badge zobrazí &quot;max+&quot; když obsah překročí maximální hodnotu (výchozí 99).
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Badge badgeContent={50}>
            <Icon icon={Inbox01} size="large" />
          </Badge>
          <Badge badgeContent={100}>
            <Icon icon={Inbox01} size="large" />
          </Badge>
          <Badge badgeContent={1000}>
            <Icon icon={Inbox01} size="large" />
          </Badge>
          <Badge badgeContent={1000} max={999}>
            <Icon icon={Inbox01} size="large" />
          </Badge>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Badge Visibility */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Badge Visibility
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Badge se automaticky skryje když je badgeContent 0. Použijte showZero pro zobrazení nuly.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Badge badgeContent={0}>
            <Icon icon={Inbox01} size="large" />
          </Badge>
          <Badge badgeContent={0} showZero>
            <Icon icon={Inbox01} size="large" />
          </Badge>
          <Badge badgeContent={5} invisible>
            <Icon icon={Inbox01} size="large" />
          </Badge>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Anchor Origin */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Anchor Origin
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Pozice badge lze upravit pomocí anchorOrigin prop.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Badge badgeContent={4} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
            <div className="flex h-12 w-12 items-center justify-center rounded bg-gray-200">
              <Icon icon={Inbox01} size="medium" />
            </div>
          </Badge>
          <Badge badgeContent={4} anchorOrigin={{ vertical: "top", horizontal: "left" }}>
            <div className="flex h-12 w-12 items-center justify-center rounded bg-gray-200">
              <Icon icon={Inbox01} size="medium" />
            </div>
          </Badge>
          <Badge badgeContent={4} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <div className="flex h-12 w-12 items-center justify-center rounded bg-gray-200">
              <Icon icon={Inbox01} size="medium" />
            </div>
          </Badge>
          <Badge badgeContent={4} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
            <div className="flex h-12 w-12 items-center justify-center rounded bg-gray-200">
              <Icon icon={Inbox01} size="medium" />
            </div>
          </Badge>
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Overlap */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Overlap
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Použijte overlap prop pro nastavení překrytí badge nad obdélníkovým nebo kruhovým elementem.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap items-center gap-8">
          <Badge badgeContent={4} overlap="rectangular">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-gray-200">
              <Icon icon={Inbox01} size="medium" />
            </div>
          </Badge>
          <Badge badgeContent={4} overlap="circular">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <Icon icon={Inbox01} size="medium" />
            </div>
          </Badge>
          <Badge variant="dot" badgeContent={1} overlap="rectangular">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-gray-200">
              <Icon icon={Inbox01} size="medium" />
            </div>
          </Badge>
          <Badge variant="dot" badgeContent={1} overlap="circular">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <Icon icon={Inbox01} size="medium" />
            </div>
          </Badge>
        </div>
      </Grid>
    </Grid>
  );
};

export default Badges;
