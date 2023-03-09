import styles from '../market/styles.module.scss';
import Image from 'next/image';
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import data from '../../models/data'
import { Modal, Card } from 'flowbite-react';
import { QuickView } from './quickView';
import { FavoriteMenu } from '../header/favoriteMenu';
import { useState } from 'react';
import Link from 'next/link';

import 'animate.css';

export const CardComponent = () => {


  // Quick View
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setSelectedItem(null);
  };
  // ============

  const [noFil, setNone] = useState();
  const [category, setCategory] = useState('all'); // default category
  const [visible, setVisible] = useState(false);
  const [showing, setShowing] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [menuHidden, setMenuHidden] = useState(false);
  const handlerFavorite = (item) => {
    setFavorite([...favorite, item]);
  }
  const handlerFilter = (selectedCategory) => {
    setCategory(selectedCategory);

  }
  const filteredItems = category === 'all' ? data.item : data.item.filter(item => item.category === category);

  const toggleMenu = () => {
    setVisible(!visible);
    setShowing(true);
    setTimeout(() => {
      setShowing(false);
    }, 3000);
  }
  return (
    <>

      <div className={styles.market}>
        <h3 className={styles.market__tag}>Discover</h3>
        <div className={styles.market__container}>
          <div className={styles.market__menuSection}>
            <div className={styles.market__item} onClick={() => handlerFilter('all')} >
              <Image
                src="/market/all.png"
                alt="baju icon"
                width={240}
                height={180}
              />
            </div>
            <div className={styles.market__item} onClick={() => handlerFilter('tas')}>
              <Image
                src="/market/tas_item.svg"
                alt="baju icon"
                width={240}
                height={180}
              />
            </div>
            <div className={styles.market__item} onClick={() => handlerFilter('baju')}>
              <Image
                src="/market/baju_item.svg"
                alt="baju icon"
                width={240}
                height={180}
              />
            </div>
            <div className={styles.market__item} onClick={() => handlerFilter('dekorasi')}>
              <Image
                src="/market/hiasan.png"
                alt="baju icon"
                width={240}
                height={180}
              />
            </div>
          </div>

          <div className={styles.market__card}>
            {filteredItems.map((tas) => {
              return (
                <>
                  <div className={styles.item} key={tas.id}>
                    <img className={styles.imgContainer}
                      src={`${tas.image_url}`}
                      alt="item image"
                      onClick={() => handleItemClick(tas)}
                    />
                    {selectedItem && selectedItem.id === tas.id && (
                      <QuickView
                        open={true}
                        onClose={handleClose}
                        title={selectedItem.name}
                        image={selectedItem.image_url}
                        description={selectedItem.description}
                      />
                    )}

                    <div className={styles.item_text}>
                      <div className={styles.item_icon}>
                        <HiOutlineHeart className={styles.heartIcon} onClick={() => handlerFavorite(tas)} />
                      </div>
                      <Link href='/detail'>
                        <h3 className={styles.card__title}>
                          {tas.name}
                        </h3>
                      </Link>
                      <div className={styles.item_param}>
                        <p className={styles.itemDesk}>
                          {tas.description}
                        </p>
                      </div>
                      <div className={styles.itemBawah}>
                        <div className={styles.itemCartIcon}>
                          <HiOutlineShoppingCart className={styles.cartIcon} />
                        </div>
                        <h3 className={styles.prices}>Rp.{tas.price}</h3>
                      </div>
                    </div>
                  </div>

                  {/* {
                  favorite.length > 0 && <FavoriteMenu favoriteItem={favorite} className="hidden"/>
                  } */}
                </>

              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}
