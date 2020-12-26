import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import "assets/css/effects/colors.css";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const themes = localStorage.getItem("themes") || "";

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
      document.body
        .getElementsByClassName("myhobbies")[0]
        .classList.add("myhobbies-color");
      document.body
        .getElementsByClassName("myfavoritetracks")[0]
        .classList.add("myfavoritetracks-color");
      document.body
        .getElementsByClassName("whatido")[0]
        .classList.add("whatido-color");
      document.body
        .getElementsByClassName("myprojects")[0]
        .classList.add("myprojects-color");
      document.body
        .getElementsByClassName("fa-github")[0]
        .classList.add(
          themes === "dark" ? "github-white-color" : "github-color"
        );
      document.body
        .getElementsByClassName("fa-gitlab")[0]
        .classList.add("gitlab-color");
      document.body
        .getElementsByClassName("fa-bitbucket")[0]
        .classList.add("bitbucket-color");
      document.body
        .getElementsByClassName("fa-linkedin")[0]
        .classList.add("linkedin-color");
      document.body
        .getElementsByClassName("fa-dribbble")[0]
        .classList.add("dribbble-color");
      document.body
        .getElementsByClassName("fa-youtube")[0]
        .classList.add("youtube-color");
      document.body
        .getElementsByClassName("fa-instagram")[0]
        .classList.add("instagram-color");
      document.body
        .getElementsByClassName("fa-facebook")[0]
        .classList.add("facebook-color");
      document.body
        .getElementsByClassName("fa-twitter")[0]
        .classList.add("twitter-color");
      document.body
        .getElementsByClassName("fa-pinterest")[0]
        .classList.add("pinterest-color");
      document.body
        .getElementsByClassName("fa-paypal")[0]
        .classList.add("paypal-color");
      document.body
        .getElementsByClassName("fa-google")[0]
        .classList.add("google-color");
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
      document.body
        .getElementsByClassName("myhobbies")[0]
        .classList.remove("myhobbies-color");
      document.body
        .getElementsByClassName("myfavoritetracks")[0]
        .classList.remove("myfavoritetracks-color");
      document.body
        .getElementsByClassName("whatido")[0]
        .classList.remove("whatido-color");
      document.body
        .getElementsByClassName("myprojects")[0]
        .classList.remove("myprojects-color");
      document.body
        .getElementsByClassName("fa-github")[0]
        .classList.remove("github-white-color");
      document.body
        .getElementsByClassName("fa-github")[0]
        .classList.remove("github-color");
      document.body
        .getElementsByClassName("fa-gitlab")[0]
        .classList.remove("gitlab-color");
      document.body
        .getElementsByClassName("fa-bitbucket")[0]
        .classList.remove("bitbucket-color");
      document.body
        .getElementsByClassName("fa-linkedin")[0]
        .classList.remove("linkedin-color");
      document.body
        .getElementsByClassName("fa-dribbble")[0]
        .classList.remove("dribbble-color");
      document.body
        .getElementsByClassName("fa-youtube")[0]
        .classList.remove("youtube-color");
      document.body
        .getElementsByClassName("fa-instagram")[0]
        .classList.remove("instagram-color");
      document.body
        .getElementsByClassName("fa-facebook")[0]
        .classList.remove("facebook-color");
      document.body
        .getElementsByClassName("fa-twitter")[0]
        .classList.remove("twitter-color");
      document.body
        .getElementsByClassName("fa-pinterest")[0]
        .classList.remove("pinterest-color");
      document.body
        .getElementsByClassName("fa-paypal")[0]
        .classList.remove("paypal-color");
      document.body
        .getElementsByClassName("fa-google")[0]
        .classList.remove("google-color");
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const brandComponent = (
    <Button
      className={classes.title + " btn"}
      onClick={scrollTop}
      style={{
        cursor:
          "url(https://firebasestorage.googleapis.com/v0/b/nguyensonhai-developer.appspot.com/o/cursors%2Flink.cur?alt=media&token=aa6c3a1b-3068-4e8f-8e94-43adad7bb033),pointer",
      }}
    >
      {brand}
    </Button>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={"btn"}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
