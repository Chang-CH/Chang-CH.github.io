import styles from './s.module.scss';
import StaggerGizmo from '_components/StaggerGizmo';
import TextPage from '_components/TextPage';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { Button, Heading } from '@chakra-ui/react';

function Home() {
  return (
    <TextPage>
      <div className={styles.divCentered}>
        <StaggerGizmo />
        <div className={styles.divWrap}>
          <p className={styles.pMarginless}>Hello, i&apos;m a web developer based in Singapore!</p>
        </div>
      </div>
      <Heading borderBottom="5px solid orange" marginBlock="1rem" fontWeight="bold" size="md">
        About
      </Heading>
      <p className={styles.paragraph}>
        My name is Chuan Hao, I am a singaporean doing my final year of studies at the National University of Singapore
        (NUS). I major in computer science with a focus in database systems and cyber security, and am on track to
        graduate in May 2024. In my free time, I love to play badminton and make digital art.
      </p>
      <Heading borderBottom="5px solid orange" marginBlock="1rem" fontWeight="bold" size="md">
        Work experience
      </Heading>
      <p className={styles.paragraph}>
        I am currently an undergraduate Teaching Assistant in NUS. I have been teaching for about 2 years now, and have
        tutored modules ranging from SQL databases to Introductory programming modules. I am currently taking CS2100,
        computer organisation, as a lab TA.
      </p>
      <br></br>
      <p className={styles.paragraph}>
        I had previously interned in Shopee Singapore as a Software Engineer Intern, under the Promotion Front End team.
        There, I worked on adding batch upload capabilities for our promotion admin portal, as well as multi language
        support for our campaign media. Additionally, I developed a javascript bundle size monitoring pipeline for
        Gitlab CI, which adds tracks increases in bundle sizes for pull requests.
      </p>
      <Heading borderBottom="5px solid orange" marginBlock="1rem" fontWeight="bold" size="md">
        Get in touch
      </Heading>
      <div className={styles.divLinks}>
        <a href="https://www.linkedin.com/in/chuan-hao-c-57b096208/" className={styles.linkText}>
          <Button colorScheme="orange" variant="ghost" leftIcon={<AiOutlineLinkedin />} className={styles.buttonLink}>
            LinkedIn
          </Button>
        </a>
        <a href="https://github.com/Chang-CH" className={styles.linkText}>
          <Button colorScheme="orange" variant="ghost" leftIcon={<AiOutlineGithub />} className={styles.buttonLink}>
            @Chang-CH
          </Button>
        </a>
      </div>
    </TextPage>
  );
}

export default Home;
