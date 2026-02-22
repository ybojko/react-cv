import React from 'react';

export default function Languages({ languages }) {
  return (
    <section>
      <h2>Languages</h2>
      <dl>
        {languages.map((item, index) => (
          <React.Fragment key={index}>
            <dt>{item.lang}</dt>
            <dd>{item.level}</dd>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}