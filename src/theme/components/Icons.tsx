import {
  AlertTriangle,
  ArrowNarrowDown,
  ArrowNarrowLeft,
  ArrowNarrowRight,
  ArrowNarrowUp,
  Attachment01,
  Bell01,
  Calendar,
  Check,
  ChevronLeft,
  ChevronLeftDouble,
  ChevronRight,
  ChevronRightDouble,
  Clock,
  Copy01,
  DotsVertical,
  Download01,
  Edit05,
  File04,
  FilterFunnel02,
  HelpCircle,
  Home02,
  Hourglass02,
  InfoCircle,
  LogOut01,
  Mail01,
  Map01,
  MarkerPin01,
  Menu01,
  MessageChatSquare,
  Package,
  PhoneCall01,
  Plus,
  Printer,
  QrCode01,
  RefreshCcw01,
  Route,
  Save01,
  SearchSm,
  Settings04,
  Share07,
  Tag01,
  Trash01,
  Truck01,
  Upload01,
  User01,
  Umbrella03,
  XClose,
} from "@untitledui/icons";

import { Divider, Grid, Icon, Typography } from "@ppl/ui";
import {
  BoxIcon,
  RecieveIcon,
  SendRecieveIcon,
  SendIcon,
  SpaceEmptyIcon,
  SpaceFullIcon,
  SpacePartialIcon,
  SpaceUndefinedIcon,
} from "@ppl/ui/icons";

const IconItem = ({
  icon,
  name,
  altName,
}: {
  /**
   * Ikona z knihovny @untitledui/icons.
   */
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  /**
   * Název ikony zobrazený pod ikonou.
   */
  name: string;

  /**
   * Alternativní název ikony (např. CSS class nebo alias).
   */
  altName?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Icon icon={icon} />
      <div className="flex flex-col items-center">
        <Typography variant="labelS" className="text-center">
          {name}
        </Typography>
        {altName && (
          <Typography variant="labelS" className="text-center opacity-60">
            ({altName})
          </Typography>
        )}
      </div>
    </div>
  );
};

