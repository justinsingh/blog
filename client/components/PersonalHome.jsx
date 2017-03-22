import React from 'react';
import PostCard from './PostCard.jsx';

class PersonalHome extends React.Component {
  render() {
    return (
      <div>
        <div className="homeMidsection">
          <h2 className="homeHeader">
            My 
            <a className="headerWord--salmon"> personal thoughts </a>
            are a glimpse into my introspective side.
          </h2>
        </div>
        <div className="postStreamContainer">
          <h1 className="postStreamTitle">Personal</h1>
          <PostCard
            route={this.props.articles[0].route}
            color={this.props.articles[0].color}
            title={this.props.articles[0].title}
            tag={this.props.articles[0].tag}
            summary={this.props.articles[0].summary}
          />
        </div>
      </div>
    );
  }
}

export default PersonalHome;
