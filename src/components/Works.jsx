import React, { useState, useEffect } from 'react';

const Works = () => {
  const [clients, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/clients?populate=logo')
      .then(response => response.json())
      .then(data => setProjects(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <p className='center2'>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
      <div className='card_item'>
        {clients.map(project => (
          <div key={project.id} className="project_card">
            <img className='size_img' src={`http://localhost:1337${project.attributes.logo.data.attributes.url}`} alt={project.attributes.logo.data.attributes.name} />
            <h3>{project.attributes.nom}</h3>
            <p>{project.attributes.description}</p>

            <button className="btn" type="button">
              <strong><a href={project.attributes.URL}>CODE</a></strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
