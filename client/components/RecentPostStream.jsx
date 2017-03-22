import React from 'react';
import PostCard from './PostCard.jsx';

class RecentPostStream extends React.Component {
  render() {
    return (
      <div className="postStreamContainer">
        <h1 className="postStreamTitle postStreamTitle__recent">Recent</h1>
        <PostCard
          route={this.props.articles[2].route}
          color={this.props.articles[2].color}
          title={this.props.articles[2].title}
          tag={this.props.articles[2].tag}
          summary={this.props.articles[2].summary}
        />
        <PostCard
          route={this.props.articles[1].route}
          color={this.props.articles[1].color}
          title={this.props.articles[1].title}
          tag={this.props.articles[1].tag}
          summary={this.props.articles[1].summary}
        />
        <PostCard
          route={this.props.articles[0].route}
          color={this.props.articles[0].color}
          title={this.props.articles[0].title}
          tag={this.props.articles[0].tag}
          summary={this.props.articles[0].summary}
        />
      </div>
    );
  }
}

export default RecentPostStream;
