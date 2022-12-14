import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  logos,
  arrow__down,
  down,
  facebook,
  instagram,
  Logo__mobile,
  Menue,
  search__mobile,
  twitter,
  youtube,
  Etudes,
  question,
  pen,
  logout,
  profile,
  emptyImage,
} from "src/assets/images";
import menus from "../menus";
import authSelectors from "src/modules/auth/authSelectors";
import authActions from "src/modules/auth/authActions";
import { useSelector, useDispatch } from "react-redux";
import I18nSelect from "./I18nSelect";
import { i18n } from "../../i18n";

import { useHistory, useLocation } from "react-router-dom";

function Header(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const loading = useSelector(authSelectors.selectLoading);
  const userDropdownAvatar = useSelector(authSelectors.selectCurrentUserAvatar);
  const history = useHistory();
  const location = useLocation();
  const doSignout = () => {
    dispatch(authActions.doSignout());
  };
  const selectedKeys = () => {
    const url = props.url;
    var token = url.split("/").slice(0, 2),
      res = token.join("/");
    return res;
  };
  const selectClass = (item) => {
    let className = "";
    if (item.path === selectedKeys()) {
      return (className = "dropdown li__active");
    } else if (item.path !== selectedKeys() && item.class) {
      className = "dropdown";
    } else {
      className = "";
    }
    return className;
  };

  const userMenu = (
    <ul className="header__dropdown">
      <Link to="/publication/new">
        <li>
          <img src={pen} alt="pen" />
          {i18n("menu.suggerer_des_donnees")}
        </li>
      </Link>
      <Link to="/profile">
        <li>
          <img src={profile} alt="profile" className="lazyload" />
          {i18n("menu.profile")}
        </li>
      </Link>
      <Link to="/appui/new">
        <li>
          <img src={question} alt="question" className="lazyload" />
          {i18n("menu.demander_d_appui")}
        </li>
      </Link>

      <li onClick={doSignout}>
        <img src={logout} alt="logout" className="lazyload" />

        {i18n("menu.deconnexion")}
      </li>
    </ul>
  );

  // HANDLING SEARCH LOGIC
  const [homeSearchString, setHomeSearchString] = useState("");
  const handleChange = (event) => {
    setHomeSearchString(event.target.value);
  };
  const handleClick = () => {
    history.push(searchPath);
  };
  const searchPath = {
    pathname: "/search",
    HOME_SEARCH_STRING: homeSearchString,
    // refresh: true
  };

  return (
    <React.Fragment>
      <div className="header__nav">
        <div className="nav">
          <Link to="/">
            <div className="nav__logo">
              <img className="lazyload" src={logos} alt="" />
            </div>
          </Link>
          <div className="nav__search">
            <input
              type="text"
              placeholder={i18n("common.recherche")}
              onChange={handleChange}
              value={homeSearchString}
            />
            {homeSearchString.length >= 1 && (
              // <Link to={searchPath}>
              <button onClick={handleClick}>
                <i className="fa-solid fa-magnifying-glass" />
              </button>
              // </Link>
            )}
          </div>
          <div className="nav__socialmedia">
            <img className="lazyload" src={facebook} alt="FaceBook Icon" />
            <img className="lazyload" src={twitter} alt="Twitter ICon" />
            <img className="lazyload" src={youtube} alt="Youtube Icon" />
            <img className="lazyload" src={instagram} alt="Instagram Icon" />
          </div>
          <div className="nav__button">
            {currentUser && !loading && (
              <>
                <div className="button__profile">
                  <div className="header__avatar">
                    <img
                      src={userDropdownAvatar || emptyImage}
                      alt=""
                      width="36"
                      height="36"
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                      className="lazyload"
                    />
                  </div>
                  <p>{currentUser.fullName}</p>
                  <img
                    className="lazyload"
                    src={arrow__down}
                    alt="Arrow Down Icon"
                    id="down"
                  />
                  {userMenu}
                </div>
              </>
            )}
            {!currentUser && (
              <Link to="/auth/signin">
                <div className="button__connexion">
                  <i className="fa-solid fa-user" />
                  <p>{i18n("menu.espace_membre")}</p>
                </div>
              </Link>
            )}
            <I18nSelect />
          </div>
        </div>
        <div className="header__links">
          <div className="links">
            <ul className="ul__links">
              {menus.map((item, index) => (
                <Link to={item.path} key={index}>
                  <li
                    style={{
                      padding: 8,
                      display: "flex",
                      alignItems: "baseline",
                      columnGap: 10,
                    }}
                    className={selectClass(item)}
                  >
                    {i18n(`menu.${item.label}`)}
                    {item.icon && (
                      <i className={item.icon} style={{ color: "red" }} />
                    )}
                    {item.class && (
                      <ul className="links__sub">
                        {item.subMenue?.map((item, index) => (
                          <div key={index}>
                            <li>
                              <img
                                className="lazyload"
                                src={Etudes}
                                alt="Etudes Icon"
                              />
                              {i18n(`menu.submenu.${item.label}`)}
                            </li>
                          </div>
                        ))}
                      </ul>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header__nav_mobile">
        <div className="mobile__top">
          <div className="search__icon">
            <img
              className="lazyload"
              src={search__mobile}
              alt="Search Mobile Icon"
            />
          </div>
          <div className="mobile__logo">
            <img
              className="lazyload"
              src={Logo__mobile}
              alt="Logo Mobile Icon"
            />
          </div>
          <div className="button__connexion">
            <i className="fa-solid fa-user" />
          </div>
        </div>
        <div className="mobile__links">
          <div className="links__menue">
            <img className="lazyload" src={Menue} alt="Menue Icon" />
          </div>
          <div className="links__translate">
            <p>FR</p>
            <img className="lazyload" src={down} alt="arrow down" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
