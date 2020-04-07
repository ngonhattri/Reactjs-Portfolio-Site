import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl'
class Landing extends Component {
   render() {
       return(
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p960x960/85072903_1030223767336233_7865162953903833088_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=JJ-l5ByERA8AX9OBkgj&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=ee88a75d921f3e0de968054eeb3aabeb&oe=5EB258ED"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Mobile Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | Java | Swift | Flutter | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* twitter */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

          {/* facebook */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
       )
   } 
}

export default Landing;