import React, {Component} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

class TitleComponent extends Component<any, any> {

  public render() {
    const {data} = this.props;

    if (data.loading) {
      return <div> loading </div>
    }
    const article = data.article;

    return (
        <div>
          Title Output: {article ? article.title : "no article"}
        </div>
    )
  }
}

const titleQuery = gql`
    query ArticleQuery  {
        article @client {
            id
            title
        }
    }
`;

export const Title = graphql(titleQuery)(TitleComponent);