import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./Sidebar";
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3 from '@material-ui/icons/Looks3';
import Looks4 from '@material-ui/icons/Looks4';

const onClick = (e, item) => {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [{
  name: "home",
  label: "Home",
  Icon: HomeIcon,
},
  {
    name: "Nasyx",
    label: "Nasyx",
    Icon: ReceiptIcon,
    items: [{
      name: "Rakeeb",
      label: "Rakeeb",
      onClick
    }]
  },
  "divider",
  {
    name: "test1",
    label: "test1",
    Icon: LooksOneIcon,
    items: [{
      name: "test2",
      label: "test2",
      Icon: LooksTwoIcon,
      items: [{
        name: "test3",
        label: "test3",
        Icon: Looks3,
        items: [{
          name: "test4",
          label: "test4",
          Icon: Looks4,
          items: [{
            name: "😅😅😅",
            label: "😅😅😅"
          }]
        }]
      }]
    }]},
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [{
      name: "profile",
      label: "Profile"
    },
      {
        name: "insurance",
        label: "Insurance",
        onClick
      },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [{
          name: "email",
          label: "Email",
          onClick
        },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [{
              name: "schedule",
              label: "Schedule"
            },
              {
                name: "frequency",
                label: "Frequency"
              }]
          },
          {
            name: "sms",
            label: "SMS"
          }]
      }]
  }];

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

export default App;