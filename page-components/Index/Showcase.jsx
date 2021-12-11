import styles from './Showcase.module.css';
import Image from 'next/image';
import logo from '../../assets/logo.png';

const Showcase = () => {

  return (
    <div className={styles.bg}>
      <div className={styles.logoDiv}>
        <Image src={logo} className />
        <h1>Public Feed</h1>
      </div>
    </div>
  )
}

export default Showcase;