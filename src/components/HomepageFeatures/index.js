import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="/docs/My Writing/White Paper"> My White Paper</a>,
    description: (
      <>
        Interested in Air Fryers, and want to learn how they could lead you towards a healthier lifestyle? Check out my White Paper
        highlighting the positive contributions air fryers have provided our current culinary society.
      </>
    ),
  },
  {
    title: <a href="docs/My Writing/Manuscript"> My Manuscript Compilation</a>,
    description: (
      <>
        As an undergraduate student, I was tasked with creating a new compilation of witnesses, making my own
        edition of the poetry of Wilfred Owen.
      </>
    ),
  },
  {
    title:<a href="docs/My Writing/Dissertation"> Master's Dissertation</a>,
    description: (
      <>
        Prior to graduating from my Master's program, I was tasked with creating, compiling, and writing a completely
        original thesis. With a passion for Dr. Seuss, I decided to naviagte his hilarious works in comparison to
        Edward Lear, typically refered to as the Grandfather of nonsense literature.
      </>
    ),
  },
];

function Feature({ title, description, scale, width}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
