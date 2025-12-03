import React from "react";
import { Badge, Chip, Divider, Icon, Typography } from "@ppl/ui";
import { Check } from "@untitledui/icons/Check";
import { Umbrella03 } from "@untitledui/icons/Umbrella03";
import { Bell01 } from "@untitledui/icons/Bell01";
import { BoxIcon } from "@ppl/ui/icons";

export default function ChipsAndBadges() {
  return (
    <>
      <Typography variant="h2" color="primary" gutterBottom>
        Chips & Badges
      </Typography>
      <Typography variant="h3" color="carton" gutterBottom>
        Badge
      </Typography>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Success
            </Typography>
          </div>
          <Chip label="Platba kartou" size="small" color="success" deleteIcon={Check} />
          <Chip label="Platba kartou" size="small" color="success" icon={Umbrella03} />
          <Chip label="Platba kartou" size="small" color="success" />
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Warning
            </Typography>
          </div>
          <Chip label="Platba kartou" size="small" color="warning" deleteIcon={Check} />
          <Chip label="Platba kartou" size="small" color="warning" icon={Umbrella03} />
          <Chip label="Platba kartou" size="small" color="warning" />
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Error
            </Typography>
          </div>
          <Chip label="Platba kartou" size="small" color="error" deleteIcon={Check} />
          <Chip label="Platba kartou" size="small" color="error" icon={Umbrella03} />
          <Chip label="Platba kartou" size="small" color="error" />
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Info
            </Typography>
          </div>
          <Chip label="Platba kartou" size="small" color="primary" deleteIcon={Check} />
          <Chip label="Platba kartou" size="small" color="primary" icon={Umbrella03} />
          <Chip label="Platba kartou" size="small" color="primary" />
        </div>
        <div className="flex gap-10">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Natural
            </Typography>
          </div>
          <Chip label="Platba kartou" size="small" color="text" deleteIcon={Check} />
          <Chip label="Platba kartou" size="small" color="text" icon={Umbrella03} />
          <Chip label="Platba kartou" size="small" color="text" />
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Notification Badges
      </Typography>
      <div className="flex flex-col gap-5">
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Natural
            </Typography>
          </div>
          <Badge badgeContent={9} color="text" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="text" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="text" variant="dot" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Primary
            </Typography>
          </div>
          <Badge badgeContent={9} color="primary" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="primary" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="primary" variant="dot" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Success
            </Typography>
          </div>
          <Badge badgeContent={9} color="success" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="success" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="success" variant="dot" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Warning
            </Typography>
          </div>
          <Badge badgeContent={9} color="warning" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="warning" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="warning" variant="dot" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Error
            </Typography>
          </div>
          <Badge badgeContent={9} color="error" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="error" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
          <Badge badgeContent={100} color="error" variant="dot" anchorOrigin={{ vertical: "0" }}>
            <div></div>
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Badge placement
            </Typography>
          </div>
          <Badge badgeContent={9} color="primary">
            <Icon icon={Bell01} />
          </Badge>
          <Badge badgeContent={100} color="success">
            <Icon icon={Bell01} />
          </Badge>
          <Badge badgeContent={100} color="error" variant="dot">
            <Icon icon={Bell01} />
          </Badge>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Chips
      </Typography>
      <div className="flex flex-col gap-5">
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Normal
            </Typography>
          </div>
          <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }}>
            <Chip label="Chip" icon={BoxIcon} variant="outlined" />
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Clickable - Normal
            </Typography>
          </div>
          <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }}>
            <Chip label="Chip" icon={BoxIcon} variant="outlined" onClick={() => console.log("Chip clicked")} />
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Clickable - Hover
            </Typography>
          </div>

          <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }}>
            <Chip
              label="Chip"
              icon={BoxIcon}
              deleteIcon={Check}
              interactionState="hover"
              onClick={() => console.log("Chip clicked")}
            />
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Clickable - Pressed
            </Typography>
          </div>

          <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }}>
            <Chip
              label="Chip"
              icon={BoxIcon}
              deleteIcon={Check}
              interactionState="press"
              onClick={() => console.log("Chip clicked")}
            />
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Clickable - Focused
            </Typography>
          </div>

          <Badge badgeContent={9} anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }}>
            <Chip
              label="Chip"
              icon={BoxIcon}
              deleteIcon={Check}
              interactionState="focus"
              onClick={() => console.log("Chip clicked")}
            />
          </Badge>
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Clickable - Disabled
            </Typography>
          </div>

          <Badge badgeContent={9} color="text" anchorOrigin={{ vertical: "-4px", horizontal: "-4px" }}>
            <Chip label="Chip" icon={BoxIcon} deleteIcon={Check} disabled onClick={() => console.log("Chip clicked")} />
          </Badge>
        </div>
      </div>

      <Divider className="my-10" />

      <Typography variant="h3" color="carton" gutterBottom>
        Badges - Capacity
      </Typography>

      <div className="flex flex-col gap-5">
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Free
            </Typography>
          </div>

          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-success-140 text-md flex h-full w-full items-center justify-center font-bold text-white">
                S
              </div>
            }
            label="Volné"
            color="success"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-success-140 text-md flex h-full w-full items-center justify-center font-bold text-white">
                M
              </div>
            }
            label="Volné"
            color="success"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-success-140 text-md flex h-full w-full items-center justify-center font-bold text-white">
                L
              </div>
            }
            label="Volné"
            color="success"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-success-140 text-md flex h-full w-full items-center justify-center font-bold text-white">
                XL
              </div>
            }
            label="Volné"
            color="success"
            size="small"
          />
        </div>
        <div className="flex gap-20">
          <div className="flex min-w-[180px] items-center">
            <Typography component="strong" className="font-bold">
              Full
            </Typography>
          </div>
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-error-130 text-md text-md flex h-full w-full items-center justify-center font-bold text-white">
                S
              </div>
            }
            label="Plné"
            color="error"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-error-130 text-md flex h-full w-full items-center justify-center font-bold text-white">
                M
              </div>
            }
            label="Plné"
            color="error"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-error-130 text-md flex h-full w-full items-center justify-center font-bold text-white">
                L
              </div>
            }
            label="Plné"
            color="error"
            size="small"
          />
          <Chip
            avatarVariant="square"
            avatar={
              <div className="bg-error-130 text-md flex h-full w-full items-center justify-center font-bold text-white">
                XL
              </div>
            }
            label="Plné"
            color="error"
            size="small"
          />
        </div>
      </div>
    </>
  );
}
