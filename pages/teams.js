import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { menter,Director, Core,Team2k22 } from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Our Amazing Team ✨</title>
        <meta
          name="description"
          content="Teams of HnCC (Hackathon & Coding Club), BIT Sindri, Dhanbad"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Team of HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Team" />
          <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3>
        </div>
        <h2 className={Styles.postHead}>Mentor</h2>
        <div className={Styles.cardContainer}>
          {menter.slice(0, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
              />
            );
          })}
        </div>

       
        <h2 className={Styles.postHead}>Mentor</h2>
        <div className={Styles.cardContainer}>
          {Director.slice(0, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                socials={item.url}
              />

            );
          })}
        </div>
        
        <h2 className={Styles.postHead}>Core Team</h2>
        <div className={Styles.cardContainer}>
          {Core.slice(0, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.pos}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                socials={item.url}
              />

            );
          })}
        </div>
          
        <h2 className={Styles.postHead}> Team 2K23</h2>
        <div className={Styles.cardContainer}>
          {Team2k22.slice(0, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.pos}
                pos={item.pos}
                imageSrc={item.picture}
                lazyImageSrc={item.picture}
                socials={item.url}
              />

            );
          })}
        </div>

      </section>
    </Screen>
  );
}

export default Teams;
