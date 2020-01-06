import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const siteQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                author
                siteUrl
            }
        }
    }
`;

export default props => (
    <StaticQuery
        query={siteQuery}
        render={data => (
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title={props.pageTitle || data.site.siteMetadata.title}
                titleTemplate={props.pageTitle && `%s | ${data.site.siteMetadata.title}`}
                meta={[
                    { name: 'description', content: props.description },
                    { name: 'keywords', content: props.keywords },
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:creator', content: data.site.siteMetadata.author },
                    { name: 'twitter:title', content: props.pageTitle },
                    { name: 'twitter:description', content: props.description },
                    { property: 'og:title', content: props.pageTitle },
                    { property: 'og:description', content: props.description },
                    { property: 'og:type', content: 'website' },
                    { property: 'og:url', content: data.site.siteMetadata.siteUrl },
                    // { property: 'og:image', content: `${data.site.siteMetadata.siteUrl}${ogImage}` },
                    { property: 'og:image:alt', content: props.description },
                    { property: 'og:image:type', content: 'image/jpg' },
                    { property: 'og:image:width', content: '1365' },
                    { property: 'og:image:height', content: '1365' },
                ]}
            />
        )}>

    </StaticQuery>
)