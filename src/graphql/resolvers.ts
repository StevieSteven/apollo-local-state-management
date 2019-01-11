import gql from "graphql-tag";

export const articleFragment = gql`
    fragment articleFragment on Article {
        id
        title
        content
    }
`;

export const resolvers = {
  Query: {
    article: (obj: any, args: any, {getCacheKey, cache}: any, info: any) => {
      const id = getCacheKey({__typename: 'Query', id: 1});
      const article = cache.readFragment({fragment: articleFragment, id});
      return article || defaults.article;
    }
  },
  Mutation: {
    changeTitleOfArticle: (_: any, variables: any, {cache, getCacheKey}: any) => {
      const id = getCacheKey({__typename: 'Article', id: 1});
      const article = cache.readFragment({fragment: articleFragment, id});
      cache.writeData({
        id: id,
        data: {
          ...article,
          title: variables.title
        }
      });
      return variables.title;
    }
  }
};

export const defaults = {
  article: {
    __typename: "Article",
    id: 1,
    title: "",
    // content: "",
  }
};
