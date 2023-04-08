import Head from 'next/head';
import EventCard from '../components/event/EventCard';
import { Event1img } from '../lib/data/EventimgData';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import Styles from '../components/event/event.module.css';


function event1img() {
  return (
    <Screen>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="HnCC or Hackathon and Coding Club is the official club of BIT Sindri that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, About HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      
      {/* // 8/04 modifyed */}
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
      <BottomGlitter text="Our Events" />
      <div className={Styles.cardContainer}>
        {Event1img.map((item,index) => {
          return (
            <EventCard
              title={item.title}
              description={item.description}
              link={item.link}
              image={item.src}
              key={`${index + item.title}`}
            />
          );
        })}
      </div>
    
      </section>
    </Screen>
  );
}

export default event1img;
