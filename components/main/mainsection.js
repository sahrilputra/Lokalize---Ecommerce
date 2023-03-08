import styles from '../main/styles.module.scss';

import { HeroSection } from './HeroSection'
import { DisplayProduct } from './displayProduct'
import { Content } from './content'
import { Subscribe } from './subscribe';
import { ReviewComponent } from './review';
export const Mainsection = () => {
  return (
    <>
    <HeroSection />
    <Subscribe />
    <DisplayProduct/>
    <Content />
    <ReviewComponent />
    </>

  )
}
