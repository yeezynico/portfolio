// ProjectCard.js
import React from 'react';

const ProjectCard = ({ category }) => {
  let projects = [];
  if (category === "Exercices") {
    projects = ["Video Game informations", "The notepad", "React Router"];
  } else if (category === "Case Study") {
    projects = ["Nike, the new website", "Paypal, how their data are stored"];
  } else if (category === "Concret Case") {
    projects = ["My grandparent bridge club website", "My friend bakery"];
  }

  return (
    <div>
      <h3>{category}</h3>
      {projects.map((project, index) => (
        <div key={index}>{project}</div>
      ))}
    </div>
  );
}

export default ProjectCard;
