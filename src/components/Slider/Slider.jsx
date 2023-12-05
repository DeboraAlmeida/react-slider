import React from "react";
import styles from './Slider.module.css'

export const Slider = ({ imagens }) => {

  const [imgShown, setImgShown] = React.useState(0) 

  const nextImg = () => {
    if (imgShown < imagens.length - 1) {
      setImgShown(imgShown + 1)
    } else {
      setImgShown(0)
    }
  }

  const prevImg = () => {
    if (imgShown <= imagens.length - 1 && imgShown >= 1) {
      setImgShown(imgShown - 1)
    } else {
      setImgShown(imagens.length - 1)
    }
  }

  React.useEffect(() => {

      const goNext = setInterval(() => {
        setImgShown(imgShown < imagens.length - 1 ? imgShown + 1 : 0);
    }, 6000);

    return () => clearInterval(goNext);

  }, [imgShown, imagens.length])

  return (
    <div className={styles.slider}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevImg}>&lt;</button>
      {imagens.map((item, index) => {
      return <a key={index} href={item.link} target="_blank" rel="noreferrer"><img src={item.url} alt={item.alt} className={imgShown === index ? `${styles.img}` : `${styles.img} ${styles.imgHide}`}/></a>
    })}
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextImg}>&gt;</button>
      <span className={styles.selectors}>
        {imagens.map((_, index) => {
          return <button key={index} onClick={() => setImgShown(index)} className={imgShown === index ? `${styles.selector}` : `${styles.selector} ${styles.selectorInactive}`}></button>
        })}
      </span>
    </div>
  )
}