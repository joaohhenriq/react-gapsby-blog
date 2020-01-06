import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home = () => (
  <Layout>
    <SEO pageTitle='Blog' description='Blog using React and Gatsby' keywords='React, JS, Gatsby' />
    <h1 className='title has-text-centered'>João Henrique Camargo</h1>
    <h2 className='subtitle has-text-centered'>Full Stack Developer</h2>
    <section className='section content is-size-5-desktop is-size-6-touch'>
      <h4 className='title'>Hello, I'm João Henrique</h4>
      <p>
        I'm a full stack developer, completely in love with Flutter. But recently I've focused
        all my avaliable time studying React and Node JS.
      </p>
      <p>
        Check my projects
        {' '}
        <Link to='/projects'>
          here
        </Link>
        !
      </p>
    </section>
  </Layout>
);

export default Home;
