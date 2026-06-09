'use client';

import Image from 'next/image';

import './ProjectSection.scss';

const ProjectSection = () => {
  const projects = [
    {
      image: '/assets/images/ourproject/pictuote.png',
      title: 'Pictuote',
      description:
        'A social media tool that helps users create beautiful quote images instantly with just one click.',
      category: 'SaaS Product',
    },
    {
      image: '/assets/images/ourproject/achievemap.png',
      title: 'AchieveMap',
      description:
        'A self-growth platform that helps people track goals, build habits, and stay focused on continuous learning.',
      category: 'SaaS Product',
    },
    {
      image: '/assets/images/ourproject/coderhabit.png',
      title: 'Coder Habit',
      description:
        'A habit tracker built specifically for developers to improve consistency, productivity, and coding discipline.',
      category: 'Developer Tool',
    },
    {
      image: '/assets/images/ourproject/careerkundli.png',
      title: 'CareerKundli',
      description:
        'A career guidance platform that helps students and professionals discover the right career path.',
      category: 'Career Platform',
    },
    {
      image: '/assets/images/ourproject/libertas.png',
      title: 'Libertas',
      description:
        'Built a modern and responsive IT solutions website for a client, focusing on performance, design, and user experience.',
      category: 'Client Project',
    },
  ];
  return (
    <section className="section project" aria-labelledby="project-label">
      <div className="container">
        <p className="section-subtitle">
          Our Projects
        </p>

        <h2 className="h2 section-title">
          Products and websites we&apos;ve built to solve real-world problems.
        </h2>


        <ul className="grid-list">
          {projects.map((project) => (
            <li key={project.title}>
              <div className="project-card">
                <figure
                  className="card-banner img-holder"
                  style={
                    {
                      '--width': '560',
                      '--height': '350',
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={project.image}
                    width={560}
                    height={350}
                    alt={project.title}
                    className="img-cover"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3">
                    <span className="card-title">{project.title}</span>
                  </h3>

                  <p className="card-text">
                    {project.description}
                  </p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon
                        name="document-text-outline"
                        aria-hidden={true}
                      />

                      <span className="meta-text">
                        {project.category}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
