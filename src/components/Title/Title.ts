import gql from "graphql-tag";
import {ChildDataProps, graphql} from "react-apollo";
import {TitleComponent} from "./TitleComponent";
import {GQLArticle} from "../../graphql/schema";

const titleQuery = gql`
    query ArticleQuery  {
        article @client {
            id
            title
        }
    }
`;

interface IResponse {
  article: GQLArticle;
}

type ChildProps = ChildDataProps<{}, IResponse, {}>;

export const Title = graphql<{}, IResponse, {}, ChildProps>(titleQuery)(TitleComponent);
