import styles from '../main/styles.module.scss';

import { HeroSection } from './HeroSection'
import { DisplayProduct } from './displayProduct'
import { Content } from './content'
import { Subscribe } from './subscribe';
export const Mainsection = () => {
  return (
    <>
    <HeroSection />
    <DisplayProduct/>
    <Content />
    </>

  )
}
