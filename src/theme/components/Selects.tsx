import { SearchSm } from "@untitledui/icons";

import { Divider, Grid, Icon, Select, Typography, type SelectOption } from "@ppl/ui";

const basicOptions: SelectOption[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  { value: "option6", label: "Option 6" },
  { value: "option7", label: "Option 7" },
  { value: "option8", label: "Option 8" },
  { value: "option9", label: "Option 9" },
  { value: "option10", label: "Option 10" },
];

const countryOptions: SelectOption[] = [
  { value: "cz", label: "Czech Republic" },
  { value: "sk", label: "Slovakia" },
  { value: "de", label: "Germany" },
  { value: "pl", label: "Poland" },
  { value: "at", label: "Austria" },
];

const groupedOptions = [
  {
    label: "Europe",
    options: [
      { value: "cz", label: "Czech Republic" },
      { value: "sk", label: "Slovakia" },
      { value: "de", label: "Germany" },
    ],
  },
  {
    label: "America",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
    ],
  },
];

const Selects = () => {
  return (
    <Grid container>
      {/* Výchozí vzhled */}
      <Grid size={12}>
        <div className="mb-10 flex flex-col items-center justify-center bg-[var(--color-headline-5)] p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <Select
            label="Title"
            placeholder="Select option..."
            options={basicOptions}
            fullWidth={false}
          />
        </div>
      </Grid>

      {/* SECTION: Color Combinations */}
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
              Success
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Error
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Warning
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Carton
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>Outlined</Grid>
          <Grid size={2}>
            <Select label="Title" placeholder="Placeholder..." options={basicOptions} />
          </Grid>
          <Grid size={2}>
            <Select
              color="success"
              label="Title"
              placeholder="Placeholder..."
              options={basicOptions}
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="error"
              label="Title"
              placeholder="Placeholder..."
              options={basicOptions}
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="warning"
              label="Title"
              placeholder="Placeholder..."
              options={basicOptions}
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="carton"
              label="Title"
              placeholder="Placeholder..."
              options={basicOptions}
            />
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
              Success
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Error
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Warning
            </Typography>
          </Grid>
          <Grid size={2}>
            <Typography component="strong" className="block text-center font-bold">
              Carton
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>Outlined</Grid>
          <Grid size={2}>
            <Select label="Title" placeholder="Placeholder..." options={basicOptions} disabled />
          </Grid>
          <Grid size={2}>
            <Select
              color="success"
              label="Title"
              placeholder="Placeholder..."
              options={basicOptions}
              disabled
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="error"
              label="Title"
              placeholder="Placeholder..."
              options={basicOptions}
              disabled
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="warning"
              label="Title"
              placeholder="Placeholder..."
              options={basicOptions}
              disabled
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="carton"
              label="Title"
              placeholder="Placeholder..."
              options={basicOptions}
              disabled
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>Outlined with value</Grid>
          <Grid size={2}>
            <Select label="Title" options={basicOptions} defaultValue="option1" disabled />
          </Grid>
          <Grid size={2}>
            <Select
              color="success"
              label="Title"
              options={basicOptions}
              defaultValue="option1"
              disabled
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="error"
              label="Title"
              options={basicOptions}
              defaultValue="option1"
              disabled
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="warning"
              label="Title"
              options={basicOptions}
              defaultValue="option1"
              disabled
            />
          </Grid>
          <Grid size={2}>
            <Select
              color="carton"
              label="Title"
              options={basicOptions}
              defaultValue="option1"
              disabled
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Basic States */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Basic States
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Default
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Hover
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Focus
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Disabled
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={3}>
            <Select label="Title" placeholder="Select..." options={basicOptions} />
          </Grid>
          <Grid size={3}>
            <Select
              label="Title"
              placeholder="Select..."
              options={basicOptions}
              interactionState="hover"
            />
          </Grid>
          <Grid size={3}>
            <Select
              label="Title"
              placeholder="Select..."
              options={basicOptions}
              interactionState="focus"
            />
          </Grid>
          <Grid size={3}>
            <Select label="Title" placeholder="Select..." options={basicOptions} disabled />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: With Value */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          With Selected Value
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Default
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Hover
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Focus
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Disabled
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={3}>
            <Select label="Title" options={basicOptions} defaultValue="option1" />
          </Grid>
          <Grid size={3}>
            <Select
              label="Title"
              options={basicOptions}
              defaultValue="option1"
              interactionState="hover"
            />
          </Grid>
          <Grid size={3}>
            <Select
              label="Title"
              options={basicOptions}
              defaultValue="option1"
              interactionState="focus"
            />
          </Grid>
          <Grid size={3}>
            <Select label="Title" options={basicOptions} defaultValue="option1" disabled />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Error State */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Error State
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={4}>
            <Typography component="strong" className="block text-center font-bold">
              Error without value
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography component="strong" className="block text-center font-bold">
              Error with value
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography component="strong" className="block text-center font-bold">
              Error with helper text
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={4}>
            <Select label="Title" placeholder="Select..." options={basicOptions} error />
          </Grid>
          <Grid size={4}>
            <Select label="Title" options={basicOptions} defaultValue="option1" error />
          </Grid>
          <Grid size={4}>
            <Select
              label="Title"
              placeholder="Select..."
              options={basicOptions}
              error
              helperText="Please select an option"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: With Start Icon */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          With Start Icon
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Default
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              With value
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Error
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Disabled
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={3}>
            <Select
              label="Title"
              placeholder="Select..."
              options={basicOptions}
              startIcon={<Icon icon={SearchSm} />}
            />
          </Grid>
          <Grid size={3}>
            <Select
              label="Title"
              options={basicOptions}
              defaultValue="option1"
              startIcon={<Icon icon={SearchSm} />}
            />
          </Grid>
          <Grid size={3}>
            <Select
              label="Title"
              placeholder="Select..."
              options={basicOptions}
              startIcon={<Icon icon={SearchSm} />}
              error
            />
          </Grid>
          <Grid size={3}>
            <Select
              label="Title"
              placeholder="Select..."
              options={basicOptions}
              startIcon={<Icon icon={SearchSm} />}
              disabled
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Required Field */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Required Field
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Select
              required
              label="Country"
              placeholder="Select country..."
              options={countryOptions}
              helperText="This field is required"
            />
          </Grid>
          <Grid size={6}>
            <Select
              required
              label="Country"
              options={countryOptions}
              defaultValue="cz"
              helperText="This field is required"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: With Helper Text */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          With Helper Text
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Select
              label="Delivery Country"
              placeholder="Select country..."
              options={countryOptions}
              helperText="Select your delivery destination"
            />
          </Grid>
          <Grid size={6}>
            <Select
              label="Billing Country"
              placeholder="Select country..."
              options={countryOptions}
              error
              helperText="Country selection is required for billing"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Grouped Options */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Grouped Options
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Select
              label="Select Region"
              placeholder="Choose a country..."
              groupedOptions={groupedOptions}
              helperText="Countries are grouped by continent"
            />
          </Grid>
          <Grid size={6}>
            <Select
              label="Select Region"
              groupedOptions={groupedOptions}
              defaultValue="cz"
              helperText="Countries are grouped by continent"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Disabled Options */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          With Disabled Options
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Select
              label="Delivery Method"
              placeholder="Select method..."
              options={[
                { value: "standard", label: "Standard Delivery" },
                { value: "express", label: "Express Delivery" },
                { value: "same-day", label: "Same Day Delivery", disabled: true },
                { value: "overnight", label: "Overnight Delivery", disabled: true },
              ]}
              helperText="Some options are currently unavailable"
            />
          </Grid>
          <Grid size={6}>
            <Select
              label="Payment Method"
              placeholder="Select payment..."
              options={[
                { value: "card", label: "Credit Card" },
                { value: "bank", label: "Bank Transfer" },
                { value: "cash", label: "Cash on Delivery", disabled: true },
                { value: "crypto", label: "Cryptocurrency", disabled: true },
              ]}
              helperText="Some payment methods are not available"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Full Width vs Auto */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Width Options
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={12}>
            <Typography component="strong" className="mb-2 block font-bold">
              Full Width (default)
            </Typography>
            <Select
              label="Full Width Select"
              placeholder="Select..."
              options={basicOptions}
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <Typography component="strong" className="mb-2 block font-bold">
              Auto Width
            </Typography>
            <Select
              label="Auto Width Select"
              placeholder="Select..."
              options={basicOptions}
              fullWidth={false}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Selects;
