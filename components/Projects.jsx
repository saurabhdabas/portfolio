import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div id='projects' className='w-full dark:bg-black'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-red-500 dark:text-red-500 text-xl tracking-widest uppercase mt-12'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <Project
            title='Storybook'
            backgroundImg="/../public/assets/storybook.png"
            projectUrl='https://github.com/saurabhdabas/storybook-Built-in-Firebase-React-MUI'
            tech='React|Firebase|MUI'
          />
          <Project
            title='Krypto'
            backgroundImg="/../public/assets/krypto.png"
            projectUrl='https://github.com/saurabhdabas/Krypto'
            tech='React JS'
          />
          <Project
            title="Who want's to be millionaire"
            backgroundImg="/../public/assets/quiz.png"
            projectUrl='https://github.com/saurabhdabas/WhoWantsToBeMillionarie-Built-in-Typescript'
            tech='Typescript'
          />
          <Project
            title='Healthify'
            backgroundImg="/../public/assets/healthify.png"
            projectUrl='https://github.com/saurabhdabas/healthify--Built-in-React-MUI'
            tech='React|MUI'
          />
          <Project
            title='Interview Scheduler'
            backgroundImg="/../public/assets/interview.png"
            projectUrl='https://github.com/saurabhdabas/interview-scheduler'
            tech='React|Jest|Storybook|Cypress'
          />
          <Project
            title='Tweeter'
            backgroundImg="/../public/assets/tweeter.png"
            projectUrl='https://github.com/saurabhdabas/tweetagram'
            tech='JS|JQuery|Ajax'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
