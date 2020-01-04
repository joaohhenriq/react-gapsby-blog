import React from 'react';

import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <h1>João Henrique</h1>
    <h2>Full Stack Developer</h2>
    <section>
      <h4>Hello, I'm João Henrique</h4>
      <p>
        I'm a full stack developer, completely in love with Flutter. But recently I've focused
        all my avaliable time studying React and Node JS.
      </p>
      <p>
        Check my projects
        {' '}
        <a href='/projects'>
          here
        </a>
        !
      </p>
    </section>
  </Layout>
);

export default Home;
