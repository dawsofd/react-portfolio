import React from 'react';
import Grid from '@mui/material/Grid2';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ paddingTop: '30px', paddingBottom: '30px'}}>
            <Grid
                style={{ display: 'flex', justifyContent: 'center' }}
                container
                sx={{ color: 'text.primary' }}
            >
              <Grid
                style={{ display: 'flex', justifyContent: 'space-evenly' }}
                item
                xs={4}
              >
                <LinkedInIcon
                  id='icon'
                  className='pop-on-hover'
                  sx={{ fontSize: 50 }}
                  onClick={(event) => 
                    (window.location.href = 'https://linkedin.com/in/dawson-dohlen/')
                  }
                />
                <GitHubIcon
                  id='icon'
                  className='pop-on-hover'
                  sx={{ fontSize: 50 }}
                  onClick={(event) =>
                    (window.location.href = 'https://github.com/dawsofd')
                  }
                />
                <EmailIcon
                  id='icon'
                  className='pop-on-hover'
                  sx={{ fontSize: 50 }}
                  onClick={(event) =>
                    (window.location.href = 'mailto:d.dohlen@pm.me')
                  }
                />
              </Grid>
            </Grid>
        </div>
    );
};

export default Footer;