import Dashboard from "views/Dashboard.jsx";
// import Notifications from "views/Notifications.jsx";
// import Icons from "views/Icons.jsx";
// import Typography from "views/Typography.jsx";
// import TableList from "views/Tables.jsx";
//import Maps from "views/Map.jsx";
// import UserPage from "views/User.jsx";
import LeafletMaps from "views/LeafletMap.jsx";
import Covid19 from "views/Covid19.jsx";
// import Covid19Krabi from "views/Covid19Krabi.jsx";
import Qrcode from 'views/Qrcode.jsx';
//import UpgradeToPro from "views/Upgrade.jsx";
//URL LOGO อยู่ใน Sidebar.jsx
var routes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-bank",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    path: "/covid19",
    name: "Covid19 Situation",
    icon: "nc-icon nc-sound-wave",
    component: Covid19,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Klongthom Maps",
    icon: "nc-icon nc-pin-3",
    component: LeafletMaps,
    layout: "/admin"
  },
  {
    path: "/qrcode",
    name: "QR Code",
    icon: "nc-icon nc-pin-3",
    component: Qrcode,
    layout: "/admin"
  },
  // {
  //   path: "/covid19Krabi",
  //   name: "Covid19 Krabi",
  //   icon: "nc-icon nc-single-02",
  //   component: Covid19Krabi,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin"
  // },
  {
    pro: true,
    path: "/KTAmin",
    name: "KTAmin",
    icon: "nc-icon nc-spaceship",
    component: Dashboard,
    layout: "/admin"
  }
  // ,
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];
export default routes;
