import { Grid, Typography, cn } from "@ppl/ui";

interface PaletteBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Název CSS variable.
   */
  variable?: string;
}

const PaletteBox = ({ variable, ...props }: PaletteBoxProps) => {
  const baseClasses = ["flex", "w-full", "h-12", "items-center", "justify-center", "rounded-sm", "shadow-md"];
  return (
    <div className="flex flex-col gap-1">
      <div {...props} className={cn(...baseClasses, props.className)}>
        <Typography variant="body" component="span" color="white" className="text-center">
          Example text
        </Typography>
      </div>
      {variable && (
        <Typography variant="body" component="span" className="text-text-70 text-center text-xs">
          {variable}
        </Typography>
      )}
    </div>
  );
};

const Palette = () => {
  return (
    <Grid container>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid></Grid>
          <Grid className="pb-6">
            <Typography component="strong" className="block text-center font-bold">
              Primary
            </Typography>
          </Grid>
          <Grid className="pb-6">
            <Typography component="strong" className="block text-center font-bold">
              Headline
            </Typography>
          </Grid>
          <Grid className="pb-6">
            <Typography component="strong" className="block text-center font-bold">
              Text
            </Typography>
          </Grid>
          <Grid className="pb-6">
            <Typography component="strong" className="block text-center font-bold">
              Success
            </Typography>
          </Grid>
          <Grid className="pb-6">
            <Typography component="strong" className="block text-center font-bold">
              Error
            </Typography>
          </Grid>
          <Grid className="pb-6">
            <Typography component="strong" className="block text-center font-bold">
              Warning
            </Typography>
          </Grid>
          <Grid className="pb-6">
            <Typography component="strong" className="block text-center font-bold">
              Carton
            </Typography>
          </Grid>
          <Grid className="pb-6">
            <Typography component="strong" className="block text-center font-bold">
              PostYellow
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              140
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-140" variable="--color-primary-140" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-140" variable="--color-headline-140" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-140" variable="--color-text-140" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-140" variable="--color-success-140" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-140" variable="--color-error-140" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-140" variable="--color-warning-140" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-140" variable="--color-carton-140" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-140" variable="--color-post-yellow-140" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              130
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-130" variable="--color-primary-130" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-130" variable="--color-headline-130" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-130" variable="--color-text-130" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-130" variable="--color-success-130" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-130" variable="--color-error-130" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-130" variable="--color-warning-130" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-130" variable="--color-carton-130" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-130" variable="--color-post-yellow-130" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              120
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-120" variable="--color-primary-120" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-120" variable="--color-headline-120" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-120" variable="--color-text-120" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-120" variable="--color-success-120" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-120" variable="--color-error-120" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-120" variable="--color-warning-120" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-120" variable="--color-carton-120" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-120" variable="--color-post-yellow-120" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              110
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-110" variable="--color-primary-110" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-110" variable="--color-headline-110" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-110" variable="--color-text-110" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-110" variable="--color-success-110" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-110" variable="--color-error-110" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-110" variable="--color-warning-110" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-110" variable="--color-carton-110" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-110" variable="--color-post-yellow-110" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              100 (main)
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-100" variable="--color-primary-100" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-100" variable="--color-headline-100" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-100" variable="--color-text-100" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-100" variable="--color-success-100" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-100" variable="--color-error-100" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-100" variable="--color-warning-100" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-100" variable="--color-carton-100" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-100" variable="--color-post-yellow-100" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              90
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-90" variable="--color-primary-90" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-90" variable="--color-headline-90" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-90" variable="--color-text-90" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-90" variable="--color-success-90" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-90" variable="--color-error-90" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-90" variable="--color-warning-90" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-90" variable="--color-carton-90" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-90" variable="--color-post-yellow-90" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              80
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-80" variable="--color-primary-80" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-80" variable="--color-headline-80" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-80" variable="--color-text-80" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-80" variable="--color-success-80" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-80" variable="--color-error-80" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-80" variable="--color-warning-80" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-80" variable="--color-carton-80" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-80" variable="--color-post-yellow-80" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              70
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-70" variable="--color-primary-70" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-70" variable="--color-headline-70" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-70" variable="--color-text-70" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-70" variable="--color-success-70" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-70" variable="--color-error-70" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-70" variable="--color-warning-70" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-70" variable="--color-carton-70" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-70" variable="--color-post-yellow-70" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              60
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-60" variable="--color-primary-60" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-60" variable="--color-headline-60" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-60" variable="--color-text-60" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-60" variable="--color-success-60" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-60" variable="--color-error-60" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-60" variable="--color-warning-60" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-60" variable="--color-carton-60" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-60" variable="--color-post-yellow-60" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              50
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-50" variable="--color-primary-50" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-50" variable="--color-headline-50" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-50" variable="--color-text-50" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-50" variable="--color-success-50" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-50" variable="--color-error-50" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-50" variable="--color-warning-50" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-50" variable="--color-carton-50" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-50" variable="--color-post-yellow-50" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              40
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-40" variable="--color-primary-40" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-40" variable="--color-headline-40" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-40" variable="--color-text-40" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-40" variable="--color-success-40" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-40" variable="--color-error-40" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-40" variable="--color-warning-40" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-40" variable="--color-carton-40" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-40" variable="--color-post-yellow-40" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              30
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-30" variable="--color-primary-30" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-30" variable="--color-headline-30" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-30" variable="--color-text-30" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-30" variable="--color-success-30" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-30" variable="--color-error-30" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-30" variable="--color-warning-30" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-30" variable="--color-carton-30" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-30" variable="--color-post-yellow-30" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              20
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-20" variable="--color-primary-20" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-20" variable="--color-headline-20" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-20" variable="--color-text-20" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-20" variable="--color-success-20" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-20" variable="--color-error-20" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-20" variable="--color-warning-20" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-20" variable="--color-carton-20" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-20" variable="--color-post-yellow-20" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              10
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-10" variable="--color-primary-10" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-10" variable="--color-headline-10" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-10" variable="--color-text-10" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-10" variable="--color-success-10" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-10" variable="--color-error-10" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-10" variable="--color-warning-10" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-10" variable="--color-carton-10" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-10" variable="--color-post-yellow-10" />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container columns={9} alignItems="center">
          <Grid>
            <Typography component="strong" className="font-bold">
              5
            </Typography>
          </Grid>
          <Grid>
            <PaletteBox className="bg-primary-5" variable="--color-primary-5" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-headline-5" variable="--color-headline-5" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-text-5" variable="--color-text-5" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-success-5" variable="--color-success-5" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-error-5" variable="--color-error-5" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-warning-5" variable="--color-warning-5" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-carton-5" variable="--color-carton-5" />
          </Grid>
          <Grid>
            <PaletteBox className="bg-post-yellow-5" variable="--color-post-yellow-5" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Palette;
