import React from "react";
// import {useState} from 'react';

import Siteheader from "../components/Siteheader";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "react-slick";
import ScrollSpy from "react-ui-scrollspy";
import TextField from '@mui/material/TextField';

import bannerlogo from "../assets/images/banner-logo.png";
import HeaderLogo from "../assets/images/pitman-logo.png";
import TabPanel from "@material-ui/lab/TabPanel";
import logo_1 from "../assets/images/logo-1.png";
import logo_2 from "../assets/images/logo-2.png";
import logo_3 from "../assets/images/logo-3.png";
import cource_1 from "../assets/images/cource-1.png";
import tick_mark_icon from "../assets/images/tick-mark.svg";
import trainee_logo from "../assets/images/trainee-logo.png";
import call_icon from "../assets/images/call.svg";
import fb_icon from "../assets/images/facebook.svg";
import insta_icon from "../assets/images/insta.svg";
import li_icon from "../assets/images/linkedin.svg";
import twit_icon from "../assets/images/twitter.svg";
import item_1 from "../assets/images/item-1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// interface Props {}

function Home() {
  /* for tabbing */
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* accordion */
  const [expanded, setExpanded] = React.useState(false);
  const handleChange_1 = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  /*end*/
  /*slider-block*/
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  /*end*/
  /* scroll spy */

  /*end */

  return (
    <div>
      <div>
        <div>
          <Siteheader></Siteheader>
        </div>
        {/* banner-section */}
        <div className="wrapper">
          <ScrollSpy scrollThrottle={100} useBoxMethod={true} >
            <div className="banner-section" id="banner">
                <div className="max-container">
                  <div className="inner-banner">
                    <div className="banner-detail">
                      <div className="inner-detail">
                        <i>
                          <img src={bannerlogo} alt="" />
                        </i>
                        <h4>Learn Online or On-Campus</h4>
                        <h1>
                          Get the UK’s Top Training for In-Demand Industries
                        </h1>
                        <p>
                          With 180+ years of changing lives, Pitman Training has
                          the courses and diplomas you need. Whether you’re
                          learning new skills, rejoining the workforce, or
                          training a whole team, we’ve got you covered.
                        </p>
                      </div>
                    </div>
                    <div className="banner-form">
                      <div className="inner-form">
                        <div className="form-header">
                          <h3>Enquire Now</h3>
                          <p>
                            Please complete the form for more course information
                            and prices.
                          </p>
                        </div>
                        <div className="form-detail">
                          <div className="tab-block">
                            <TabContext value={value}>
                              <Box
                                sx={{ borderBottom: 1, borderColor: "divider" }}
                              >
                                <TabList
                                  onChange={handleChange}
                                  aria-label="lab API tabs example"
                                >
                                  <Tab label="Personal Enquiry" value="1" />
                                  <Tab label="Group/Corporate Enquiry " value="2" />
                                </TabList>
                              </Box>
                              <TabPanel value="1">
                                <form>
                                <div className="form-group-wrap">
                                    <div className="form-group">
                                    <TextField id="name" label="Full Name*" className="form-control"  type="text" variant="filled"/>
                                    </div>
                                    </div>
                                    <div className="form-group-wrap two-col">
                                    <div className="form-group">
                                    <TextField id="email" label="Email Address*" className="form-control" type="email" variant="filled"/>
                                    </div>
                                    <div className="form-group">
                                    <TextField id="number" label="Phone Number*" className="form-control"  type="text" variant="filled"/>
                                    </div>
                                    </div>
                                    <div className="form-group-wrap">
                                    <div className="form-group">
                                    <TextField id="comment" label="Comments*" multiline maxRows={3} variant="filled" className="form-control" />
                                    </div>
                                    </div>
                                    <div className="btn-block">
                                    <button type="submit" className="primary-btn" title="Submit">Submit</button>
                                    </div>
                                </form>
                              </TabPanel>
                              <TabPanel value="2">
                              <form>
                                <div className="form-group-wrap">
                                    <div className="form-group">
                                    <TextField id="name" label="Group Name*" className="form-control"  type="text" variant="filled"/>
                                    </div>
                                    </div>
                                    <div className="form-group-wrap two-col">
                                    <div className="form-group">
                                    <TextField id="email" label="Email Address*" className="form-control" type="email" variant="filled"/>
                                    </div>
                                    <div className="form-group">
                                    <TextField id="number" label="Phone Number*" className="form-control"  type="text" variant="filled"/>
                                    </div>
                                    </div>
                                    <div className="form-group-wrap">
                                    <div className="form-group">
                                    <TextField id="comment" label="Comments*" multiline maxRows={3} variant="filled" className="form-control" />
                                    </div>
                                    </div>
                                    <div className="btn-block">
                                    <button type="submit" className="primary-btn" title="Submit">Enquiry</button>
                                    </div>
                                </form>
                              </TabPanel>
                            </TabContext>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            {/* review-block */}
            <div className="review-block" id="review">
              <div className="container">
                <p>1450+ reviews with an average of 4.7 stars</p>
                <div className="inner-review">
                  <div className="review-logo">
                    <i>
                      <img src={logo_1} alt="" />
                    </i>
                  </div>
                  <div className="review-logo">
                    <i>
                      <img src={logo_2} alt="" />
                    </i>
                  </div>
                  <div className="review-logo">
                    <i>
                      <img src={logo_3} alt="" />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            {/* our-course-block */}
            <div className="our-course-block" id="course">
              <div className="container">
                <h2 className="title white-title">
                  Our Courses
                </h2>
                <div className="max-container">
                  <div className="inner-our-course">
                    <div className="course-block">
                      <div className="inner-course">
                        <i>
                          <img src={cource_1} alt="" />
                        </i>
                        <div className="detail">
                          <h4>Office &amp; Secretarial</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                          <Link title="More info">More info</Link>
                        </div>
                      </div>
                    </div>
                    <div className="course-block">
                      <div className="inner-course">
                        <i>
                          <img src={cource_1} alt="" />
                        </i>
                        <div className="detail">
                          <h4>Office &amp; Secretarial</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                          <Link title="More info">More info</Link>
                        </div>
                      </div>
                    </div>
                    <div className="course-block">
                      <div className="inner-course">
                        <i>
                          <img src={cource_1} alt="" />
                        </i>
                        <div className="detail">
                          <h4>Office &amp; Secretarial</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                          <Link title="More info">More info</Link>
                        </div>
                      </div>
                    </div>
                    <div className="course-block">
                      <div className="inner-course">
                        <i>
                          <img src={cource_1} alt="" />
                        </i>
                        <div className="detail">
                          <h4>Office &amp; Secretarial</h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
                          </p>
                          <Link title="More info">More info</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-block">
                        <Link to="/" className="primary-btn" title="View All Courses">View All Courses</Link>
                    </div>
                </div>
              </div>
            </div>
            {/*time-line-block */}
            <div className="timeline-section section" id="timeline">
              <div className="container">
               
                  <h2 className="title black-title">Pitman Training Group Timeline</h2>
               
                <div className="timestamp-listing">
                  <div className="timestamp-outer-left-line"></div>
                  <div className="timestamp-block">
                    <div className="timestamp-list">
                      <div className="timestamp-inner">2019</div>
                      <div className="timestamp-inner-line"></div>
                      <div className="timestamp-content-outer">
                        <div className="timestamp-content-inner">
                          <div className="border"></div>
                          <div className="timestamp-content">
                            <h5>Title Here</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              typesetting.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timestamp-list">
                      <div className="timestamp-inner">2020</div>
                      <div className="timestamp-inner-line"></div>
                      <div className="timestamp-content-outer">
                        <div className="timestamp-content-inner">
                          <div className="border"></div>
                          <div className="timestamp-content">
                            <h5>Title Here</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              typesetting.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timestamp-list">
                      <div className="timestamp-inner">2021</div>
                      <div className="timestamp-inner-line"></div>
                      <div className="timestamp-content-outer">
                        <div className="timestamp-content-inner">
                          <div className="border"></div>
                          <div className="timestamp-content">
                            <h5>Title Here</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              typesetting.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timestamp-list">
                      <div className="timestamp-inner">2022</div>
                      <div className="timestamp-inner-line"></div>
                      <div className="timestamp-content-outer">
                        <div className="timestamp-content-inner">
                          <div className="border"></div>
                          <div className="timestamp-content">
                            <h5>Title Here</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              typesetting.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timestamp-list">
                      <div className="timestamp-inner">2023</div>
                      <div className="timestamp-content-outer">
                        <div className="timestamp-content-inner">
                          <div className="border"></div>
                          <div className="timestamp-content">
                            <h5>Title Here</h5>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              typesetting.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timestamp-outer-right-line"></div>
                </div>
              </div>
            </div>
            {/*end*/}
            {/* slider-block */}
            <div className="slider-block" id="slider">
              <div className="max-container">
                <div className="custom-slider">
                  <div>
                    <Slider {...settings}>
                      {/* item1 */}
                      <div>
                        <div className="slider-item">
                          <div className="item-img">
                            <i>
                              <img src={item_1} alt="" />
                            </i>
                          </div>
                          <div className="slider-detail">
                            <h2 className="title white-title">What Our Students Say</h2>
                            <p>
                              Pitman Training have been very supportive
                              throughout my studies with them. The team in the
                              test centre have always been very friendly and
                              more than happy to help with any queries i’ve had.
                              Additionally the online tutors have been great as
                              well, they have helped motivate and guide the
                              whole way. I would definitely recommend using
                              their service for any further training, and I will
                              be back in the future to study for my next
                              qualification.
                            </p>
                            <h4>Robert H. Smith</h4>
                            <p>Cloud Solutions Advisor, Microsoft</p>
                          </div>
                        </div>
                      </div>
                      {/* item2 */}
                      <div>
                        <div className="slider-item">
                          <div className="item-img">
                            <i>
                              <img src={item_1} alt="" />
                            </i>
                          </div>
                          <div className="slider-detail">
                            <h2>What Our Students Say</h2>
                            <p>
                              Pitman Training have been very supportive
                              throughout my studies with them. The team in the
                              test centre have always been very friendly and
                              more than happy to help with any queries i’ve had.
                              Additionally the online tutors have been great as
                              well, they have helped motivate and guide the
                              whole way. I would definitely recommend using
                              their service for any further training, and I will
                              be back in the future to study for my next
                              qualification.
                            </p>
                            <h4>Robert H. Smith</h4>
                            <p>Cloud Solutions Advisor, Microsoft</p>
                          </div>
                        </div>
                      </div>
                      {/*item3*/}
                      <div>
                        <div className="slider-item">
                          <div className="item-img">
                            <i>
                              <img src={item_1} alt="" />
                            </i>
                          </div>
                          <div className="slider-detail">
                            <h2>What Our Students Say</h2>
                            <p>
                              Pitman Training have been very supportive
                              throughout my studies with them. The team in the
                              test centre have always been very friendly and
                              more than happy to help with any queries i’ve had.
                              Additionally the online tutors have been great as
                              well, they have helped motivate and guide the
                              whole way. I would definitely recommend using
                              their service for any further training, and I will
                              be back in the future to study for my next
                              qualification.
                            </p>
                            <h4>Robert H. Smith</h4>
                            <p>Cloud Solutions Advisor, Microsoft</p>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            {/*end end */}
            {/*category-block*/}
            <div className="category-block" id="category">
              <div className="container">
                <h2 className="title black-title">
                  Categories
                </h2>
                <div className="max-container">
                  <ul className="cat-listing">
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Office &amp; Secretarial</span>
                    </li>
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Sage, Accounting &amp; Bookkeeping</span>
                    </li>
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Business &amp; Management</span>
                    </li>
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Visual Design</span>
                    </li>
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Microsoft Office</span>
                    </li>
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Software &amp; Web Development</span>
                    </li>
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Digital Marketing</span>
                    </li>
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Information Technolofy</span>
                    </li>
                    <li>
                      <i>
                        <img src={tick_mark_icon} alt="" />
                      </i>
                      <span>Language &amp; Personal Growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* top 10 reason block */}

            <div className="reason-block" id="reason">
              <div className="container">
                <div className="max-container">
                  <h2 className="title black-title">
                    Top 10 Reasons
                  </h2>
                  <div className="accordion-block">
                    <div className="accordion-col">
                      <div className="accordion-inner">
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange_1("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              A Warm Welcome
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails>
                            <Typography>
                              Enjoy the comfort of a dedicated learning space
                              which encourages you to retain information.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                      <div className="accordion-inner">
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange_1("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              Experienced Learning coaches
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Donec placerat, lectus sed mattis semper, neque
                              lectus feugiat lectus, varius pulvinar diam eros
                              in elit. Pellentesque convallis laoreet laoreet.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                      <div className="accordion-inner">
                        <Accordion
                          expanded={expanded === "panel3"}
                          onChange={handleChange_1("panel3")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                          >
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              Competency-based Learning
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Nunc vitae orci ultricies, auctor nunc in,
                              volutpat nisl. Integer sit amet egestas eros,
                              vitae egestas augue. Duis vel est augue.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </div>
                    <div className="accordion-col">
                      <div className="accordion-inner">
                        <Accordion
                          expanded={expanded === "panel4"}
                          onChange={handleChange_1("panel4")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                          >
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              Personal data
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Nunc vitae orci ultricies, auctor nunc in,
                              volutpat nisl. Integer sit amet egestas eros,
                              vitae egestas augue. Duis vel est augue.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                      <div className="accordion-inner">
                        <Accordion
                          expanded={expanded === "panel5"}
                          onChange={handleChange_1("panel5")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                          >
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              Personal data
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Nunc vitae orci ultricies, auctor nunc in,
                              volutpat nisl. Integer sit amet egestas eros,
                              vitae egestas augue. Duis vel est augue.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                      <div className="accordion-inner">
                        <Accordion
                          expanded={expanded === "panel6"}
                          onChange={handleChange_1("panel6")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                          >
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>
                              Personal data
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Nunc vitae orci ultricies, auctor nunc in,
                              volutpat nisl. Integer sit amet egestas eros,
                              vitae egestas augue. Duis vel est augue.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*end */}
            {/*trainee block */}
            <div className="trainee-block" id="trainee">
              <div className="max-container">
                <div className="inner-trainee-block">
                  <h3>
                    We are always glad to add talented trainees to our team.
                    Apply via email 

                     <Link title="career@pitman.com">career@pitman.com</Link>
                  </h3>
                  <div className="trainee-icon">
                    <i>
                      <img src={trainee_logo} alt="" />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            {/*end*/}
          </ScrollSpy>
        </div>
      </div>
      {/*footer block*/}
      <footer className="footer" id="footer">
        <div className="max-container">
          <div className="upper-footer">
            <div className="footer-left">
              <div className="upper-left">
                <Link title="Pitman" className="footer-logo">
                  <img src={HeaderLogo} alt="" />
                </Link>
                <p>
                  <i>
                    <img src={call_icon} alt="" />
                  </i>
                  <Link title="01937 869712">01937 869712</Link>
                </p>
                <address>
                  Deem House, Walkers Court, Audby Lane, Wetherby, LS22 7FD.
                </address>
              </div>
              <ul className="social-links">
                <li>
                  <Link title="Facebook">
                    <img src={fb_icon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link title="Instagram">
                    <img src={insta_icon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link title="Linkedin">
                    <img src={li_icon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link title="Twitter">
                    <img src={twit_icon} alt="" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-right">
              <div className="footer-listing-outer">
                <ul className="footer-listing">
                  <h5>CAREER TRACK</h5>
                  <li>
                    <Link title="Cybersecurity Bootcamp">
                      Cybersecurity Bootcamp
                    </Link>
                  </li>
                  <li>
                    <Link title="Data Analytics">Data Analytics</Link>
                  </li>
                  <li>
                    <Link title="Data Science">Data Science</Link>
                  </li>
                  <li>
                    <Link title="Digital Marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link title="Legal Secretary">Legal Secretary</Link>
                  </li>
                  <li>
                    <Link title="Machine Learning">Machine Learning</Link>
                  </li>
                  <li>
                    <Link title="Medical Secretary">Medical Secretary</Link>
                  </li>
                </ul>
                <ul className="footer-listing">
                  <h5>POPULAR COURSES</h5>
                  <li>
                    <Link title="General Office Skills Courses">
                      General Office Skills Courses
                    </Link>
                  </li>
                  <li>
                    <Link title="Legal Secretary Courses &amp; Diplomas">
                      Legal Secretary Courses &amp; Diplomas
                    </Link>
                  </li>
                  <li>
                    <Link title="Medical Secretary Courses &amp; Diplomas">
                      Medical Secretary Courses &amp; Diplomas
                    </Link>
                  </li>
                  <li>
                    <Link title="PA Courses">PA Courses</Link>
                  </li>
                  <li>
                    <Link title="Secretarial Courses ">
                      Secretarial Courses{" "}
                    </Link>
                  </li>
                  <li>
                    <Link title="Shorthand &amp; Speedwriting Courses ">
                      Shorthand &amp; Speedwriting Courses{" "}
                    </Link>
                  </li>
                  <li>
                    <Link title="Touch Typing Courses">
                      Touch Typing Courses
                    </Link>
                  </li>
                </ul>
                <ul className="footer-listing">
                  <h5>RESOURCES</h5>
                  <li>
                    <Link title="Pitman Blog">Pitman Blog</Link>
                  </li>
                  <li>
                    <Link title="What Career is Right For Me?">
                      What Career is Right For Me?
                    </Link>
                  </li>
                  <li>
                    <Link title="myPitman Student Login">
                      myPitman Student Login
                    </Link>
                  </li>
                  <li>
                    <Link title="Book an Exam">Book an Exam</Link>
                  </li>
                  <li>
                    <Link title="Franchise Opportunities">
                      Franchise Opportunities
                    </Link>
                  </li>
                </ul>
                <ul className="footer-listing">
                  <h5>ABOUT</h5>
                  <li>
                    <Link title="History">History</Link>
                  </li>
                  <li>
                    <Link title="Team">Team</Link>
                  </li>
                  <li>
                    <Link title="Reviews">Reviews</Link>
                  </li>
                  <li>
                    <Link title="FAQs">FAQs</Link>
                  </li>
                  <li>
                    <Link title="Careers">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lower-footer">
            <p className="copy-right-text">
              © 2023 Pitman Training Group LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/*end*/}
    </div>
  );
}

export default Home;
