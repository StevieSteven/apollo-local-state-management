import gql from 'graphql-tag';
import {ChildDataProps, graphql} from "react-apollo";
import {ITitleInputComponentDispatchProps, TitleInputComponent} from "./TitleInputComponent";
import {GQLArticle, MutationToChangeTitleOfArticleArgs} from "../../graphql/schema";
import React from "react";

const changeTitleQuery = gql`
    mutation ChangeTitleOfArticle($title: String) {
        changeTitleOfArticle(title: $title) @client
    }
`;


type Response = {changeTitleOfArticle: string};

type ChildProps = ChildDataProps<{}, Response, {title: string}>;

const TitleInputConnector = graphql<{}, {title: string}, MutationToChangeTitleOfArticleArgs, ChildProps>(changeTitleQuery, {
    name: "changeTitleOfArticle",
    props: ({data, ownProps}) => {
      return data;
    },
});

export const TitleInput = TitleInputConnector((props: ITitleInputComponentDispatchProps) => {
   console.log("props: ", props);
   return <TitleInputComponent changeTitleOfArticle={props.changeTitleOfArticle}/>
});

// export const TitleInput = graphql<{}, {title:string}, MutationToChangeTitleOfArticleArgs, ChildProps>(changeTitleQuery)(TitleInputComponent); // fixme: remove casting