const Icons = () => {
  return (
    <Grid container>
      <Grid size={12}>
        <div className="mb-10 flex flex-col items-center justify-center bg-[var(--color-headline-5)] p-8">
          <Typography variant="h5" component="h3" align="center" gutterBottom>
            Výchozí vzhled dle default props
          </Typography>
          <Icon icon={Home02} />
        </div>
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Common icons from Untitled UI
        </Typography>
      </Grid>

      {/* Navigation */}
      <Grid size={12}>
        <Grid container>
          <Grid size={2}>
            <Typography component="strong" className="font-bold">
              Navigation
            </Typography>
          </Grid>
          <Grid size={10}>
            <Grid container columns={10}>
              <Grid>
                <IconItem
                  icon={ArrowNarrowLeft}
                  name="ArrowNarrowLeft"
                  altName="arrow-narrow-left"
                />
              </Grid>
              <Grid>
                <IconItem
                  icon={ArrowNarrowRight}
                  name="ArrowNarrowRight"
                  altName="arrow-narrow-right"
                />
              </Grid>
              <Grid>
                <IconItem
                  icon={ArrowNarrowDown}
                  name="ArrowNarrowDown"
                  altName="arrow-narrow-down"
                />
              </Grid>
              <Grid>
                <IconItem icon={ArrowNarrowUp} name="ArrowNarrowUp" altName="arrow-narrow-up" />
              </Grid>
              <Grid>
                <IconItem icon={XClose} name="XClose" altName="x-close" />
              </Grid>
              <Grid>
                <IconItem icon={FilterFunnel02} name="FilterFunnel02" altName="filter-funnel-02" />
              </Grid>
              <Grid>
                <IconItem icon={Home02} name="Home02" altName="home-02" />
              </Grid>
              <Grid>
                <IconItem icon={ChevronLeft} name="ChevronLeft" altName="chevron-left" />
              </Grid>
              <Grid>
                <IconItem
                  icon={ChevronLeftDouble}
                  name="ChevronLeftDouble"
                  altName="chevron-left-double"
                />
              </Grid>
              <Grid>
                <IconItem icon={ChevronRight} name="ChevronRight" altName="chevron-right" />
              </Grid>
              <Grid>
                <IconItem
                  icon={ChevronRightDouble}
                  name="ChevronRightDouble"
                  altName="chevron-right-double"
                />
              </Grid>
              <Grid>
                <IconItem icon={Menu01} name="Menu01" altName="menu-01" />
              </Grid>
              <Grid>
                <IconItem icon={DotsVertical} name="DotsVertical" altName="dots-vertical" />
              </Grid>
              <Grid>
                <IconItem icon={SearchSm} name="SearchSm" altName="search-sm" />
              </Grid>
              <Grid>
                <IconItem icon={Check} name="Check" altName="check" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Action */}
      <Grid size={12}>
        <Grid container>
          <Grid size={2}>
            <Typography component="strong" className="font-bold">
              Action
            </Typography>
          </Grid>
          <Grid size={10}>
            <Grid container columns={10}>
              <Grid>
                <IconItem icon={Plus} name="Plus" altName="plus" />
              </Grid>
              <Grid>
                <IconItem icon={Calendar} name="Calendar" altName="calendar" />
              </Grid>
              <Grid>
                <IconItem icon={Copy01} name="Copy01" altName="copy-01" />
              </Grid>
              <Grid>
                <IconItem icon={Trash01} name="Trash01" altName="trash-01" />
              </Grid>
              <Grid>
                <IconItem icon={Download01} name="Download01" altName="download-01" />
              </Grid>
              <Grid>
                <IconItem icon={Edit05} name="Edit05" altName="edit-05" />
              </Grid>
              <Grid>
                <IconItem icon={Printer} name="Printer" altName="printer" />
              </Grid>
              <Grid>
                <IconItem icon={RefreshCcw01} name="RefreshCcw01" altName="refresh-ccw-01" />
              </Grid>
              <Grid>
                <IconItem icon={Save01} name="Save01" altName="save-01" />
              </Grid>
              <Grid>
                <IconItem icon={Settings04} name="Settings04" altName="settings-04" />
              </Grid>
              <Grid>
                <IconItem icon={Share07} name="Share07" altName="share-07" />
              </Grid>
              <Grid>
                <IconItem icon={Upload01} name="Upload01" altName="upload-01" />
              </Grid>
              <Grid>
                <IconItem icon={Attachment01} name="Attachment01" altName="attachment-01" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Logistics */}
      <Grid size={12}>
        <Grid container>
          <Grid size={2}>
            <Typography component="strong" className="font-bold">
              Logistics
            </Typography>
          </Grid>
          <Grid size={10}>
            <Grid container columns={10}>
              <Grid>
                <IconItem icon={Package} name="Package" altName="package" />
              </Grid>
              <Grid>
                <IconItem icon={Clock} name="Clock" altName="clock" />
              </Grid>
              <Grid>
                <IconItem icon={Tag01} name="Tag01" altName="tag-01" />
              </Grid>
              <Grid>
                <IconItem icon={Map01} name="Map01" altName="map-01" />
              </Grid>
              <Grid>
                <IconItem icon={MarkerPin01} name="MarkerPin01" altName="marker-pin-01" />
              </Grid>
              <Grid>
                <IconItem icon={QrCode01} name="QrCode01" altName="qr-code-01" />
              </Grid>
              <Grid>
                <IconItem icon={Route} name="Route" altName="route" />
              </Grid>
              <Grid>
                <IconItem icon={Truck01} name="Truck01" altName="truck-01" />
              </Grid>
              <Grid>
                <IconItem icon={Umbrella03} name="Umbrella03" altName="umbrella-03" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* General */}
      <Grid size={12}>
        <Grid container>
          <Grid size={2}>
            <Typography component="strong" className="font-bold">
              General
            </Typography>
          </Grid>
          <Grid size={10}>
            <Grid container columns={10}>
              <Grid>
                <IconItem
                  icon={MessageChatSquare}
                  name="MessageChatSquare"
                  altName="message-chat-square"
                />
              </Grid>
              <Grid>
                <IconItem icon={AlertTriangle} name="AlertTriangle" altName="alert-triangle" />
              </Grid>
              <Grid>
                <IconItem icon={File04} name="File04" altName="file-04" />
              </Grid>
              <Grid>
                <IconItem icon={HelpCircle} name="HelpCircle" altName="help-circle" />
              </Grid>
              <Grid>
                <IconItem icon={LogOut01} name="LogOut01" altName="log-out-01" />
              </Grid>
              <Grid>
                <IconItem icon={Mail01} name="Mail01" altName="mail-01" />
              </Grid>
              <Grid>
                <IconItem icon={Bell01} name="Bell01" altName="bell-01" />
              </Grid>
              <Grid>
                <IconItem icon={PhoneCall01} name="PhoneCall01" altName="phone-call-01" />
              </Grid>
              <Grid>
                <IconItem icon={Hourglass02} name="Hourglass02" altName="hourglass-02" />
              </Grid>
              <Grid>
                <IconItem icon={User01} name="User01" altName="user-01" />
              </Grid>
              <Grid>
                <IconItem icon={InfoCircle} name="InfoCircle" altName="info-circle" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Custom icons
        </Typography>
      </Grid>

      {/* Logistics */}
      <Grid size={12}>
        <Grid container>
          <Grid size={2}>
            <Typography component="strong" className="font-bold">
              Logistics
            </Typography>
          </Grid>
          <Grid size={10}>
            <Grid container columns={10}>
              <Grid>
                <IconItem icon={BoxIcon} name="Box" altName="box" />
              </Grid>
              <Grid>
                <IconItem icon={RecieveIcon} name="Recieve" altName="recieve" />
              </Grid>
              <Grid>
                <IconItem icon={SendIcon} name="Send" altName="send" />
              </Grid>
              <Grid>
                <IconItem icon={SendRecieveIcon} name="SendRecieve" altName="send-recieve" />
              </Grid>
              <Grid>
                <IconItem icon={SpaceEmptyIcon} name="SpaceEmpty" altName="space-empty" />
              </Grid>
              <Grid>
                <IconItem icon={SpaceFullIcon} name="SpaceFull" altName="space-full" />
              </Grid>
              <Grid>
                <IconItem icon={SpacePartialIcon} name="SpacePartial" altName="space-partial" />
              </Grid>
              <Grid>
                <IconItem
                  icon={SpaceUndefinedIcon}
                  name="SpaceUndefined"
                  altName="space-undefined"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Sizes
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Large (lg)
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Medium (md)
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Small (sm)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}></Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} size="md" />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} size="sm" />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Divider className="my-10" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" gutterBottom>
          Colors
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid size={2}></Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Primary
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Headline
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Text
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Success
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Error
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Warning
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              Carton
            </Typography>
          </Grid>
          <Grid size={1}>
            <Typography component="strong" className="block text-center font-bold">
              PostYellow
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container alignItems="center">
          <Grid size={2}></Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} color="primary" />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} color="headline" />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} color="text" />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} color="success" />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} color="error" />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} color="warning" />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} color="carton" />
            </div>
          </Grid>
          <Grid size={1}>
            <div className="flex justify-center">
              <Icon icon={Home02} color="postYellow" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Icons;
