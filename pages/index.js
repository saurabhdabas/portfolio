import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import { useTheme } from 'next-themes';

export default function Home() {
  const {theme, setTheme} = useTheme();

  return (
    <div>
      <Head>
        <title>Saurabh | Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Main theme={theme} setTheme={setTheme}/>
      <About theme={theme} setTheme={setTheme}/>
      <Skills theme={theme} setTheme={setTheme}/>
      <Projects theme={theme} setTheme={setTheme}/>
      <Contact theme={theme} setTheme={setTheme}/>
    </div>
  )
}
