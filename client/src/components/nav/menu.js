import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import { logout } from "../../actions/authActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./menu.css";
const styles = {
  pageWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen
        ? ""
        : right
          ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
          : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      MsTransform: isOpen
        ? ""
        : right
          ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
          : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      OTransform: isOpen
        ? ""
        : right
          ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
          : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      WebkitTransform: isOpen
        ? ""
        : right
          ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
          : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      transform: isOpen
        ? ""
        : right
          ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
          : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      transformStyle: "preserve-3d",
      transition: "all 0.5s",
      overflow: isOpen ? "" : "hidden"
    };
  },

  outerContainer(isOpen) {
    return {
      perspective: "1500px",
      overflow: isOpen ? "" : "hidden"
    };
  }
};
class SideMenu extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object,
    item: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      text: ""
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    const { user_cart } = this.props.item;
    var cartLength = user_cart.length;
    return (
      <Menu
        right
        style={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link onClick={() => this.closeMenu()} to="/">
          Home
        </Link>
        <Link onClick={() => this.closeMenu()} to="/browse">
          Search
        </Link>
        {this.props.isAuthenticated ? null : (
          <Link onClick={() => this.closeMenu()} to="/login">
            Log in
          </Link>
        )}
        {this.props.isAuthenticated ? null : (
          <Link onClick={() => this.closeMenu()} to="/signup">
            Sign up
          </Link>
        )}
        {this.props.isAuthenticated ? (
          <Link onClick={() => this.closeMenu()} to="/account">
            Account
          </Link>
        ) : null}
        {this.props.isAuthenticated ? (
          <Link onClick={() => this.closeMenu()} to="/cart">
            Cart{cartLength > 0 ? `(${cartLength})` : null}
          </Link>
        ) : null}
        {this.props.isAuthenticated ? (
          <Link
            onClick={() => this.closeMenu()}
            to="/"
            onClick={this.props.logout}
          >
            Logout
          </Link>
        ) : null}
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  item: state.item,
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  { clearErrors, logout }
)(SideMenu);
