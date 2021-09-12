import React from 'react'
import '../../Styles.css'

const Item = ({ title, descr }) => {
  return (
    <div>
      <div className="item" />
      <div className="item__title">{title}</div>
      <div className="item__desc">{descr}</div>
    </div>
  )
}

export default Item
