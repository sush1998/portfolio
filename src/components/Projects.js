import React, { useEffect, useState } from 'react';
import customProjects from '../data/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import theme from '../styles/theme';

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);

  const sortedCustomProjects = [...customProjects]
    .map(p => ({ ...p, source: "custom" }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    fetch('https://api.github.com/users/sush1998/repos')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(repo => repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description,
            github: repo.html_url,
            live: repo.homepage || '',
            topics: repo.topics || [],
            updated_at: repo.updated_at,
            source: 'github'
          }));
        setGithubRepos(sorted);
      });
  }, []);

  return (
    <section id="projects" style={styles.section}>
      <p style={styles.heading}>💻 Projects</p>

      <div style={styles.grid}>
        {sortedCustomProjects.map((proj, i) => (
          <div key={i} style={styles.card}>
            {proj.image && <img src={proj.image} alt={proj.title} style={styles.thumbnail} />}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div style={styles.tagWrapper}>
              {proj.techStack?.map((t, i) => (
                <span key={i} style={styles.tag}>{t}</span>
              ))}
            </div>
            <p style={styles.date}>🗓️ {new Date(proj.date).toLocaleDateString()}</p>
            <div style={styles.buttonGroup}>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer" style={styles.button}>
                  <FaGithub style={styles.icon} /> GitHub
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer" style={styles.button}>
                  <FaExternalLinkAlt style={styles.icon} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {githubRepos.length > 0 && (
        <>
          <p style={styles.heading}>🌐 GitHub Repositories</p>
          <div style={styles.grid}>
            {githubRepos.map((repo) => (
              <div key={repo.id} style={styles.card}>
                <h3>{repo.title}</h3>
                <p>{repo.description}</p>
                <div style={styles.tagWrapper}>
                  {repo.topics?.map((topic, i) => (
                    <span key={i} style={styles.tag}>{topic}</span>
                  ))}
                </div>
                <p style={styles.date}>🕒 Updated on {new Date(repo.updated_at).toLocaleDateString()}</p>
                <div style={styles.buttonGroup}>
                  <a href={repo.github} target="_blank" rel="noreferrer" style={styles.button}>
                    <FaGithub style={styles.icon} /> GitHub
                  </a>
                  {repo.live && (
                    <a href={repo.live} target="_blank" rel="noreferrer" style={styles.button}>
                      <FaExternalLinkAlt style={styles.icon} /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

const styles = {
  section: {
    padding:'1rem',
    background: 'linear-gradient(135deg, #F4F4F9 0%, #E6F7FB 100%)',
    color: theme.colors.text,
  },
  heading: {
    fontSize: theme.fontSize.heading,
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing.gapLarge,
    justifyContent: 'center',
  },
  card: {
    flex: '1 1 300px',
    backgroundColor: theme.colors.card,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.cardPadding,
    boxShadow: theme.shadow.medium,
    color: theme.colors.text,
  },
  tagWrapper: {
    marginTop: theme.spacing.gapSmall,
    marginBottom: theme.spacing.gapSmall,
  },
  tag: {
    display: 'inline-block',
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    fontSize: theme.fontSize.small,
    padding: '0.3rem 0.6rem',
    borderRadius: '12px',
    marginRight: '0.5rem',
    marginBottom: '0.4rem',
  },
  buttonGroup: {
    marginTop: theme.spacing.gapMedium,
    display: 'flex',
    gap: theme.spacing.gapSmall,
    flexWrap: 'wrap',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    padding: '0.5rem 1rem',
    borderRadius: theme.borderRadius.small,
    textDecoration: 'none',
    fontSize: theme.fontSize.small,
    transition: theme.transitions.default,
  },
  icon: {
    fontSize: '1rem',
  },
  date: {
    fontSize: theme.fontSize.small,
    color: theme.colors.lightText,
    marginTop: '0.5rem',
  },
  thumbnail: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: theme.borderRadius.small,
    marginBottom: '0.75rem',
  },
};

export default Projects;
