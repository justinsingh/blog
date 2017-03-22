import React from 'react';
import Article from './Article.jsx';
import ArticleHeader from './ArticleHeader.jsx';

class UnderClaws extends React.Component {
  render() {
    return (
      <div>
        <ArticleHeader
          title={this.props.articles[2].title}
          color={this.props.articles[2].color}
        />
        <Article
          article={this.props.articles[2].text}
          date={this.props.articles[2].date}
          tag={this.props.articles[2].tag}
          color={this.props.articles[2].color}
        />
      </div>
    );
  }
}

export default UnderClaws;
