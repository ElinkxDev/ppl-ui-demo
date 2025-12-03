import { Button, Divider, Icon, IconButton, Typography } from "@ppl/ui";
import { ArrowNarrowRight } from "@untitledui/icons/ArrowNarrowRight";
import { Trash01 } from "@untitledui/icons/Trash01";
import { ArrowNarrowLeft } from "@untitledui/icons/ArrowNarrowLeft";

const Buttons = () => {
  return (
    <>
      <Typography variant="h2" color="primary" gutterBottom>
        Buttons
      </Typography>
      <Typography variant="h3" color="carton" gutterBottom>
        Primary Action Buttons
      </Typography>
      <Typography variant="h5" component="h4" gutterBottom>
        Large
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button size="large" className="min-w-[400px]">
            Button
          </Button>

          <Button size="large" className="min-w-[400px]" startIcon={<Icon icon={ArrowNarrowRight} />}>
            Button
          </Button>

          <Button size="large" className="min-w-[400px]" endIcon={<Icon icon={ArrowNarrowRight} />}>
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button size="large" className="min-w-[400px]" interactionState="hover">
            Button
          </Button>

          <Button
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>

          <Button
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button size="large" className="min-w-[400px]" interactionState="press">
            Button
          </Button>

          <Button
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>

          <Button
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button size="large" className="min-w-[400px]" interactionState="focus">
            Button
          </Button>

          <Button
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>

          <Button
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button size="large" className="min-w-[400px]" disabled>
            Button
          </Button>

          <Button size="large" className="min-w-[400px]" startIcon={<Icon icon={ArrowNarrowRight} />} disabled>
            Button
          </Button>

          <Button size="large" className="min-w-[400px]" endIcon={<Icon icon={ArrowNarrowRight} />} disabled>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Medium
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button size="medium" className="min-w-[250px]">
            Button
          </Button>

          <Button size="medium" className="min-w-[250px]" startIcon={<Icon icon={ArrowNarrowRight} />}>
            Button
          </Button>

          <Button size="medium" className="min-w-[250px]" endIcon={<Icon icon={ArrowNarrowRight} />}>
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button size="medium" className="min-w-[250px]" interactionState="hover">
            Button
          </Button>

          <Button
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>

          <Button
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button size="medium" className="min-w-[250px]" interactionState="press">
            Button
          </Button>

          <Button
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>

          <Button
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button size="medium" className="min-w-[250px]" interactionState="focus">
            Button
          </Button>

          <Button
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>

          <Button
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button size="medium" className="min-w-[250px]" disabled>
            Button
          </Button>

          <Button size="medium" className="min-w-[250px]" startIcon={<Icon icon={ArrowNarrowRight} />} disabled>
            Button
          </Button>

          <Button size="medium" className="min-w-[250px]" endIcon={<Icon icon={ArrowNarrowRight} />} disabled>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button size="small">Button</Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button size="small" interactionState="hover">
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button size="small" interactionState="press">
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button size="small" interactionState="focus">
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button size="small" disabled>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Extra Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <IconButton aria-label="Arrow right">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <IconButton aria-label="Arrow right" interactionState="hover">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <IconButton aria-label="Arrow right" interactionState="press">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <IconButton aria-label="Arrow right" interactionState="focus">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <IconButton aria-label="Arrow right" disabled>
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>
      </div>

      <Divider className="my-20" />

      <Typography variant="h3" color="carton" gutterBottom>
        Secondary Action Buttons Blue
      </Typography>
      <Typography variant="h5" component="h4" gutterBottom>
        Large
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="primaryLight" size="large" className="min-w-[400px]">
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
          >
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="primaryLight" size="large" className="min-w-[400px]" interactionState="hover">
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="primaryLight" size="large" className="min-w-[400px]" interactionState="press">
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="primaryLight" size="large" className="min-w-[400px]" interactionState="focus">
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="primaryLight" size="large" className="min-w-[400px]" disabled>
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            disabled
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Medium
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="primaryLight" size="medium" className="min-w-[250px]">
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
          >
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="primaryLight" size="medium" className="min-w-[250px]" interactionState="hover">
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="primaryLight" size="medium" className="min-w-[250px]" interactionState="press">
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="primaryLight" size="medium" className="min-w-[250px]" interactionState="focus">
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="primaryLight" size="medium" className="min-w-[250px]" disabled>
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            disabled
          >
            Button
          </Button>

          <Button
            color="primaryLight"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="primaryLight" size="small">
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="primaryLight" size="small" interactionState="hover">
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="primaryLight" size="small" interactionState="press">
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="primaryLight" size="small" interactionState="focus">
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="primaryLight" size="small" disabled>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Extra Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <IconButton color="primaryLight" aria-label="Arrow right">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <IconButton color="primaryLight" aria-label="Arrow right" interactionState="hover">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <IconButton color="primaryLight" aria-label="Arrow right" interactionState="press">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <IconButton color="primaryLight" aria-label="Arrow right" interactionState="focus">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <IconButton color="primaryLight" aria-label="Arrow right" disabled>
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>
      </div>

      <Divider className="my-20" />

      <Typography variant="h3" color="carton" gutterBottom>
        Secondary Action Buttons White
      </Typography>
      <Typography variant="h5" component="h4" gutterBottom>
        Large
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="large" className="min-w-[400px]">
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
          >
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="large" className="min-w-[400px]" interactionState="hover">
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="large" className="min-w-[400px]" interactionState="press">
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="large" className="min-w-[400px]" interactionState="focus">
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="large" className="min-w-[400px]" disabled>
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            disabled
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="min-w-[400px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Medium
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="medium" className="min-w-[250px]">
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
          >
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="medium" className="min-w-[250px]" interactionState="hover">
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="medium" className="min-w-[250px]" interactionState="press">
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="medium" className="min-w-[250px]" interactionState="focus">
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="medium" className="min-w-[250px]" disabled>
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={ArrowNarrowRight} />}
            disabled
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="min-w-[250px]"
            endIcon={<Icon icon={ArrowNarrowRight} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="small">
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="small" interactionState="hover">
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="small" interactionState="press">
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="small" interactionState="focus">
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button variant="outlined" color="primary" size="small" disabled>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Extra Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <IconButton variant="outlined" color="primary" aria-label="Arrow right">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <IconButton variant="outlined" color="primary" aria-label="Arrow right" interactionState="hover">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <IconButton variant="outlined" color="primary" aria-label="Arrow right" interactionState="press">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <IconButton variant="outlined" color="primary" aria-label="Arrow right" interactionState="focus">
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <IconButton variant="outlined" color="primary" aria-label="Arrow right" disabled>
            <Icon icon={ArrowNarrowRight} />
          </IconButton>
        </div>
      </div>

      <Divider className="my-20" />

      <Typography variant="h3" color="carton" gutterBottom>
        Tertiary Action Buttons
      </Typography>

      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="primary" variant="text" startIcon={<Icon icon={ArrowNarrowLeft} />}>
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button interactionState="hover" color="primary" variant="text" startIcon={<Icon icon={ArrowNarrowLeft} />}>
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button interactionState="press" color="primary" variant="text" startIcon={<Icon icon={ArrowNarrowLeft} />}>
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button interactionState="focus" color="primary" variant="text" startIcon={<Icon icon={ArrowNarrowLeft} />}>
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button disabled color="primary" variant="text" startIcon={<Icon icon={ArrowNarrowLeft} />}>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-20" />

      <Typography variant="h3" color="carton" gutterBottom>
        Primary Destructive Buttons
      </Typography>
      <Typography variant="h5" component="h4" gutterBottom>
        Large
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="destructive" size="large" className="min-w-[400px]">
            Button
          </Button>

          <Button color="destructive" size="large" className="min-w-[400px]" startIcon={<Icon icon={Trash01} />}>
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="destructive" size="large" className="min-w-[400px]" interactionState="hover">
            Button
          </Button>

          <Button
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="destructive" size="large" className="min-w-[400px]" interactionState="press">
            Button
          </Button>

          <Button
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="destructive" size="large" className="min-w-[400px]" interactionState="focus">
            Button
          </Button>

          <Button
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="destructive" size="large" className="min-w-[400px]" disabled>
            Button
          </Button>

          <Button
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Medium
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="destructive" size="medium" className="min-w-[250px]">
            Button
          </Button>

          <Button color="destructive" size="medium" className="min-w-[250px]" startIcon={<Icon icon={Trash01} />}>
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="destructive" size="medium" className="min-w-[250px]" interactionState="hover">
            Button
          </Button>

          <Button
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="destructive" size="medium" className="min-w-[250px]" interactionState="press">
            Button
          </Button>

          <Button
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="destructive" size="medium" className="min-w-[250px]" interactionState="focus">
            Button
          </Button>

          <Button
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="destructive" size="medium" className="min-w-[250px]" disabled>
            Button
          </Button>

          <Button
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="destructive" size="small">
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="destructive" size="small" interactionState="hover">
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="destructive" size="small" interactionState="press">
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="destructive" size="small" interactionState="focus">
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="destructive" size="small" disabled>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Extra Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <IconButton color="destructive" aria-label="Arrow right">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <IconButton color="destructive" aria-label="Arrow right" interactionState="hover">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <IconButton color="destructive" aria-label="Arrow right" interactionState="press">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <IconButton color="destructive" aria-label="Arrow right" interactionState="focus">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <IconButton color="destructive" aria-label="Arrow right" disabled>
            <Icon icon={Trash01} />
          </IconButton>
        </div>
      </div>

      <Divider className="my-20" />

      <Typography variant="h3" color="carton" gutterBottom>
        Secondary Destructive Buttons Grey
      </Typography>
      <Typography variant="h5" component="h4" gutterBottom>
        Large
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="destructiveLight" size="large" className="min-w-[400px]">
            Button
          </Button>

          <Button color="destructiveLight" size="large" className="min-w-[400px]" startIcon={<Icon icon={Trash01} />}>
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="destructiveLight" size="large" className="min-w-[400px]" interactionState="hover">
            Button
          </Button>

          <Button
            color="destructiveLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="destructiveLight" size="large" className="min-w-[400px]" interactionState="press">
            Button
          </Button>

          <Button
            color="destructiveLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="destructiveLight" size="large" className="min-w-[400px]" interactionState="focus">
            Button
          </Button>

          <Button
            color="destructiveLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="destructiveLight" size="large" className="min-w-[400px]" disabled>
            Button
          </Button>

          <Button
            color="destructiveLight"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Medium
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="destructiveLight" size="medium" className="min-w-[250px]">
            Button
          </Button>

          <Button color="destructiveLight" size="medium" className="min-w-[250px]" startIcon={<Icon icon={Trash01} />}>
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="destructiveLight" size="medium" className="min-w-[250px]" interactionState="hover">
            Button
          </Button>

          <Button
            color="destructiveLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="destructiveLight" size="medium" className="min-w-[250px]" interactionState="press">
            Button
          </Button>

          <Button
            color="destructiveLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="destructiveLight" size="medium" className="min-w-[250px]" interactionState="focus">
            Button
          </Button>

          <Button
            color="destructiveLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="destructiveLight" size="medium" className="min-w-[250px]" disabled>
            Button
          </Button>

          <Button
            color="destructiveLight"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button color="destructiveLight" size="small">
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button color="destructiveLight" size="small" interactionState="hover">
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button color="destructiveLight" size="small" interactionState="press">
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button color="destructiveLight" size="small" interactionState="focus">
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button color="destructiveLight" size="small" disabled>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Extra Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <IconButton color="destructiveLight" aria-label="Arrow right">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <IconButton color="destructiveLight" aria-label="Arrow right" interactionState="hover">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <IconButton color="destructiveLight" aria-label="Arrow right" interactionState="press">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <IconButton color="destructiveLight" aria-label="Arrow right" interactionState="focus">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <IconButton color="destructiveLight" aria-label="Arrow right" disabled>
            <Icon icon={Trash01} />
          </IconButton>
        </div>
      </div>

      <Divider className="my-20" />

      <Typography variant="h3" color="carton" gutterBottom>
        Secondary Destructive Buttons White
      </Typography>
      <Typography variant="h5" component="h4" gutterBottom>
        Large
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="large" className="min-w-[400px]">
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
          >
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button
            variant="outlined"
            color="destructive"
            size="large"
            className="min-w-[400px]"
            interactionState="hover"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button
            variant="outlined"
            color="destructive"
            size="large"
            className="min-w-[400px]"
            interactionState="press"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button
            variant="outlined"
            color="destructive"
            size="large"
            className="min-w-[400px]"
            interactionState="focus"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="large" className="min-w-[400px]" disabled>
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="large"
            className="min-w-[400px]"
            startIcon={<Icon icon={Trash01} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Medium
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="medium" className="min-w-[250px]">
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
          >
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button
            variant="outlined"
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            interactionState="hover"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="hover"
          >
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button
            variant="outlined"
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            interactionState="press"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="press"
          >
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button
            variant="outlined"
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            interactionState="focus"
          >
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            interactionState="focus"
          >
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="medium" className="min-w-[250px]" disabled>
            Button
          </Button>

          <Button
            variant="outlined"
            color="destructive"
            size="medium"
            className="min-w-[250px]"
            startIcon={<Icon icon={Trash01} />}
            disabled
          >
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="small">
            Button
          </Button>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="small" interactionState="hover">
            Button
          </Button>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="small" interactionState="press">
            Button
          </Button>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="small" interactionState="focus">
            Button
          </Button>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <Button variant="outlined" color="destructive" size="small" disabled>
            Button
          </Button>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h5" component="h4" gutterBottom>
        Extra Small
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Normal */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>

          <IconButton variant="outlined" color="destructive" aria-label="Arrow right">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Hover */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>

          <IconButton variant="outlined" color="destructive" aria-label="Arrow right" interactionState="hover">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Pressed */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Pressed
            </Typography>
          </div>

          <IconButton variant="outlined" color="destructive" aria-label="Arrow right" interactionState="press">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>

          <IconButton variant="outlined" color="destructive" aria-label="Arrow right" interactionState="focus">
            <Icon icon={Trash01} />
          </IconButton>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>

          <IconButton variant="outlined" color="destructive" aria-label="Arrow right" disabled>
            <Icon icon={Trash01} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Buttons;
