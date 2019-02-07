import gql from "graphql-tag";
import {GQLArticle, GQLResolver, MutationToChangeTitleOfArticleArgs} from "./schema";

export const articleFragment = gql`
    fragment articleFragment on Article {
        id
        title
        content
    }
`;

interface ITypename {
    __typename: string
}

export const resolvers: GQLResolver = {
    Query: {
        article: (_: any, args: {}, {getCacheKey, cache}: any): GQLArticle => {
            const id = getCacheKey({__typename: 'Query', id: 1});
            const article = cache.readFragment({fragment: articleFragment, id}, true);
            return article || defaults.article;
        }
    },
    Mutation: {
        changeTitleOfArticle: (_: any, variables: MutationToChangeTitleOfArticleArgs, {cache, getCacheKey}: any): string => {
            const id = getCacheKey({__typename: 'Article', id: 1});
            const article: any = cache.readFragment({fragment: articleFragment, id});
            cache.writeData({
                id,
                data: {
                    ...article,
                    title: variables.title
                }
            });
            return variables.title;
        }
    }
};

export interface IDefaultValues {
    article: GQLArticle & ITypename // fixme: should be removed
}

export const defaults: IDefaultValues = {
    article: {
        __typename: "Article",
        id: 1,
        title: "",
        content: "",
    }
};
