import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO';

export default props => (
    <Layout>
        <SEO pageTitle='Blog' description='Blog using React and Gatsby' keywords='React, JS, Gatsby' />
        <h1>Projects</h1>
        <hr />
        <p>
            Testes testes testes testes testes testes testestestse
            {' '}
            <a href="https://github.com/joaohhenriq">
                Github
            </a>
        </p>
        <ul>
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
    </Layout>
)