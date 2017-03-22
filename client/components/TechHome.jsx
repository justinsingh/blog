import React from 'react';
import PostCard from './PostCard.jsx';

class TechHome extends React.Component {
  render() {
    return (
      <div>
        <div className="homeMidsection">
          <h2 className="homeHeader">
            I enjoy thinking about the many ways
            <a className="headerWord--orange"> technology </a>
            crafts our age.
          </h2>
        </div>
        <div className="postStreamContainer">
          <h1 className="postStreamTitle">Tech</h1>
          <PostCard
            route={this.props.articles[1].route}
            color={this.props.articles[1].color}
            title={this.props.articles[1].title}
            tag={this.props.articles[1].tag}
            summary={this.props.articles[1].summary}
          />
        </div>
      </div>
    );
  }
}

export default TechHome;
