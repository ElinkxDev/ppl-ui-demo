import React from "react";
import { Icon, TextField, Typography } from "@ppl/ui";
import { Eye } from "@untitledui/icons/Eye";

export default function TextFields() {
  return (
    <>
      <Typography variant="h3" color="carton" gutterBottom>
        Input
      </Typography>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center"></div>
          <div className="min-w-[250px] text-center">
            <Typography component="strong" className="font-bold">
              Empty
            </Typography>
          </div>
          <div className="min-w-[250px] text-center">
            <Typography component="strong" className="font-bold">
              Filled
            </Typography>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <TextField
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Helper text"
              maxLength={150}
              showCharacterCount
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              value="Input"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Helper text"
              maxLength={150}
              showCharacterCount
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Hover
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <TextField
              interactionState="hover"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Helper text"
              maxLength={150}
              showCharacterCount
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              interactionState="hover"
              value="Input"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Helper text"
              maxLength={150}
              showCharacterCount
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Focused
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <TextField
              interactionState="focus"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Helper text"
              maxLength={150}
              showCharacterCount
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              interactionState="focus"
              value="Input"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Helper text"
              maxLength={150}
              showCharacterCount
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Error
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <TextField
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Field cannot be empty"
              maxLength={150}
              showCharacterCount
              error
              focused
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Input is too long"
              maxLength={150}
              showCharacterCount
              error
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Success
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <TextField
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Field is valid"
              maxLength={150}
              showCharacterCount
              color="success"
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              value="Input"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Input is valid"
              maxLength={150}
              showCharacterCount
              color="success"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>
          <div className="min-w-[250px]">
            <TextField
              disabled
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Helper text"
              maxLength={150}
              showCharacterCount
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              disabled
              value="Input"
              label="Title"
              placeholder="Placeholder..."
              endAdornment={<Icon icon={Eye} />}
              helperText="Helper text"
              maxLength={150}
              showCharacterCount
            />
          </div>
        </div>
      </div>
    </>
  );
}
