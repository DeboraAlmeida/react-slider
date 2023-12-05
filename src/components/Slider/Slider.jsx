import React from "react";
import './Slider.css'

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
    <div className="slider">
      <button className="arrow left" onClick={prevImg}>&lt;</button>
      {imagens.map((item, index) => {
      return <a key={index} href={item.link} target="_blank" rel="noreferrer"><img src={item.url} alt={item.alt} className={imgShown === index ? 'img' : 'img img-hide'}/></a>
    })}
      <button className="arrow right" onClick={nextImg}>&gt;</button>
      <span className="selectors">
        {imagens.map((_, index) => {
          return <button key={index} onClick={() => setImgShown(index)} className={imgShown === index ? 'selector' : 'selector selector-inactive'}></button>
        })}
      </span>
    </div>
  )
}