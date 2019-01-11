export const typeDefs = `

# schema {
#     query: Query
#     # mutation: Mutation
# }

type Article {
  id: ID!
  title: String
  content: String
}

type Query {
  article: Article
}

type Mutation {
  changeTitleOfArticle(title: String): String
}

`;
