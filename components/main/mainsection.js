import styles from '../main/styles.module.scss';

import { HeroSection } from './HeroSection'
import { DisplayProduct } from './displayProduct'
import { Content } from './content'
import { Subscribe } from './subscribe';
import { ReviewComponent } from './review';
import { SectionCustom } from './sectionCustom';
import { BlogComponent } from './blogComponent';

export const Mainsection = () => {
  return (
    <>
    <HeroSection />
    <DisplayProduct/>
    <Content />
    {/* <SectionCustom/> */}
    <ReviewComponent />
    <BlogComponent /> 
    </>

  )
}
