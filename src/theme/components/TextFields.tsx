import { SearchSm, Eye } from "@untitledui/icons";

import { Divider, Grid, Icon, TextField, Typography } from "@ppl/ui";

const TextFields = () => {
  return (
    <Grid container>
      {/* Výchozí vzhled */}
      <Grid size={12}>
        <div className="mb-10 flex flex-col items-center justify-center bg-[var(--color-headline-5)] p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <TextField label="Title" placeholder="Enter text..." fullWidth={false} />
        </div>
      </Grid>

      {/* SECTION: Colors */}
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
            <TextField label="Title" placeholder="Placeholder..." />
          </Grid>
          <Grid size={2}>
            <TextField color="success" label="Title" placeholder="Placeholder..." />
          </Grid>
          <Grid size={2}>
            <TextField color="error" label="Title" placeholder="Placeholder..." />
          </Grid>
          <Grid size={2}>
            <TextField color="warning" label="Title" placeholder="Placeholder..." />
          </Grid>
          <Grid size={2}>
            <TextField color="carton" label="Title" placeholder="Placeholder..." />
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
            <TextField label="Title" placeholder="Placeholder..." disabled />
          </Grid>
          <Grid size={2}>
            <TextField color="success" label="Title" placeholder="Placeholder..." disabled />
          </Grid>
          <Grid size={2}>
            <TextField color="error" label="Title" placeholder="Placeholder..." disabled />
          </Grid>
          <Grid size={2}>
            <TextField color="warning" label="Title" placeholder="Placeholder..." disabled />
          </Grid>
          <Grid size={2}>
            <TextField color="carton" label="Title" placeholder="Placeholder..." disabled />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>Outlined with value</Grid>
          <Grid size={2}>
            <TextField label="Title" placeholder="Placeholder..." value="Input" disabled />
          </Grid>
          <Grid size={2}>
            <TextField
              color="success"
              label="Title"
              placeholder="Placeholder..."
              value="Input"
              disabled
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="error"
              label="Title"
              placeholder="Placeholder..."
              value="Input"
              disabled
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="warning"
              label="Title"
              placeholder="Placeholder..."
              value="Input"
              disabled
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="carton"
              label="Title"
              placeholder="Placeholder..."
              value="Input"
              disabled
            />
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
        <Grid container alignItems="center" spacing={4}>
          <Grid size={2}></Grid>
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
        <Grid container alignItems="center" spacing={4}>
          <Grid size={2}>Outlined</Grid>
          <Grid size={2}>
            <TextField size="medium" label="Title" placeholder="Placeholder..." />
          </Grid>
          <Grid size={2}>
            <TextField size="small" label="Title" placeholder="Placeholder..." />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Sizes */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Textfield with icon
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
            <TextField
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="success"
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="error"
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="warning"
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="carton"
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
            />
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
            <TextField
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="success"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="error"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="warning"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="carton"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h4" gutterBottom>
          Both icon
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
            <TextField
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="success"
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="error"
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="warning"
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="carton"
              label="Title"
              placeholder="Placeholder..."
              startAdornment={<Icon icon={SearchSm} />}
              endAdornment={<Icon icon={Eye} />}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: With label and helper text */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          With Label and Helper Text
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <TextField
              label="Email"
              placeholder="Enter your email..."
              helperText="We'll never share your email"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password..."
              required
              helperText="At least 8 characters"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: With error */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          With Error Message
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <TextField
              label="Email"
              placeholder="Enter your email..."
              error
              helperText="Please enter a valid email address"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Username"
              placeholder="Enter username..."
              error
              helperText="This username is already taken"
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
            <TextField
              required
              label="First Name"
              placeholder="Enter your first name..."
              helperText="This field is required"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              required
              label="Last Name"
              placeholder="Enter your last name..."
              helperText="This field is required"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Different Input Types */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Different Input Types
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={4}>
            <TextField type="email" label="Email" placeholder="email@example.com" />
          </Grid>
          <Grid size={4}>
            <TextField type="password" label="Password" placeholder="Enter password..." />
          </Grid>
          <Grid size={4}>
            <TextField type="number" label="Age" placeholder="Enter your age..." />
          </Grid>
          <Grid size={4}>
            <TextField type="tel" label="Phone" placeholder="+1 234 567 8900" />
          </Grid>
          <Grid size={4}>
            <TextField type="url" label="Website" placeholder="https://example.com" />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Multiline */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Multiline
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}>Outlined</Grid>
          <Grid size={2}>
            <TextField label="Title" placeholder="Placeholder..." multiline rows={6} />
          </Grid>
          <Grid size={2}>
            <TextField
              color="success"
              label="Title"
              placeholder="Placeholder..."
              multiline
              rows={6}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="error"
              label="Title"
              placeholder="Placeholder..."
              multiline
              rows={6}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="warning"
              label="Title"
              placeholder="Placeholder..."
              multiline
              rows={6}
            />
          </Grid>
          <Grid size={2}>
            <TextField
              color="carton"
              label="Title"
              placeholder="Placeholder..."
              multiline
              rows={6}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TextFields;
