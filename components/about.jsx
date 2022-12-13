import styles from "./about.module.css";


const About  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.label}>
            <h2>About Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            <div className={styles.image}>
                <img src="/image2.png" /></div>
        </div>
    )
}
export default About;