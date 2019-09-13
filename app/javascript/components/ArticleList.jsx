import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArticleList extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch("api/articles")
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data });
      })
      .catch(error => console.log("error", error));
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <div key={article.id}>
              <h2>
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </h2>
              {article.content}
              <hr />
            </div>
          );
        })}
        <Link to="/articles/new" className="btn btn-outline-primary">
          Create Article
        </Link>
      </div>
    );
  }
}

export default ArticleList;
