import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label:"Dashboard", link: "/app/dashboard", icon: <HomeIcon color="success" /> },
  {
    id: 1,
    label: "Common",
    link: "/app/typography",
    icon: <TypographyIcon color="success" />,
    children: [
      { label: "Religion", link: "/app/religion" },
      { label: "Caste", link: "/app/cast" },
      { label: "Language", link: "/app/language" },
      { label: "Parameter Value", link: "/app/parameter" },
    ],
    
  },
  { id: 2, 
    label: "PIM", 
    link: "/app/pim", 
    icon: <TableIcon color="success" /> ,
    children: [
      { label: "Devision", link: "/app/devision" },
      { label: "Class", link: "/app/class" },
      { label: "Department", link: "/app/department" },
      { label: "Section", link: "/app/section" },
      { label: "Sub Section", link: "/app/subsection" },
      { label: "Designation", link: "/app/designation" },
      { label: "Category", link: "/app/category" },
      { label: "Sub Category", link: "/app/subcategory" },
      { label: "Grade", link: "/app/grade" },
      { label: "Bank", link: "/app/bank" },
      { label: "Shift", link: "/app/shift" },
      { label: "Active Employee", link: "/app/activeemp" },
      { label: "Discontinued Employee", link: "/app/discountinuedemp" },
      {
        id: "",
        label: "Report",
        link: "/app/report",
        icon: <TypographyIcon color="success" />,
        children: [
          { label: "Employee Strength", link: "/app/religion", icon: <TypographyIcon color="success" />,},
          { label: "Employee Details", link: "/app/cast" ,icon: <TypographyIcon color="success" />, },
          { label: "Employee Documents", link: "/app/language" },
          { label: "Employee Forms", link: "/app/parameter" },
          { label: "Full & Finall", link: "/app/parameter" },
        ],
      },
     
    ],
  },
  {
    id: 3,
    label: "Attendance",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "OverTime",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
     
    ],
  },
  { id: 7, label: "OutDuty", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
 
  { id: 6, label: "Leave", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
  { id: 7, label: "Loan", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
  { id: 8, label: "Salary", link: "https://flatlogic.com/forum", icon: <SupportIcon /> },
  { id: 9, label: "Retaining", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  { id: 10, label: "Bonus", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  { id: 11, label: "ExGratia", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  { id: 12, label: "Requirement", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  { id: 13, label: "Administration", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  
 

];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
