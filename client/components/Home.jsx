import React from 'react';
import RecentPostStream from './RecentPostStream.jsx';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="homeMidsection">
          <h2 className="homeHeader">
            I write on the subjects of
            <a> </a>
            <Link to="/technology" style={{ textDecoration: 'none' }}>
              <a className="headerWord headerWord--orange">technology</a>
            </Link>
            <a>, </a>
            <Link to="/poetry" style={{ textDecoration: 'none' }}>
              <a className="headerWord headerWord--aqua">poetry</a>
            </Link>
            {/* <a>, </a>
            <Link to="/fiction/all" style={{ textDecoration: 'none' }}>
              <a className="headerWord headerWord--grape">fiction</a>
            </Link> */}
            <a>, and my </a>
            <Link to="/personal thoughts" style={{ textDecoration: 'none' }}>
              <a className="headerWord headerWord--salmon">personal thoughts</a>
            </Link>
            <a>.</a>
          </h2>
        </div>
        <RecentPostStream {...this.props} />
      </div>
    );
  }
}

export default Home;
