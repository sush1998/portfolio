import React, { useEffect, useState } from 'react';

import customProjects from '../data/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);

const sortedCustomProjects = [...customProjects].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  

  useEffect(() => {
    fetch('https://api.github.com/users/sush1998/repos')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(repo => !repo.fork && repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setGithubRepos(sorted);
      });
  }, []);
  

  return (
    <section id="projects" style={styles.section}>

      <h2 style={styles.heading}>💻 Projects</h2>
      <div style={styles.grid}>
        {githubRepos.map(repo => (
          <div key={repo.id} style={styles.card}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>

            {/* Tech Stack Tags */}
            <div style={styles.tagWrapper}>
              {repo.topics?.map((topic, i) => (
                <span key={i} style={styles.tag}>{topic}</span>
              ))}
            </div>

            <p style={styles.date}>
              🕒 Updated on {new Date(repo.updated_at).toLocaleDateString()}
            </p>

            {/* Buttons */}
            <div style={styles.buttonGroup}>
              <a href={repo.html_url} target="_blank" rel="noreferrer" style={styles.button}>
                <FaGithub style={styles.icon} /> GitHub
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer" style={styles.button}>
                  <FaExternalLinkAlt style={styles.icon} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.heading, marginTop: '3rem' }}>📦 Other Projects</h2>
        <div style={styles.grid}>
        {sortedCustomProjects.map((proj, i) => (
            <div key={i} style={styles.card}>
            <img src={proj.image} alt={proj.title} style={styles.thumbnail} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            {/* Tech tags */}
            <div style={styles.tagWrapper}>
                {proj.tech.map((t, i) => (
                <span key={i} style={styles.tag}>{t}</span>
                ))}
            </div>

            {/* Date */}
            <p style={styles.date}>
                🗓️ {new Date(proj.date).toLocaleDateString()}
            </p>

            {/* Buttons */}
            <div style={styles.buttonGroup}>
                <a href={proj.link} target="_blank" rel="noreferrer" style={styles.button}>
                <FaGithub style={styles.icon} /> GitHub
                </a>
                {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer" style={styles.button}>
                    <FaExternalLinkAlt style={styles.icon} /> Live
                </a>
                )}
            </div>
            </div>
        ))}
        </div>

    </section>
  );
};

const styles = {
  section: { padding: '4rem 2rem' ,marginBottom: '4.5rem', },
  heading: { fontSize: '2rem', marginBottom: '1rem' },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  card: {
    flex: '1 1 300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
  },
  tagWrapper: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  tag: {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '0.75rem',
    padding: '0.3rem 0.6rem',
    borderRadius: '12px',
    marginRight: '0.5rem',
    marginBottom: '0.4rem',
  },
  buttonGroup: {
    marginTop: '1rem',
    display: 'flex',
    gap: '0.5rem',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  icon: {
    fontSize: '1rem',
  },
  date: {
    fontSize: '0.75rem',
    color: '#666',
    marginTop: '0.5rem',
  },
  thumbnail: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '0.75rem'
  },
};

export default Projects;