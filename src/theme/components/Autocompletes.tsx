import { useState } from "react";
import { Flag01, Globe01, Mail01, MarkerPin01, Package, SearchSm, User01 } from "@untitledui/icons";

import { Autocomplete, type AutocompleteOption, Divider, Grid, Icon, Typography } from "@ppl/ui";

const basicOptions: AutocompleteOption<string>[] = [
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

const countryOptions: AutocompleteOption<string>[] = [
  { value: "cz", label: "Czech Republic" },
  { value: "sk", label: "Slovakia" },
  { value: "de", label: "Germany" },
  { value: "pl", label: "Poland" },
  { value: "at", label: "Austria" },
  { value: "hu", label: "Hungary" },
  { value: "fr", label: "France" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
  { value: "uk", label: "United Kingdom" },
];

const cityOptions: AutocompleteOption<string>[] = [
  { value: "prague", label: "Prague" },
  { value: "brno", label: "Brno" },
  { value: "ostrava", label: "Ostrava" },
  { value: "bratislava", label: "Bratislava" },
  { value: "berlin", label: "Berlin" },
  { value: "warsaw", label: "Warsaw" },
  { value: "vienna", label: "Vienna" },
];

const optionsWithIcons: AutocompleteOption<string>[] = [
  { value: "user", label: "User profile", icon: <Icon icon={User01} size="small" /> },
  { value: "email", label: "Email settings", icon: <Icon icon={Mail01} size="small" /> },
  { value: "location", label: "Location services", icon: <Icon icon={MarkerPin01} size="small" /> },
  { value: "globe", label: "Language & Region", icon: <Icon icon={Globe01} size="small" /> },
  { value: "package", label: "Package tracking", icon: <Icon icon={Package} size="small" /> },
];

const optionsWithDisabled: AutocompleteOption<string>[] = [
  { value: "standard", label: "Standard Delivery" },
  { value: "express", label: "Express Delivery" },
  { value: "same-day", label: "Same Day Delivery", disabled: true },
  { value: "overnight", label: "Overnight Delivery", disabled: true },
];

const Autocompletes = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCountryLabel, setSelectedCountryLabel] = useState<string | null>(null);
  const [lastEvent, setLastEvent] = useState<string>("");

  return (
    <Grid container>
      {/* Výchozí vzhled */}
      <Grid size={12}>
        <div className="mb-10 flex flex-col items-center justify-center bg-[var(--color-headline-5)] p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <Autocomplete
            options={basicOptions}
            placeholder="Start typing..."
            textFieldProps={{ label: "Title", fullWidth: false }}
          />
        </div>
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
              With Value
            </Typography>
          </Grid>
          <Grid size={3}>
            <Typography component="strong" className="block text-center font-bold">
              Read Only
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
            <Autocomplete options={basicOptions} placeholder="Search..." textFieldProps={{ label: "Title" }} />
          </Grid>
          <Grid size={3}>
            <Autocomplete options={basicOptions} defaultValue="Option 1" textFieldProps={{ label: "Title" }} />
          </Grid>
          <Grid size={3}>
            <Autocomplete options={basicOptions} defaultValue="Option 1" readOnly textFieldProps={{ label: "Title" }} />
          </Grid>
          <Grid size={3}>
            <Autocomplete options={basicOptions} placeholder="Search..." disabled textFieldProps={{ label: "Title" }} />
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
            <Autocomplete
              options={basicOptions}
              placeholder="Search..."
              textFieldProps={{ label: "Title", error: true }}
            />
          </Grid>
          <Grid size={4}>
            <Autocomplete
              options={basicOptions}
              defaultValue="Option 1"
              textFieldProps={{ label: "Title", error: true }}
            />
          </Grid>
          <Grid size={4}>
            <Autocomplete
              options={basicOptions}
              placeholder="Search..."
              textFieldProps={{
                label: "Title",
                error: true,
                helperText: "Please select a valid option",
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: With Start Adornment */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          With Start Adornment
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
            <Autocomplete
              options={countryOptions}
              placeholder="Search country..."
              textFieldProps={{
                label: "Country",
                startAdornment: <Icon icon={SearchSm} />,
              }}
            />
          </Grid>
          <Grid size={3}>
            <Autocomplete
              options={countryOptions}
              defaultValue="Czech Republic"
              textFieldProps={{
                label: "Country",
                startAdornment: <Icon icon={Flag01} />,
              }}
            />
          </Grid>
          <Grid size={3}>
            <Autocomplete
              options={countryOptions}
              placeholder="Search country..."
              textFieldProps={{
                label: "Country",
                startAdornment: <Icon icon={SearchSm} />,
                error: true,
              }}
            />
          </Grid>
          <Grid size={3}>
            <Autocomplete
              options={countryOptions}
              placeholder="Search country..."
              disabled
              textFieldProps={{
                label: "Country",
                startAdornment: <Icon icon={SearchSm} />,
              }}
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
            <Autocomplete
              options={countryOptions}
              placeholder="Search country..."
              textFieldProps={{
                label: "Delivery Country",
                required: true,
                helperText: "This field is required",
              }}
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={countryOptions}
              defaultValue="Czech Republic"
              textFieldProps={{
                label: "Delivery Country",
                required: true,
                helperText: "This field is required",
              }}
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
            <Autocomplete
              options={cityOptions}
              placeholder="Search city..."
              textFieldProps={{
                label: "Destination City",
                helperText: "Start typing to search for a city",
              }}
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={cityOptions}
              placeholder="Search city..."
              textFieldProps={{
                label: "Destination City",
                error: true,
                helperText: "City selection is required for delivery",
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Loading State */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Loading State
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Autocomplete options={[]} placeholder="Search..." loading textFieldProps={{ label: "Loading data" }} />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={[]}
              placeholder="Search..."
              loading
              loadingText="Fetching results..."
              textFieldProps={{ label: "Custom loading text" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: No Options */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          No Options State
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Autocomplete options={[]} placeholder="Search..." textFieldProps={{ label: "No options available" }} />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={[]}
              placeholder="Search..."
              noOptionsText="No results found. Try a different search."
              textFieldProps={{ label: "Custom no options text" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Highlight Match */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Highlight Match
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Autocomplete
              options={countryOptions}
              placeholder="Type to search..."
              highlightMatch={false}
              textFieldProps={{ label: "Without highlight (default)" }}
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={countryOptions}
              placeholder="Type to search..."
              highlightMatch
              textFieldProps={{ label: "With highlight" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Options with Icons */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Options with Icons
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Autocomplete
              options={optionsWithIcons}
              placeholder="Search settings..."
              textFieldProps={{ label: "Settings" }}
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={optionsWithIcons}
              defaultValue="User profile"
              textFieldProps={{ label: "Settings" }}
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
            <Autocomplete
              options={optionsWithDisabled}
              placeholder="Select delivery method..."
              textFieldProps={{
                label: "Delivery Method",
                helperText: "Some options are currently unavailable",
              }}
            />
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={optionsWithDisabled}
              defaultValue="Standard Delivery"
              textFieldProps={{
                label: "Delivery Method",
                helperText: "Some options are currently unavailable",
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Keyboard Navigation */}
      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Keyboard Navigation
        </Typography>
        <Typography variant="body" className="mb-4 text-gray-600">
          Autocomplete podporuje plnou navigaci pomocí klávesnice:
        </Typography>
        <ul className="mb-6 list-inside list-disc text-sm text-gray-600">
          <li>
            <strong>↓ / ↑ (šipka dolů/nahoru)</strong> - pohyb mezi položkami v seznamu
          </li>
          <li>
            <strong>Enter</strong> - výběr aktuálně zvýrazněné položky
          </li>
          <li>
            <strong>Escape</strong> - zavření popupu
          </li>
        </ul>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" spacing={4}>
          <Grid size={6}>
            <Autocomplete
              options={countryOptions}
              value={selectedCountryLabel ?? undefined}
              onChange={val => setLastEvent(`onChange: "${val}"`)}
              onSelect={value => {
                setSelectedCountry(value);
                const label = countryOptions.find(opt => opt.value === value)?.label ?? null;
                setSelectedCountryLabel(label);
                setLastEvent(prev => `${prev} | onSelect: "${value}"`);
              }}
              placeholder="Zkuste navigovat šipkami..."
              textFieldProps={{
                label: "Vyberte zemi (test Enter)",
                helperText: "1. Klikněte do pole 2. Šipkou ↓ vyberte položku 3. Stiskněte Enter",
              }}
            />
            <div className="mt-4 rounded border border-gray-200 bg-gray-50 p-3">
              <Typography variant="labelS" className="text-gray-500">
                Vybraná hodnota (po stisknutí Enter):
              </Typography>
              <Typography variant="body" className="mt-1 font-semibold">
                {selectedCountry ? (
                  <span className="text-green-600">
                    {countryOptions.find(opt => opt.value === selectedCountry)?.label} (value: {selectedCountry})
                  </span>
                ) : (
                  <span className="text-gray-400">Žádná hodnota nevybrána</span>
                )}
              </Typography>
              {lastEvent && (
                <Typography variant="labelS" className="mt-2 text-blue-600">
                  Debug: {lastEvent}
                </Typography>
              )}
            </div>
          </Grid>
          <Grid size={6}>
            <Autocomplete
              options={optionsWithIcons}
              placeholder="Navigace funguje i s ikonami..."
              highlightMatch
              textFieldProps={{
                label: "Nastavení",
                helperText: "Zvýrazněná položka má stejný styl jako při hover",
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      {/* SECTION: Width Options */}
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
            <Autocomplete
              options={basicOptions}
              placeholder="Search..."
              textFieldProps={{ label: "Full Width Autocomplete", fullWidth: true }}
            />
          </Grid>
          <Grid size={12}>
            <Typography component="strong" className="mb-2 block font-bold">
              Auto Width
            </Typography>
            <Autocomplete
              options={basicOptions}
              placeholder="Search..."
              textFieldProps={{ label: "Auto Width Autocomplete", fullWidth: false }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Autocompletes;
