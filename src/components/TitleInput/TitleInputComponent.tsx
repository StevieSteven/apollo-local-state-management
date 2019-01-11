import React, {Component} from "react";

import gql from 'graphql-tag';
import {graphql} from "react-apollo";

class TitleInputComponent extends Component<any, any> {

  public render() {
    const {mutate} = this.props;

    const onBlur = (event: any) => {
      event.preventDefault();
      mutate({
        variables: {
          title: event.target.value
        }
      })
    };

    return (
        <div>
          Input new Title and blur to save: <input type="text" onBlur={onBlur}/>
        </div>
    )
  }
}


const ChangeTitleQuery = gql`
    mutation ChangeTitleOfArticle($title: String) {
        changeTitleOfArticle(title: $title) @client
    }
`;

export const TitleInput = graphql(ChangeTitleQuery)(TitleInputComponent);