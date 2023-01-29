import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/V1/about/About';
import { Contact } from '../components/V2/contact/Contact';
import { Header } from '../components/V2/header/Header';
import { Hero } from '../components/V2/hero/Hero';
import { Project } from '../components/V2/project/Project';
import { Testimonial } from '../components/V2/testimonial/Testimonial';

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Olaiya Basit</title>
        <meta name="description" content="olaiya basit Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#1E1E1E]">
        <Header />
        <Hero />
        <Project />
        <Testimonial />
        <Contact />
      </div>
      {/* <About />  */}
    </div>
  );
};

export default Home;
