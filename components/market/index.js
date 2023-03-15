
import styles from '../market/styles.module.scss';
import { Navbar } from '../header/Navbar'
import { BreadCrumbsElement } from './breadCumbs'
import { Banner } from './banner'
import { SearchBar } from './searchBar'
import { CardComponent } from './card'
import { ReCardComponent } from './cardComponent';

export const MarketMain = () => {
  return (
    <>
    <Navbar />
    <BreadCrumbsElement />
    <Banner />
    <SearchBar />
    <CardComponent />
    
    </>
  )
}
