import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-screen dark:bg-black p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-10'>
        <p className='text-red-500 dark:text-red-500 text-xl tracking-widest uppercase mt-10'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid lg:grid-cols-3 gap-5 pb-10 justify-center'>
        <Project
            title='Easy Invoice'
            backgroundImg="/assets/Dashboard.png"
            projectUrl='https://github.com/saurabhdabas/easyinvoice'
            tech='React|Express.js|Psql'
          />
          <Project
            title='PyBlog'
            backgroundImg="/assets/PyBlog.png"
            projectUrl='https://github.com/saurabhdabas/PyBlog'
            tech='Python|Django'
          />
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
