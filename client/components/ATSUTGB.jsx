import React from 'react';
import Article from './Article.jsx';
import ArticleHeader from './ArticleHeader.jsx';

class ATSUTGB extends React.Component {
  render() {
    return (
      <div>
        <ArticleHeader
          title={this.props.articles[1].title}
          color={this.props.articles[1].color}
        />
        <Article
          article={this.props.articles[1].text}
          date={this.props.articles[1].date}
          tag={this.props.articles[1].tag}
          color={this.props.articles[1].color}
        />
      </div>
    );
  }
}

export default ATSUTGB;
