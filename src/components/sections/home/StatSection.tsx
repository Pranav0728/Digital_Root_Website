'use client';

import './StatSection.scss';

const StatSection = () => {
  return (
    <section className="stats" aria-label="our stats">
      <div className="container">
        <ul
          className="stats-card has-bg-image"
          style={{ backgroundImage: "url('./assets/images/stats-bg.png')" }}
        >
          <li>
            <p className="card-text">
              <span className="h1">50+</span>

              <span className="span">Completed Projects</span>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">100+</span>

              <span className="span">Happy Customers</span>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">24/7</span>
              <span className="span">Support</span>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">20+</span>

              <span className="span">Awards Won</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StatSection;
