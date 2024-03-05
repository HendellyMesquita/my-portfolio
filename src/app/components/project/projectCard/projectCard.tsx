import React from 'react';
import PropTypes from 'prop-types';
import './projectCard.scss'

interface DataShape {
  title: string;
  description: string;
  thumbnail: string;
}

interface ProjectCardProps {
  data: DataShape;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const { title, description, thumbnail } = data;

  return (
    <section className="project_card">
      <img src={thumbnail} alt="proj" className="card__proj" />
      <div className="card__info">
        <h2 className="card__title">{title}</h2>
        <h2 className="card__descripton">{description}</h2>
      </div>
    </section>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
