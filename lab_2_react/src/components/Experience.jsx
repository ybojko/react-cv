function ExperienceItem({ company, role, period, details }) {
    return (
      <article>
        <h3>{company}</h3>
        {role && <p><em>{role} | {period}</em></p>}
        {Array.isArray(details) ? (
          <ul>
            {details.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        ) : (
          <p>{details}</p>
        )}
      </article>
    );
  }
  
  export default function Experience({ items }) {
    return (
      <section>
        <h2>Experience</h2>
        {items.map((job, index) => (
          <ExperienceItem key={index} {...job} />
        ))}
      </section>
    );
  }