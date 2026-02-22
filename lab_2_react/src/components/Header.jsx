export default function Header({ name, position, city, socials }) {
    return (
      <header>
        <h1>{name}</h1>
        <p>{position}</p>
        <p><strong>City:</strong> {city}</p>
        <nav>
          <ul>
            {socials.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }