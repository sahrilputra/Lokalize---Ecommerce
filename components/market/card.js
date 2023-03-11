import styles from '../market/styles.module.scss';
import Image from 'next/image';
import { HiOutlineHeart, HiOutlineShoppingCart, HiHeart } from "react-icons/hi"
import { FaSearch } from 'react-icons/fa';
import data from '../../models/data'
import { Modal, Card } from 'flowbite-react';
import { QuickView } from './quickView';
import { FavoriteMenu } from '../header/favoriteMenu';
import { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import 'animate.css';
import useLikedItems from './usedLikeItem';
import CartModal from './cartModal';

const LikedItemsContext = createContext();


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


  // cartModal 

  const [cartMenodal, setCartModal] = useState(false);
  const toggleCart = () => {
    setCartModal(!cartMenodal);
    setCartModal(true);
    setTimeout(() => {
      setCartModal(false);
    }, 3000);
  }
  // ============

  const [noFil, setNone] = useState();
  const [category, setCategory] = useState('all'); // default category
  const [visible, setVisible] = useState(false);
  const [showing, setShowing] = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [menuHidden, setMenuHidden] = useState(false);
  const [likeItem, setLiked] = useState([]);
  const [fillFavorite, setFill] = useState(false);


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
  // ========== favorite 
  const handleLikedItem = (item) => {
    if (likeItem.includes(item)) {
      setLiked(likeItem.filter((id) => id !== item));
      setFill(!fillFavorite);
    } else {
      setLiked([...likeItem, item]);
    }
  }

  const clickFavorite = () => {

  }
  return (
    <>

      <div className={styles.market}>
        <h3 className={styles.market__tag}>Discover</h3>
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FaSearch className="text-gray-500" />
          </span>
          <input
            className="block sm:w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
            type="text"
            placeholder="Search"
          />
        </div>
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
              const isLiked = likeItem.includes(tas.id);

              return (
                <>
                  <div className={styles.item} key={tas.id}>
                    <img className={styles.imgContainer}
                      src={`${tas.image_url}`}
                      alt="item image"
                    />

                    <div className={styles.item_text}>
                      <div className={styles.item_icon}>
                        {isLiked ? (
                          <HiHeart className={`${styles.likedIcon} animate__animated animate__tada`} onClick={() => handleLikedItem(tas.id)} />
                        ) : (
                          <HiOutlineHeart className={`${styles.heartIcon}`} onClick={() => handleLikedItem(tas.id)} />
                        )
                        }
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
                          {

                          }
                          <HiOutlineShoppingCart className={`${styles.cartIcon} mb-3`} onClick={() => handleItemClick(tas)}/>
                          {selectedItem && selectedItem.id === tas.id && (
                            <QuickView
                              open={true}
                              onClose={handleClose}
                              title={selectedItem.name}
                              image={selectedItem.image_url}
                              description={selectedItem.description}
                              size={selectedItem.size}
                            />
                          )}
                          {/* <CartModal /> */}
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
