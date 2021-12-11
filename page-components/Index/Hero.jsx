import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';
import Image from 'next/image'
import logo from '../../assets/logo.png';


const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <Image src={logo} />
          <span>Public <span style={{ 'color': '#F9B924' }}>Feed</span></span>
        </h1>
        <p className={styles.subtitle}>
          Welcome to MBS Public Feed. Please feel free to post and share your opinion, feedback and ideas.
        </p>
        <Container justifyContent="center" className={styles.buttons}>

          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Feed</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https:/https://www.businessschool.mv/home/"
              type="secondary"
              className={styles.button}
            >
              MBS Home Page
            </ButtonLink>
          </Container>
        </Container>
      </div>
      <div className={styles.bg}>
        helo
      </div>
    </Wrapper >
  );
};

export default Hero;
