import React, { Fragment } from "react";
import {Link} from "react-router-dom"
import "../css/style.css";
import {
  MDBBox,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBContainer,
} from "mdbreact";


const Navbar = (props) => {
  const postLogout = async () => {
    await props.logout();
    if (!localStorage.getItem("isSignin")) {
      window.location.reload(false);
    }
  };

  return (
    <MDBNavbar
      expand="md"
      style={{
        boxShadow: "none",
        backgroundColor: props.backNav ? props.backNav : "white",
        // position: "fixed",
        zIndex: "10",
        minWidth: "100%",
        color: props.backNav ? props.backNav : "rgb(241, 76, 89)",
        textDecoration: "none",
      }}
      className="navbar"
    >
      <MDBContainer style={{maxWidth:"1300px"}}>
        <MDBNavbarBrand className="d-flex align-items-center justify-content-center">
          <Link to="/">
            <strong
              className="logo"
              style={{
                fontSize: "32px",
                color: props.fontColor ? props.fontColor : "#f14c59",
              }}
            >
              JM
            </strong>
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarNav right className="d-flex align-items-center">
          <MDBNavItem>
            <Link
              to="/how-to-use"
              className="nav ml-3 text-uppercase text-decoration-none"
              style={{ color: props.fontColor ? props.fontColor : "#f14c59" }}
            >
              Cara penggunaan
            </Link>
          </MDBNavItem>
          {/* <MDBNavItem>
            <a
              to="/contact"
              className="text-decoration-none nav ml-3 text-uppercase text-decoration-none"
              style={{ color: props.fontColor ? props.fontColor : "#f14c59" }}
            >
              contact
            </a>
          </MDBNavItem> */}
          {localStorage.getItem("isSignin") ? (
            <Fragment>
              <MDBNavItem>
                <Link
                  to="/dashboard"
                  className="text-decoration-none nav ml-3 text-uppercase text-decoration-none"
                  style={{
                    color: props.fontColor ? props.fontColor : "#f14c59",
                  }}
                >
                  dashboard
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <div
                  className="text-decoration-none nav ml-3 text-uppercase text-decoration-none"
                  style={{
                    color: props.fontColor ? props.fontColor : "#f14c59",
                    cursor: "pointer",
                  }}
                  onClick={postLogout}
                >
                  logout
                </div>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="/profile" className="ml-3 ">
                  <img
                    src={
                props.bio.user_image === "https://firebasestorage.googleapis.com/v0/b/personal-email-d3b3b.appspot.com/o/images%2Fuser_image%2F9ff2f2f01c4bd1b013.png?alt=media&token=272b7417-a9fa-4fde-99b1-e00fa6d377ee" ? props.bio.user_image : require("../images/deafult-profile.jpg")
              }
                    alt="pict"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </MDBNavItem>
            </Fragment>
          ) : (
            <MDBNavItem>
              <Link to="/signin" className="ml-3 ">
                <MDBBox
                  className="btn text-uppercase my-0 py-1"
                  style={{
                    fontSize: "18px",
                    boxShadow: "none",
                    backgroundColor: props.backNavButton ? props.backNavButton : "#f14c59",
                    color: props.fontColorNot ? props.fontColorNot : "white",
                    borderRadius: "20px",
                  }}
                >
                  masuk
                </MDBBox>
              </Link>
            </MDBNavItem>
          )}
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Navbar;
