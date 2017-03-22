import React from 'react';
import PostCard from './PostCard.jsx';

class PoetryHome extends React.Component {
  render() {
    return (
      <div>
        <div className="homeMidsection">
          <h2 className="homeHeader">
            Even more than self expression, I see 
            <a className="headerWord--aqua"> poetry </a>
            as a practice of design.
          </h2>
        </div>
        <div className="postStreamContainer">
          <h1 className="postStreamTitle postStreamTitle__poetry">Poetry</h1>
          <PostCard
            route={this.props.articles[2].route}
            color={this.props.articles[2].color}
            title={this.props.articles[2].title}
            tag={this.props.articles[2].tag}
            summary={this.props.articles[2].summary}
          />
        </div>
      </div>
    );
  }
}

export default PoetryHome;
