import Styles from './event.module.css';

function EventCard({ title, description,  image = '' ,link}) {
  return (
    <a href={link} >
    <div style={{ backgroundImage: `url(${image})` }} className={Styles.card}>
    
      <div className={Styles.cardBody}>
     
        <h2 className={Styles.cardTitle}>{title}</h2>
     
   
        <p>{description}</p>
      
      </div>
    </div>
    </a>
  );
}

export default EventCard;
