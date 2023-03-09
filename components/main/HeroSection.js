import styles from '../main/styles.module.scss';
import Image from 'next/image';
import { ButtonIconArrow } from '../buttons';
import 'animate.css';
export const HeroSection = () => {
  return (
    <>
     <div className={styles.hero__svg}>
                <Image
                className={styles.hero__halfCircle}
                src="/component/double_halfcircle.svg"
                width={60}
                height={60}
                alt="half cirlce"
                />
              </div>
    <div className={styles.hero}>
        <div className={styles.hero__container}>
            <div className={styles.hero__textContent}>
              <h2 className={styles.hero__slogan}>
                You <span className={styles.hero__boldOne}>
                  Imagine
                  </span> <br /> 
                  We <span className={styles.hero__boldTwo}>
                Craft
                </span> it</h2>
              <div className={styles.hero__textDescription}>
                <p className={`animate__animated animate__bounce ${styles.hero__desc}` }>
                Tuangkan imajinasi anda menjadi produk inovatif bersama lokalize
                </p>
                <ButtonIconArrow type="button" text={"Mulai"} routes={"/market"}/>
              </div>
            </div>  

            <div className={`${styles.hero__imgContent} ${styles.bounceInDown}`}>
              <Image
              className={styles.u__bounceInDown}
              src="/component/heroAll.svg"
              width={350}
              height={350}
              alt="hero Image display"
              />
            </div>
        </div>
    </div>
    </>
  )
}
