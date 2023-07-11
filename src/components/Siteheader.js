import React from "react";
// import { Link } from 'memfs/lib/node';
// import { Link } from 'react-router-dom';
import HeaderLogo from "../assets/images/pitman-logo.png";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

function Siteheader(props) {
  const onPress = e => {
    e.preventDefault();

    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ alignToTop: true, behavior: "smooth" });
    }
  };

  /*end*/
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner-wrap">
          <Link className="logo" to="/about">
            <img src={HeaderLogo} alt="Pitman" />
          </Link>
          <ScrollspyNav
            scrollTargetIds={[
              "course",
              "timeline",
              "review",
              "category",
              "reason",
              "trainee"
            ]}
            offset={-91}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul className="header-nav">
              <li className="nav-item">
                <a href="#course" onClick={e => onPress(e)} title="Courses">
                  <div className={"ss-item"} data-to-scrollspy-id="course">
                    Courses
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="#timeline" onClick={e => onPress(e)} title="Timeline">
                  <div className={"ss-item"} data-to-scrollspy-id="timeline">
                    Timeline
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#review"
                  onClick={e => onPress(e)}
                  className={"ss-item"}
                  data-to-scrollspy-id="review"
                  title="Reviews"
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#category"
                  onClick={e => onPress(e)}
                  className={"ss-item"}
                  data-to-scrollspy-id="category"
                  title="Categories"
                >
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#reason"
                  onClick={e => onPress(e)}
                  className={"ss-item"}
                  data-to-scrollspy-id="reason"
                  title="Top 10 Reasons"
                >
                  Top 10 Reasons
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#trainee"
                  onClick={e => onPress(e)}
                  className={"ss-item"}
                  data-to-scrollspy-id="trainee"
                  title="Career"
                >
                  Career
                </a>
              </li>
            </ul>
          </ScrollspyNav>
          <span className="call-link">
            Call us:
            <a href="/" title=" 01937 865709">
              {" "}
              01937 865709
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Siteheader;
