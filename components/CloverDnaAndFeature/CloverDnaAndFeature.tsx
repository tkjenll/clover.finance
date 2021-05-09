import React from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import styles from './CloverDNA.module.scss';
import Fees from '../../public/svg/fees.svg';
import Governance from '../../public/svg/governance.svg';
import Validation from '../../public/svg/validation.svg';
import Treasury from '../../public/svg/treasury.svg';
import Nomination from '../../public/svg/nomination.svg';
import Deployment from '../../public/svg/deployment.svg';
import Button from '../Button/Button';

const DnaAndFeatures = ({
  dnas = [],
  features = [],
  clvTokens = [],
}: {
  dnas?: {
    title: string;
    content: string;
    btnText: string;
    link: string;
  }[];
  features?: {
    title: string;
    content: string;
    btnText: string;
    link: string;
  }[];
  clvTokens?: {
    title: string;
    content: string;
  }[];
}) => {
  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  };
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.topWrapper}>
        <div
          className={cn(styles.topContent, 'wow', 'bounceInUp')}
          data-wow-duration="2s"
          data-wow-delay="0s"
        >
          <span className={styles.title}>Clover's DNA</span>
          <img
            className={styles.backImage}
            src={
              theme && theme === 'dark'
                ? '/images/clover-dna-sakura.png'
                : '/images/clover-dna.png'
            }
            alt=""
          />
          {!!inView && (
            <div className={styles.contentBox}>
              {dnas.map(dna => (
                <div className={styles.topContentItem} key={dna.title}>
                  <div>
                    <h3>{dna.title}</h3>
                    <p>{dna.content}</p>
                  </div>
                  <Button
                    className={styles.btn}
                    onClick={() => window.open(dna.link)}
                  >
                    {dna.btnText}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DnaAndFeatures;
