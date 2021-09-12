import React from 'react'
import '../../Styles.css'
import Header from '../../components/header/Header'
import Camera from '../../img/camera.svg'
import Item from '../../components/item/Item'

const Photos = ({ data }) => {
  return (
    <div className="container">
      <Header />
      <div className="photos">
        <div className="img__wrapper">
          <img src={Camera} alt="camera" />
        </div>
        <div>
          <div className="items">
            {data.map((item, index) => {
              return <Item key={index} title={item.title} descr={item.descr} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos
