import React from 'react'
import styles from './CenterPart.module.scss'
import { AiOutlineSearch ,AiOutlinePlayCircle } from 'react-icons/ai'
import { useState, useRef } from 'react'

const CenterPart = ({word, enterWord, audio, error}) => {

  const [value, setValue] = useState('')

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const enterValue = () => {
    enterWord(value)
  }


  const handlePlay = () => {
    if(audio) audio.play();
  }

  // console.log('this one', audio.src)

  return (
    <div className={styles.centre}>
      <div className={styles.search}>
        <input type="text" value={value} onChange={changeValue}  />
        <AiOutlineSearch onClick={enterValue} />   
      </div>
      {error? <h3 style={{margin: 'auto', padding: '1.1rem 1rem'}}>Sorry, word not found</h3> :<div className={styles.display}>
        <h3>{word}</h3>
        <AiOutlinePlayCircle style={{
          color: audio ? 'black': 'grey'
        }} onClick={handlePlay} />
      </div>}
    </div>
  )
}

export default CenterPart