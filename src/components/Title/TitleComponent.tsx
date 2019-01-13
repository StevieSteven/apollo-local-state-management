import React from "react";
import {DataValue} from "react-apollo";
import {GQLArticle} from "../../graphql/schema";

export interface ITitleComponentDataProps {
    data: DataValue<{
        article: GQLArticle
    }>
}

export const TitleComponent = (props: ITitleComponentDataProps) => {
    const {data} = props;

    if (data.loading) {
        return <div> loading </div>
    }
    const article = data.article;

    return (
        <div>
            Title Output: {article ? article.title : "no article"}
        </div>
    )
};
