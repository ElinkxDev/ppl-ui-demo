import { useState } from "react";
import { DatePicker, Typography } from "@ppl/ui";
import type { DatePickerRange } from "@ppl/ui";

/**
 * Vytvoří pole povolených dat — dnešek + dalších 6 pracovních dnů (pro demo).
 * Slouží jako ukázka `allowedDates` whitelist pro shipment use-case.
 */
function createAllowedDates(): Date[] {
  const result: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let offset = 0; offset < 21; offset++) {
    const candidate = new Date(today);
    candidate.setDate(today.getDate() + offset);
    const day = candidate.getDay();
    // Vynechá víkendy
    if (day !== 0 && day !== 6) {
      result.push(candidate);
    }
    if (result.length === 7) break;
  }
  return result;
}

const allowedDates = createAllowedDates();
const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0);

const maxDate = new Date(todayDate);
maxDate.setMonth(maxDate.getMonth() + 3);

export default function DatePickers() {
  const [normalValue, setNormalValue] = useState<Date | null>(null);
  const [filledValue, setFilledValue] = useState<Date | null>(allowedDates[2] ?? null);
  const [autoValue, setAutoValue] = useState<Date | null>(null);
  const [rangeValue, setRangeValue] = useState<DatePickerRange | null>(null);

  return (
    <>
      <Typography variant="h3" color="carton" gutterBottom>
        Date Picker
      </Typography>

      <div className="flex flex-col gap-5">
        {/* Header row */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center" />
          <div className="min-w-[280px] text-center">
            <Typography component="strong" className="font-bold">
              Empty
            </Typography>
          </div>
          <div className="min-w-[280px] text-center">
            <Typography component="strong" className="font-bold">
              Filled
            </Typography>
          </div>
        </div>

        {/* Normal — allowedDates (shipment use-case) */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              allowedDates
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Termín doručení"
              allowedDates={allowedDates}
              helperText="7 pracovních dnů od dneška"
              value={normalValue}
              onChange={setNormalValue}
            />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Termín doručení"
              allowedDates={allowedDates}
              helperText="7 pracovních dnů od dneška"
              value={filledValue}
              onChange={setFilledValue}
            />
          </div>
        </div>

        {/* minDate / maxDate */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              minDate / maxDate
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker label="Datum události" minDate={todayDate} maxDate={maxDate} helperText="Dnes až +3 měsíce" />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Datum události"
              minDate={todayDate}
              maxDate={maxDate}
              defaultValue={todayDate}
              helperText="Dnes až +3 měsíce"
            />
          </div>
        </div>

        {/* Auto confirm — bez OK / Zrušit */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Auto confirm
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Datum"
              confirmationMode="auto"
              helperText="Klik na den okamžitě potvrdí"
              value={autoValue}
              onChange={setAutoValue}
            />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Datum"
              confirmationMode="auto"
              defaultValue={todayDate}
              helperText="Klik na den okamžitě potvrdí"
            />
          </div>
        </div>

        {/* Range mode */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Range
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              mode="range"
              label="Období"
              helperText="Vyberte interval od–do"
              value={rangeValue}
              onChange={setRangeValue}
            />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              mode="range"
              label="Období"
              defaultValue={{ from: allowedDates[0] ?? todayDate, to: allowedDates[4] ?? todayDate }}
              helperText="Vyberte interval od–do"
            />
          </div>
        </div>

        {/* Error */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Error
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker label="Datum doručení" allowedDates={allowedDates} error helperText="Pole je povinné" />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Datum doručení"
              allowedDates={allowedDates}
              defaultValue={allowedDates[1]}
              error
              helperText="Neplatný termín"
            />
          </div>
        </div>

        {/* Disabled */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Disabled
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Datum doručení"
              allowedDates={allowedDates}
              disabled
              helperText="Komponenta je zakázaná"
            />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Datum doručení"
              allowedDates={allowedDates}
              defaultValue={allowedDates[2]}
              disabled
              helperText="Komponenta je zakázaná"
            />
          </div>
        </div>

        {/* Size variants */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Size small
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker label="Datum" size="small" allowedDates={allowedDates} helperText="size='small'" />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Datum"
              size="small"
              defaultValue={allowedDates[0]}
              allowedDates={allowedDates}
              helperText="size='small'"
            />
          </div>
        </div>

        {/* Required */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Required
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker label="Datum doručení" required allowedDates={allowedDates} helperText="Povinné pole" />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Datum doručení"
              required
              defaultValue={allowedDates[1]}
              allowedDates={allowedDates}
              helperText="Povinné pole"
            />
          </div>
        </div>

        {/* Custom texts (lokalizace) */}
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Custom texts
            </Typography>
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Date"
              allowedDates={allowedDates}
              helperText="UI texty přepsány na anglické"
              texts={{
                cancelLabel: "Cancel",
                okLabel: "Done",
                prevMonthLabel: "Previous month",
                nextMonthLabel: "Next month",
                selectMonthLabel: "Pick a month",
              }}
            />
          </div>
          <div className="min-w-[280px]">
            <DatePicker
              label="Date"
              defaultValue={allowedDates[3]}
              allowedDates={allowedDates}
              formatDate={date =>
                `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
              }
              helperText="ISO formát zobrazení"
              texts={{ cancelLabel: "Cancel", okLabel: "Done" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
