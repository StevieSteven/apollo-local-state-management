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

type Response = {article: GQLArticle};

type ChildProps = ChildDataProps<{}, Response, {}>;

export const Title = graphql<{}, Response, {}, ChildProps >(titleQuery)(TitleComponent);
