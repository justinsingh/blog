import React from 'react';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

class PostCard extends React.Component {
  render() {
    return (
      <Link to={this.props.route} style={{ textDecoration: 'none' }}>
        <div style={{ backgroundColor: this.props.color, display: 'flex',
                      flexDirection: 'column' }}
        >
          <a className="cardTitle cardTitle--white">{this.props.title}</a>
          <div />
          <div style={{ transform: 'translateY(-30px)' }}>
            <a className="cardBorder--white">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </div>
          <div>
            <a className="cardTag cardTag--white">{this.props.tag}</a>
          </div>
          <div className="cardSummaryContainer">
            <a className="cardSummary cardSummary--white">{this.props.summary}</a>
          </div>
        </div>
      </Link>
    );
  }
}

export default PostCard;
