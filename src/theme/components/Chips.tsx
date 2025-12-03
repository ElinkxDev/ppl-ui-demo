import { Home01, X, UserCircle, Check, Umbrella03 } from "@untitledui/icons";

import { Badge, Chip, Divider, Grid, Typography } from "@ppl/ui";
import { BoxIcon } from "@ppl/ui/icons";

const Chips = () => {
  type ChipColor = "primary" | "success" | "error" | "warning" | "carton" | "text";
  const colors: { key: ChipColor; label: string }[] = [
    { key: "primary", label: "Primary" },
    { key: "success", label: "Success" },
    { key: "error", label: "Error" },
    { key: "warning", label: "Warning" },
    { key: "carton", label: "Carton" },
    { key: "text", label: "Text" },
  ];

  return (
    <Grid container>
      {/* Výchozí vzhled */}
      <Grid size={12}>
        <div className="bg-headline-5 mb-10 flex flex-col items-center justify-center p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <Chip label="Chip" />
        </div>
      </Grid>

      {/* SECTION: Variant and color combinations */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Variant and color combinations
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1}></Grid>
          {colors.map(c => (
            <Grid size={1} key={c.key}>
              <Typography component="strong" className="block text-center font-bold">
                {c.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Filled
            </Typography>
          </Grid>
          {colors.map(c => (
            <Grid size={1} key={c.key}>
              <Chip label={c.label} color={c.key} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Outlined
            </Typography>
          </Grid>
          {colors.map(c => (
            <Grid size={1} key={c.key}>
              <Chip label={c.label} color={c.key} variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Sizes */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Sizes
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1}></Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Medium
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Small
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Filled
            </Typography>
          </Grid>
          <Grid size={1}>
            <Chip label="Medium" size="medium" />
          </Grid>
          <Grid size={1}>
            <Chip label="Small" size="small" />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Typography component="strong" className="font-bold">
              Outlined
            </Typography>
          </Grid>
          <Grid size={1}>
            <Chip label="Medium" size="medium" variant="outlined" />
          </Grid>
          <Grid size={1}>
            <Chip label="Small" size="small" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Clickable */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Clickable Chip
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Chip s onClick handlerem má hover a focus stavy.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-2">
          <Chip label="Clickable" onClick={() => alert("Clicked!")} />
          <Chip label="Clickable" variant="outlined" onClick={() => alert("Clicked!")} />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Deletable */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Deletable Chip
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Chip s onDelete handlerem zobrazuje delete ikonu.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-2">
          <Chip label="Deletable" onDelete={() => alert("Deleted!")} />
          <Chip label="Deletable" variant="outlined" onDelete={() => alert("Deleted!")} />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Clickable and Deletable */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Clickable & Deletable
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Chip může být současně clickable i deletable.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-2">
          <Chip label="Clickable Deletable" onClick={() => alert("Clicked!")} onDelete={() => alert("Deleted!")} />
          <Chip
            label="Clickable Deletable"
            variant="outlined"
            onClick={() => alert("Clicked!")}
            onDelete={() => alert("Deleted!")}
          />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: With Icon */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Chip with Icon
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Chip může obsahovat ikonu na začátku.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-2">
          <Chip label="With Icon" icon={Home01} />
          <Chip label="With Icon" icon={Home01} variant="outlined" />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Avatar Chip */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Avatar Chip
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Chip může obsahovat avatar místo ikony.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-2">
          <Chip
            avatar={
              <div className="bg-primary flex h-full w-full items-center justify-center text-xs font-medium text-white">
                M
              </div>
            }
            label="Avatar"
          />
          <Chip
            avatar={
              <img
                src="https://mui.com/static/images/avatar/1.jpg"
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            }
            label="Avatar"
            variant="outlined"
          />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Badges - Capacity */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Chips - Capacity
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Chip s čtvercovým avatarem pro zobrazení kapacity (S, M, L, XL).
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-4">
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-success-140 text-md flex h-full w-full items-center justify-center font-bold text-white">
                S
              </div>
            }
            label="Volné"
            color="success"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-success-140 text-md flex h-full w-full items-center justify-center font-bold text-white">
                M
              </div>
            }
            label="Volné"
            color="success"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-success-140 text-md flex h-full w-full items-center justify-center font-bold text-white">
                L
              </div>
            }
            label="Volné"
            color="success"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-success-140 text-md flex h-full w-full items-center justify-center font-bold text-white">
                XL
              </div>
            }
            label="Volné"
            color="success"
            size="small"
          />
        </div>
      </Grid>

      <Grid size={12} className="mt-4">
        <div className="flex flex-wrap gap-4">
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-error-130 text-md text-md flex h-full w-full items-center justify-center font-bold text-white">
                S
              </div>
            }
            label="Plné"
            color="error"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-error-130 text-md flex h-full w-full items-center justify-center font-bold text-white">
                M
              </div>
            }
            label="Plné"
            color="error"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-error-130 text-md flex h-full w-full items-center justify-center font-bold text-white">
                L
              </div>
            }
            label="Plné"
            color="error"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-error-130 text-md flex h-full w-full items-center justify-center font-bold text-white">
                XL
              </div>
            }
            label="Plné"
            color="error"
            size="small"
          />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Custom Delete Icon */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Custom Delete Icon
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Delete ikonu lze přizpůsobit pomocí deleteIcon prop.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-2">
          <Chip label="Custom Delete" onDelete={() => alert("Deleted!")} deleteIcon={UserCircle} />
          <Chip label="Custom Delete" variant="outlined" onDelete={() => alert("Deleted!")} deleteIcon={X} />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Clickable Link */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Clickable Link
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Chip může fungovat jako link s použitím component prop.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-2">
          <Chip label="Clickable Link" component="a" href="#chips" clickable />
          <Chip label="Clickable Link" component="a" href="#chips" variant="outlined" clickable />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Disabled */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Disabled Chip
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="body" gutterBottom className="mb-6">
          Disabled stav vypíná všechny interakce.
        </Typography>
      </Grid>

      <Grid size={12}>
        <div className="flex flex-wrap gap-2">
          <Chip label="Disabled" disabled />
          <Chip label="Disabled" variant="outlined" disabled />
          <Chip label="Disabled" disabled onClick={() => alert("Clicked!")} />
          <Chip label="Disabled" variant="outlined" disabled onDelete={() => alert("Deleted!")} />
        </div>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Disabled */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Komponent combinations
        </Typography>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }}>
              <Chip label="Chip" icon={BoxIcon} variant="outlined" onClick={() => alert("Clicked!")} />
            </Badge>
          </Grid>
          <Grid size={1}>
            <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }} color="success">
              <Chip label="Chip" color="success" icon={BoxIcon} variant="outlined" onClick={() => alert("Clicked!")} />
            </Badge>
          </Grid>
          <Grid size={1}>
            <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }} color="error">
              <Chip label="Chip" color="error" icon={BoxIcon} variant="outlined" onClick={() => alert("Clicked!")} />
            </Badge>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }}>
              <Chip label="Chip" icon={BoxIcon} deleteIcon={Check} />
            </Badge>
          </Grid>
          <Grid size={1}>
            <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }} color="success">
              <Chip label="Chip" color="success" icon={BoxIcon} deleteIcon={Check} />
            </Badge>
          </Grid>
          <Grid size={1}>
            <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }} color="error">
              <Chip label="Chip" color="error" icon={BoxIcon} deleteIcon={Check} />
            </Badge>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12} className="mt-4">
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Chip label="Platba kartou" size="small" color="success" deleteIcon={Check} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="success" icon={Umbrella03} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="success" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12} className="mt-4">
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Chip label="Platba kartou" size="small" color="warning" deleteIcon={Check} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="warning" icon={Umbrella03} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="warning" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12} className="mt-4">
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Chip label="Platba kartou" size="small" color="error" deleteIcon={Check} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="error" icon={Umbrella03} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="error" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12} className="mt-4">
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Chip label="Platba kartou" size="small" color="primary" deleteIcon={Check} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="primary" icon={Umbrella03} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="primary" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12} className="mt-4">
        <Grid container alignItems="center" justifyContent="center" columns={7}>
          <Grid size={1} className="justify-self-start">
            <Chip label="Platba kartou" size="small" color="text" deleteIcon={Check} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="text" icon={Umbrella03} />
          </Grid>
          <Grid size={1}>
            <Chip label="Platba kartou" size="small" color="text" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chips;
