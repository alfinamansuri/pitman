import React from 'react'
import Siteheader from '../components/Siteheader';
import bannerlogo from '../assets/images/banner-logo.png';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';



function Home() {
  
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div>
      <Siteheader></Siteheader>
      <div className="banner-section">
          <div className="container">
              <div className="max-container">
                    <div className="inner-banner">
                        <div className="banner-detail">
                        <div className="inner-detail">
                            <i><img src={bannerlogo} /></i>
                            <h4>Learn Online or On-Campus</h4>
                            <h1>Get the UK’s Top Training for In-Demand Industries</h1>
                            <p>With 180+ years of changing lives, Pitman Training
                              has the courses and diplomas you need. Whether you’re
                              learning new skills, rejoining the workforce, or training a
                              whole team, we’ve got you covered.
                            </p>
                            </div>
                        </div>
                        <div className="banner-form">
                            <div className="inner-form">
                            <div class="form-header">
                                  <h3>Enquire Now</h3>
                                  <p>Please complete the form for more course information and prices.</p>
                            </div>
                            <div class="form-detail">
                              <div class="tab-block">
                            
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
  
                              </div>
                            </div>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Home
