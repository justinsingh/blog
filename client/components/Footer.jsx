import React from 'react';
import TwitterIcon from '../styleSheet/images/Twitter.png';
import GithubIcon from '../styleSheet/images/Github.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="footerItems">
          <div className="emailText">
            justinsingh2015@gmail.com
          </div>
          <div className="socialMediaIcons">
            <a href="https://twitter.com/justinsinghs" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} role="presentation" className="Icon Icon__Twitter"/>
            </a>
            <a href="https://github.com/justinsingh" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} role="presentation" className="Icon Icon__Github" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
