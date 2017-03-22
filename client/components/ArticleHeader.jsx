import React from 'react';

class ArticleHeader extends React.Component {
  render() {
    return (
      <div className="articleHeaderContainer">
        <section style={{ backgroundColor: this.props.color }} className="articleHeaderTitle">
          <h2>{this.props.title}</h2>
        </section>
      </div>
    )
  }
}

export default ArticleHeader;
