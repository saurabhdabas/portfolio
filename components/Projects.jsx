import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-screen dark:bg-black p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-red-500 dark:text-red-500 text-xl tracking-widest uppercase mt-10'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid lg:grid-cols-3 gap-8 pb-10'>
          <Project
            title='Storybook'
            backgroundImg="/assets/storybook.png"
            projectUrl='https://github.com/saurabhdabas/storybook-Built-in-Firebase-React-MUI'
            tech='React|Firebase|MUI'
          />
          <Project
            title='Krypto'
            backgroundImg="/assets/krypto.png"
            projectUrl='https://github.com/saurabhdabas/Krypto'
            tech='React|PSQL|MUI|Chart.js'
          />
          <Project
            title="Who want's to be millionaire"
            backgroundImg="/assets/quiz.png"
            projectUrl='https://github.com/saurabhdabas/WhoWantsToBeMillionarie-Built-in-Typescript'
            tech='Typescript'
          />
          <Project
            title='Healthify'
            backgroundImg="/assets/healthify.png"
            projectUrl='https://github.com/saurabhdabas/healthify--Built-in-React-MUI'
            tech='React|MUI'
          />
          <Project
            title='Interview Scheduler'
            backgroundImg="/assets/interview.png"
            projectUrl='https://github.com/saurabhdabas/interview-scheduler'
            tech='React|Jest|Storybook|Cypress'
          />
          <Project
            title='Tweeter'
            backgroundImg="/assets/tweeter.png"
            projectUrl='https://github.com/saurabhdabas/tweetagram'
            tech='JS|JQuery|Ajax'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
