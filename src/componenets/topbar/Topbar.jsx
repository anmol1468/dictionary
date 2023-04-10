import React, { useState } from 'react'
import { GiBlackBook } from 'react-icons/gi'
import { HiOutlineMoon } from 'react-icons/hi'
import styles from './Topbar.module.scss'

const Topbar = ({changeTheme}) => {

  const [dayMode, setDayMode] = useState(true);

  const onToggle = () => {
    setDayMode(!dayMode)
    changeTheme(dayMode)
  }

  return (
    <div className={styles.topbar}>
      <GiBlackBook />
      <div className={styles.toggle}>
        <input onClick={onToggle} type="checkbox" id="switch" /><label for="switch">Toggle</label> 
        <HiOutlineMoon />
      </div>
      
    </div>
  )
}

export default Topbar