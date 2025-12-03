import { ArrowNarrowRight } from "@untitledui/icons/ArrowNarrowRight";

import { Button, Divider, Grid, Icon, IconButton, Typography } from "@ppl/ui";

const Buttons = () => {
  return (
    <Grid container>
      <Grid size={12}>
        <div className="mb-10 flex flex-col items-center justify-center bg-[var(--color-headline-5)] p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <Button>Button</Button>
        </div>
      </Grid>

      {/* SECTION: Variant and color combinations */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Variant and color combinations
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary blue
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary Destructive
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary Destructive
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Contained
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth>Button</Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="primaryLight">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="destructive">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="destructiveLight">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Outlined
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" color="primaryLight">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" color="destructive">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" color="destructiveLight">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Text
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="text">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="text" color="primaryLight">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="text" color="destructive">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="text" color="destructiveLight">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Disabled */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Disabled
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary blue
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary Destructive
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary Destructive
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>Contained</Grid>
          <Grid size={2}>
            <Button fullWidth disabled>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled color="primaryLight">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled color="destructive">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled color="destructiveLight">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>Outlined</Grid>
          <Grid size={2}>
            <Button fullWidth disabled variant="outlined">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled variant="outlined" color="primaryLight">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled variant="outlined" color="destructive">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled variant="outlined" color="destructiveLight">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>Text</Grid>
          <Grid size={2}>
            <Button fullWidth disabled variant="text">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled variant="text" color="primaryLight">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled variant="text" color="destructive">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled variant="text" color="destructiveLight">
              Button
            </Button>
          </Grid>
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
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Large
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Medium
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Small
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Contained
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth size="large">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth>Button</Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth size="small">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Outlined
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" size="large">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" size="small">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Text
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="text" size="large">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="text">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="text" size="small">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Button with icon */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Button with icon
        </Typography>
      </Grid>

      <Grid size={12}>
        <Typography variant="h4" gutterBottom>
          Start icon
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary blue
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary Destructive
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary Destructive
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Contained
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth textAlign="left" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="primaryLight" textAlign="left" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="destructive" textAlign="left" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="destructiveLight" textAlign="left" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Outlined
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" textAlign="left" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              variant="outlined"
              color="primaryLight"
              textAlign="left"
              startIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              variant="outlined"
              color="destructive"
              textAlign="left"
              startIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              variant="outlined"
              color="destructiveLight"
              textAlign="left"
              startIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Disabled
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled textAlign="left" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              disabled
              color="primaryLight"
              textAlign="left"
              startIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              disabled
              color="destructive"
              textAlign="left"
              startIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              disabled
              color="destructiveLight"
              textAlign="left"
              startIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Text
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button variant="text" textAlign="left" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button variant="text" color="primaryLight" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button variant="text" color="destructive" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button variant="text" color="destructiveLight" startIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider light className="my-10" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h4" gutterBottom>
          End icon
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary blue
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary Destructive
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary Destructive
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Contained
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="primaryLight" textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="destructive" textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth color="destructiveLight" textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Outlined
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              variant="outlined"
              color="primaryLight"
              textAlign="left"
              endIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              variant="outlined"
              color="destructive"
              textAlign="left"
              endIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              variant="outlined"
              color="destructiveLight"
              textAlign="left"
              endIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Disabled
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled color="primaryLight" textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth disabled color="destructive" textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              fullWidth
              disabled
              color="destructiveLight"
              textAlign="left"
              endIcon={<Icon icon={ArrowNarrowRight} />}
            >
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Text
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button variant="text" textAlign="left" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button variant="text" color="primaryLight" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button variant="text" color="destructive" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button variant="text" color="destructiveLight" endIcon={<Icon icon={ArrowNarrowRight} />}>
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider light className="my-10" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h4" gutterBottom>
          Loading icon
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Contained
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth isLoading textAlign="left">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth size="medium" isLoading textAlign="left">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth size="small" isLoading textAlign="left">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>
            <Typography component="strong" className="block font-bold">
              Outlined
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" isLoading textAlign="left">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" size="medium" isLoading textAlign="left">
              Button
            </Button>
          </Grid>
          <Grid size={2}>
            <Button fullWidth variant="outlined" size="small" isLoading textAlign="left">
              Button
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Icon button */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Icon button
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary blue
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Primary Destructive
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Secondary Destructive
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="block font-bold">
              Contained
            </Typography>
          </Grid>
          <Grid size={2}>
            <IconButton aria-label="Arrow right">
              <Icon icon={ArrowNarrowRight} />
            </IconButton>
          </Grid>
          <Grid size={2}>
            <IconButton color="primaryLight" aria-label="Arrow right">
              <Icon icon={ArrowNarrowRight} />
            </IconButton>
          </Grid>
          <Grid size={2}>
            <IconButton color="destructive" aria-label="Arrow right">
              <Icon icon={ArrowNarrowRight} />
            </IconButton>
          </Grid>
          <Grid size={2}>
            <IconButton color="destructiveLight" aria-label="Arrow right">
              <Icon icon={ArrowNarrowRight} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2} className="justify-self-start">
            <Typography component="strong" className="block font-bold">
              Outlined
            </Typography>
          </Grid>
          <Grid size={2}>
            <IconButton variant="outlined" aria-label="Arrow right">
              <Icon icon={ArrowNarrowRight} />
            </IconButton>
          </Grid>
          <Grid size={2}>
            <IconButton variant="outlined" color="primaryLight" aria-label="Arrow right">
              <Icon icon={ArrowNarrowRight} />
            </IconButton>
          </Grid>
          <Grid size={2}>
            <IconButton variant="outlined" color="destructive" aria-label="Arrow right">
              <Icon icon={ArrowNarrowRight} />
            </IconButton>
          </Grid>
          <Grid size={2}>
            <IconButton variant="outlined" color="destructiveLight" aria-label="Arrow right">
              <Icon icon={ArrowNarrowRight} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Buttons;
