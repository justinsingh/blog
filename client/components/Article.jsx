import React from 'react';
import ReactMarkdown from 'react-markdown';
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

class Article extends React.Component {
  render() {
    return (
      <div className="postText">
        <div className="preArticle">
          <div className="articleDate">
            <span className="">
              {this.props.date}
            </span>
            <Link to={'/' + this.props.tag} style={{ textDecoration: 'none' }}>
              <span className="articleTag">
                <br />
                {this.props.tag}
              </span>
            </Link>
          </div>
        </div>
        <ReactMarkdown source={this.props.article} />
      </div>
    );
  }
}

export default Article;
