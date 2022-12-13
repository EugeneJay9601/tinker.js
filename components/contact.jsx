import styles from "./contact.module.css";

const Contact  = () => {
    return (
        <div className={styles.container}>
            <div className={styles.label}>
            <h2>Contact Us</h2></div>
            <div className={styles.icon}>
                <img src="/twitter_icon.png" />
                <img src="/instagram_icon.png" />
                <img src="/gmail_icon.png" />
            </div> 
            <div className={styles.account}>
                <a href="http://twitter.com">@Tinkers</a>
                <a href="http://instagram.com">@Tinkers</a>
                <a href="http://gmail.com">@Tinker@gmail.com</a>
            </div>
        </div>
    )
}
export default Contact;