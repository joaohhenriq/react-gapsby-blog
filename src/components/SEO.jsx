import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const siteQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default props => (
    <StaticQuery
        query={siteQuery}
        render={data => (
            <Helmet title={props.pageTitle || data.site.siteMetadata.title}
                titleTemplate={props.pageTitle && `%s | ${data.site.siteMetadata.title}`} />
        )}>

    </StaticQuery>
)