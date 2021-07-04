import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2_1';
import Section3 from './section3/Section3';
import Section4_1 from './section4/Section4_1';
import Section4_2 from './section4/Section4_2';
import { BrowserRouter } from 'react-router-dom';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <BrowserRouter>
          <ReactFullpage.Wrapper>
            <div className="section">
              <Section1 onClick={() => fullpageApi.moveSectionDown()}></Section1>
            </div>
            <div className="section">
              <Section2></Section2>
            </div>
            <div className="section">
              <Section3></Section3>
            </div>
            <div className="section">
              <div className="portfolio">
                <div className="portfoliotext">
                  Projectd
                  <div className="slide">
                    <Section4_1></Section4_1>
                  </div>
                  <div className="slide">
                    <Section4_2></Section4_2>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <p>Section 5</p>
            </div>
          </ReactFullpage.Wrapper>
        </BrowserRouter>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('react-root'));
