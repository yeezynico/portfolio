import React, { useState, useEffect } from 'react';

const Works = () => {
  const [clients, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/clients?populate=logo')
      .then(response => response.json())
      .then(data => setProjects(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(clients);

  return (
    <div>
      <p>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
      <ul>
        {clients.map(project => (
          <li key={project.id}>
            <h3>{project.attributes.nom}</h3>
            <p>{project.attributes.description}</p>
            <img
              src={`http://localhost:1337${project.attributes.logo.data.attributes.url}`}
              alt={project.attributes.logo.data.attributes.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Works;
