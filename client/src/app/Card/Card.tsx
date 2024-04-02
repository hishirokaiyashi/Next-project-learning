'use client'
import React, { useState } from 'react'
import custom from './custom.module.css'
import clsx from 'clsx'
const Card = () => {
    const [epxanding, setExpanding] = useState(true)
  return (
    <div className={clsx('card', {
        [custom.card]:epxanding
    })}>
      Card
    </div>
  )
}

export default Card
