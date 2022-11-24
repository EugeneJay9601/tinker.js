import Button from "./Button";
import styles from "./navbar.module.css";
import { FaArrowCircleDown, FaArrowDown, FaShopify } from 'react-icons/fa';

const navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.logo}>Tinker</h1>
      </div>
      <div className={styles.Menu}>
      <h2 className={styles.menu}>Menu<FaArrowCircleDown/></h2>
      </div>
      <div className="searchbar">
        <form>
          <input className={styles.search} type="text" name="search" placeholder="Find books here"/>
        </form>
      </div>
        <h1 className={styles.shopify}><FaShopify /></h1>
      <div className={styles.navbarActions}>
        <Button variant="secondary">Sign in</Button>
        <Button variant="primary">Create Account</Button>
      </div>
    </div>
  );
};
export default navbar;