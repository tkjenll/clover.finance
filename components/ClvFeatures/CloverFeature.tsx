import React from 'react'
import cn from 'classnames'
import { useInView } from 'react-intersection-observer'
import styles from './CloverFeature.module.scss'
import Fees from '../../public/svg/fees.svg'
import Governance from '../../public/svg/governance.svg'
import Validation from '../../public/svg/validation.svg'
import Treasury from '../../public/svg/treasury.svg'
import Nomination from '../../public/svg/nomination.svg'
import Deployment from '../../public/svg/deployment.svg'

const Features = ({
  features = [],
}: {
  features?: {
    title?: string
    content?: string
    btnText?: string
    link?: string
    img?: string
    name?: string
    index?: number
  }[]
}) => {
  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  }
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <div className={styles.wrapper}>
      <div
        ref={ref}
        className={cn(styles.featureWrapper, styles.hidden, {
          [`${styles.visible}`]: inView,
        })}
      >
        <div className={styles.featureContent}>
          <span className={cn(styles.title, styles.black)}>
            Clover Features
          </span>
          {!!inView && (
            <div>
              {features.map((feature) => (
                <div
                  className={cn(styles.topContentItem, styles.black, feature.name)}
                  key={feature.index}
                >
                  <h3>{feature.title}</h3>
                  <p className={styles.gray}>{feature.content}</p>
                  <a href={feature.link} target="_blank">
                    {feature.btnText}
                  </a>
                  <img src={feature.img} alt=""/>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Features
