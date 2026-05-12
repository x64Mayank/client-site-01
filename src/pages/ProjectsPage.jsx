import React from 'react';
import PageHero from '../components/PageHero';
import ProjectsGrid from '../sections/ProjectsGrid';
import Footer from '../sections/Footer';

const ProjectsPage = () => {
  return (
    <main>
      <PageHero
        backgroundImage="/hero-2.webp"
        label="OUR PROJECTS"
        heading={
          <>
            Outstanding Projects <br className="hidden md:block" />
            We Successfully Implemented
          </>
        }
        breadcrumbLabel="ALFA FACADE PROJECTS"
      />
      <ProjectsGrid />
      <Footer />
    </main>
  );
};

export default ProjectsPage;
