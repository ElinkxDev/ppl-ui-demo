import React from "react";
import { Checkbox, Typography } from "@ppl/ui";

const Checkboxes = () => {
  return (
    <>
      <Typography variant="h3" color="carton" gutterBottom>
        Checkbox
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Checked */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Checked
            </Typography>
          </div>
          <Checkbox checked={true} />
        </div>

        {/* Unchecked */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Unchecked
            </Typography>
          </div>
          <Checkbox checked={false} />
        </div>

        {/* Unchecked - focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Unchecked - Focused
            </Typography>
          </div>
          <Checkbox checked={false} interactionState="focus" />
        </div>

        {/* Checked - Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Checked - Focused
            </Typography>
          </div>
          <Checkbox checked={true} interactionState="focus" />
        </div>

        {/* Disabled - Checked */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled - Checked
            </Typography>
          </div>
          <Checkbox checked={true} disabled />
        </div>

        {/* Disabled - Unchecked */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled - Unchecked
            </Typography>
          </div>
          <Checkbox checked={false} disabled />
        </div>
      </div>
    </>
  );
};

export default Checkboxes;
