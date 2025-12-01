import { Radio, RadioGroup, Typography } from "@ppl/ui";

export default function Radios() {
  return (
    <>
      <Typography variant="h3" color="carton" gutterBottom>
        Radio
      </Typography>
      <div className="flex flex-col gap-5">
        {/* Checked */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Checked
            </Typography>
          </div>
          <RadioGroup defaultValue="default">
            <Radio value="default" />
          </RadioGroup>
        </div>

        {/* Unchecked */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Unchecked
            </Typography>
          </div>
          <RadioGroup defaultValue="default">
            <Radio value="0" />
          </RadioGroup>
        </div>

        {/* Unchecked - focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Unchecked - Focused
            </Typography>
          </div>
          <RadioGroup defaultValue="default">
            <Radio value="0" interactionState="focus" />
          </RadioGroup>
        </div>

        {/* Checked - Focused */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Checked - Focused
            </Typography>
          </div>
          <RadioGroup defaultValue="default">
            <Radio value="default" interactionState="focus" />
          </RadioGroup>
        </div>

        {/* Disabled - Checked */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled - Checked
            </Typography>
          </div>
          <RadioGroup defaultValue="default">
            <Radio value="default" disabled />
          </RadioGroup>
        </div>

        {/* Disabled - Unchecked */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled - Unchecked
            </Typography>
          </div>
          <RadioGroup defaultValue="default">
            <Radio value="0" disabled />
          </RadioGroup>
        </div>
      </div>
    </>
  );
}
