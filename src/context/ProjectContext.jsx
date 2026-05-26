import React, { createContext, useContext, useState, useEffect } from 'react';
import { client, urlFor } from '../lib/sanity';
import { PROJECTS as fallbackProjects, CATEGORIES } from '../data/projectsData';

const ProjectContext = createContext();

export const useProjects = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(fallbackProjects);
  const [categories, setCategories] = useState(CATEGORIES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(_createdAt asc) {
          _id,
          title,
          fullCategory,
          location,
          year,
          status,
          images
        }`;
        
        const sanityProjects = await client.fetch(query);

        if (sanityProjects && sanityProjects.length > 0) {
          // Derive short category from fullCategory with predefined exact mapping
          const deriveShortCategory = (full) => {
            if (!full) return '';
            const mapping = {
              "RESIDENTIAL PROJECTS": "Residential",
              "COMMERCIAL COMPLEXES": "Commercial",
              "CORPORATE OFFICES": "Corporate",
              "HOTELS & HOSPITALITY": "Hospitality",
              "HOSPITALS & INSTITUTIONS": "Institution",
              "RETAIL & SHOPPING CENTERS": "Retail"
            };
            return mapping[full] || full;
          };

          const formattedProjects = sanityProjects.map((proj) => ({
            ...proj,
            id: proj._id,
            category: proj.category || deriveShortCategory(proj.fullCategory),
            // Use the first image as the main cover img if it exists
            img: proj.images && proj.images[0] ? urlFor(proj.images[0]).url() : '',
            // Map the rest of the images
            images: proj.images ? proj.images.map(img => urlFor(img).url()) : [],
            status: proj.status || 'Completed' // Default status
          }));
          
          setProjects(formattedProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects from Sanity, using fallback data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, categories, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};
