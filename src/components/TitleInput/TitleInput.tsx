import gql from 'graphql-tag';
import {ChildMutateProps, graphql} from "react-apollo";
import {ITitleInputComponentDispatchProps, TitleInputComponent} from "./TitleInputComponent";
import {MutationToChangeTitleOfArticleArgs} from "../../graphql/schema";
import React from "react";

const changeTitleQuery = gql`
    mutation ChangeTitleOfArticle($title: String) {
        changeTitleOfArticle(title: $title) @client
    }
`;


interface IResponse {
    changeTitleOfArticle: string
}

type ChildProps = ChildMutateProps<any, IResponse, MutationToChangeTitleOfArticleArgs>; // fixme: remove first any

const propsFunction = (input: ChildProps): ITitleInputComponentDispatchProps => {
    return {
        changeTitleOfArticle: (value: string) => {
            input.changeTitleOfArticle({
                variables: {
                    title: value
                }
            })
        }
    }
};

const operationProps = {
    name: "changeTitleOfArticle",
    props: propsFunction,
};

export const TitleInput = graphql<{}, {}, MutationToChangeTitleOfArticleArgs, ChildProps>(changeTitleQuery, operationProps)(TitleInputComponent);
