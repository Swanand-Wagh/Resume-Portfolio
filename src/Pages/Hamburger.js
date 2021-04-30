import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Drawer } from "@material-ui/core";
import { Image } from "react-bootstrap";
import My_Profile from "../Profile.pdf";
import "./hamburger.css";

const useStyles = makeStyles({
  list: {
    width: 320,
  },
  fullList: {
    width: "auto",
  },
});

export default function Hamburger() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      id="ham-menu"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="">
        <div className="img-border">
          <Image
            className="dp"
            src={process.env.PUBLIC_URL + "/assets/dp.png"}
            roundedCircle
          />
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "36px",
              letterSpacing: "1.15px",
              fontWeight: "700",
              marginBottom: "0",
            }}
          >
            Alias
          </p>
          {/* <p
            style={{ margin: "0px 0px 5px 0px", fontSize: "18px" }}
            className="text-center"
          >
            Web Designer
          </p> */}
          <div style={{ margin: "9px 0px" }} className="text-center ml-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/swanandwagh1208/"
            >
              <i class="fab fa-linkedin-in profile-links"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Swanand-Wagh"
            >
              <i class="fab fa-github profile-links"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/swanandaaaa/"
            >
              <i class="fab fa-instagram profile-links"></i>
            </a>
          </div>
        </div>
        <a
          className="download-btn"
          href={My_Profile}
          download="Swanand_resume.pdf"
        >
          Download CV
        </a>
        <p className="made-by text-center">
          Designed by Alias
          <br />
          <i class="far fa-copyright"></i> 2021 All rights reserved
        </p>
      </div>
    </div>
  );

  return (
    <div className="ham">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i class="fas fa-bars BARS"></i>
            {/* {anchor} */}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
