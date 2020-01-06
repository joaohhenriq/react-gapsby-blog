import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO';

export default props => (
    <Layout>
        <SEO pageTitle='Blog' description='Blog using React and Gatsby' keywords='React, JS, Gatsby' />
        <h1 className='title has-text-centered'>Projects</h1>
        <hr />
        <section className='section is-size-5-desktop is-size-6-touch'>
            <p className='has-text-centered'>
                Some of my projects, see more on my
            {' '}
                <a href="https://github.com/joaohhenriq">
                    Github
            </a>
            </p>
            <ul className='has-text-centered'>
                <li>
                    <a href="https://github.com/joaohhenriq/node-mymoneyapp-backend">
                        My money app - backend
                </a>
                </li>
                <li>
                    <a href="https://github.com/joaohhenriq/react-mymoneyapp-frontend">
                        My money app - frontend
                </a>
                </li>
                <li>
                    <a href="https://github.com/joaohhenriq/flutter-chat-app">
                        Chat app
                </a>
                </li>
            </ul>
        </section>
    </Layout>
)