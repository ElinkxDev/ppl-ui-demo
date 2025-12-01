import React from "react";
import { Divider, TextField, Typography } from "@ppl/ui";

export default function TextAreas() {
  return (
    <>
      <Typography variant="h3" color="carton" gutterBottom>
        Text area
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
              helperText="Helper text"
              maxLength={500}
              showCharacterCount
              multiline
              rows={4}
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              value="Multiline input text"
              label="Title"
              placeholder="Placeholder..."
              helperText="Helper text"
              maxLength={500}
              showCharacterCount
              multiline
              rows={4}
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
              helperText="Helper text"
              maxLength={500}
              showCharacterCount
              multiline
              rows={4}
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              interactionState="hover"
              value="Multiline input text"
              label="Title"
              placeholder="Placeholder..."
              helperText="Helper text"
              maxLength={500}
              showCharacterCount
              multiline
              rows={4}
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
              helperText="Helper text"
              maxLength={500}
              showCharacterCount
              multiline
              rows={4}
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              interactionState="focus"
              value="Multiline input text"
              label="Title"
              placeholder="Placeholder..."
              helperText="Helper text"
              maxLength={500}
              showCharacterCount
              multiline
              rows={4}
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
              helperText="Field cannot be empty"
              maxLength={500}
              showCharacterCount
              error
              focused
              multiline
              rows={4}
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
              label="Title"
              placeholder="Placeholder..."
              helperText="Input is too long"
              maxLength={500}
              showCharacterCount
              error
              multiline
              rows={4}
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
              helperText="Field is valid"
              maxLength={500}
              showCharacterCount
              color="success"
              multiline
              rows={4}
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              value="Multiline input text"
              label="Title"
              placeholder="Placeholder..."
              helperText="Input is valid"
              maxLength={500}
              showCharacterCount
              color="success"
              multiline
              rows={4}
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
              helperText="Helper text"
              maxLength={500}
              showCharacterCount
              multiline
              rows={4}
            />
          </div>
          <div className="min-w-[250px]">
            <TextField
              disabled
              value="Multiline input text"
              label="Title"
              placeholder="Placeholder..."
              helperText="Helper text"
              maxLength={500}
              showCharacterCount
              multiline
              rows={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}
