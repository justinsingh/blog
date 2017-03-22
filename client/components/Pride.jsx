import React from 'react';
import Article from './Article.jsx';
import ArticleHeader from './ArticleHeader.jsx';

class Pride extends React.Component {
  render() {
    return (
      <div>
        <ArticleHeader
          title={this.props.articles[0].title}
          color={this.props.articles[0].color}
        />
        <Article
          article={this.props.articles[0].text}
          date={this.props.articles[0].date}
          tag={this.props.articles[0].tag}
          color={this.props.articles[0].color}
        />
      </div>
    );
  }
}

export default Pride;
