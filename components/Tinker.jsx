import Button from "./Button";
import styles from "./Tinker.module.css";
export default function Tinker({ heading1, pAddress }) {
  return (
    
    <div className={styles.container}style={{ backgroundImage: "url(/homebackground.jpg)" }}>
        <div className={styles.infobutton}>
            <Button variant="secondary">About us</Button>
            <Button variant="seconddary">Contact us</Button>

        </div>
       
        <div className={styles.text}>
             <h1>{heading1}</h1>
             <p>{pAddress}</p>
        </div>
    </div>
  );
};