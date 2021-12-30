import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import Religion from "../Drawer/Common/Religion/Religion";
import Cast from "../Drawer/Common/Cast/Cast";
import Parameter from "../Drawer/Common/Parameter/Parameter";
import Language from "../Drawer/Common/Language/Language";
import ActiveEmp from "../Drawer/PIM/Active Employee/Active";
import Devision from "../Drawer/PIM/Division/Division";
import Department from "../Drawer/PIM/Department/Department";
import Section from "../Drawer/PIM/Section/Section";
import SubSection from "../Drawer/PIM/Sub Section/SubSection";
import Designation from "../Drawer/PIM/Designation/Designation";
import Category from "../Drawer/PIM/Category/Category";
import SubCategory from "../Drawer/PIM/SubCategory/SubCategory";
import Grade from "../Drawer/PIM/Grade/Grade";
import Bank from "../Drawer/PIM/Bank/Bank";
import Shift from "../Drawer/PIM/Shift/Shift";
import DiscountinuedEmp from "../Drawer/PIM/Discontinued Emp/DisEmp";
import Class from "../Drawer/PIM/Class/Class"

             
// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/notifications" component={Notifications} />
              <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />}/>
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
              <Route path="/app/religion" component={Religion} />
              <Route path="/app/cast" component={Cast} />
              <Route path="/app/parameter" component={Parameter} />
              <Route path="/app/language" component={Language} />
              <Route path="/app/devision" component={Devision} />
              <Route path="/app/class" component={Class} />
              <Route path="/app/department" component={Department} />
              <Route path="/app/section" component={Section} />
              <Route path="/app/subsection" component={SubSection} />
              <Route path="/app/designation" component={Designation} />
              <Route path="/app/category" component={Category} />
              <Route path="/app/subcategory" component={SubCategory} />
              <Route path="/app/grade" component={Grade} />
              <Route path="/app/bank" component={Bank} />
              <Route path="/app/shift" component={Shift} />
              <Route path="/app/activeemp" component={ActiveEmp} />
              <Route path="/app/discountinuedemp" component={DiscountinuedEmp} />
              
            </Switch>
            {/* <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
              <div>
                <Link
                  color={'primary'}
                  href={'https://flatlogic.com/'}
                  target={'_blank'}
                  className={classes.link}
                >
                  Flatlogic
                </Link>
                <Link
                  color={'primary'}
                  href={'https://flatlogic.com/about'}
                  target={'_blank'}
                  className={classes.link}
                >
                  About Us
                </Link>
                <Link
                  color={'primary'}
                  href={'https://flatlogic.com/blog'}
                  target={'_blank'}
                  className={classes.link}
                >
                  Blog
                </Link>
                    </div>
                  <div>
                <Link
                  href={'https://www.facebook.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton aria-label="facebook">
                    <Icon
                      path={FacebookIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://twitter.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton aria-label="twitter">
                    <Icon
                      path={TwitterIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
                <Link
                  href={'https://github.com/flatlogic'}
                  target={'_blank'}
                >
                  <IconButton
                    aria-label="github"
                    style={{marginRight: -12}}
                  >
                    <Icon
                      path={GithubIcon}
                      size={1}
                      color="#6E6E6E99"
                    />
                  </IconButton>
                </Link>
              </div>
            </Box> */}
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
