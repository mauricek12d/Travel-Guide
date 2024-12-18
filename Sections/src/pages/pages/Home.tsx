import React from 'react';
import Destinations from '../pages/Destinations';
import styles from '../Home.module.css';

const Home: React.FC = () => {
  return (
    <main>
      <section className={styles.hero}>
      <h1>Explore New Jersey's Shores and Camping Grounds</h1>
      <p>
        New Jersey is home to some of the most beautiful beaches and camping
        grounds in the country. Explore the best destinations to visit in the
        Garden State. 
      </p>
      <button>Explore Destinations</button>
    </section>

    <section className={styles.featured}>
      <h2>Featured Destinations</h2>
      <Destinations />
    </section>

      <section className={styles.testimonial}>
        <h2>What Travelers Are Saying</h2>
        <div>
          <blockquote>
            <p>
            We have been going to Cape May, NJ for over 30 years or more. 
            We love the Victorian Motel which is just at the end of the Victorian Mall (across from Congress Hall). 
            It is close to the beautiful homes which we take walks to see.
            </p>
          </blockquote>
          <cite>Bev P</cite>
        </div>
        <div>
          <blockquote>
            <p>
            High Point has Gorgeous scenery with a Lovely little spot to picnic when it’s a quiet day. 
            We picnicked by the beach. Water was clear and cool!
            </p>
          </blockquote>
            <cite>Jane Martians</cite>
          </div>
        </section>
    </main>
  );
};

export default Home;
