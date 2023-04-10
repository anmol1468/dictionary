import React from 'react'
import styles from './Meaning.module.scss'

const Meaning = ({type, definationsArray, synonyms,}) => {


  return (
    <div className={styles.meaning}>
      <h4>{type}</h4>
      <h6>meaning</h6>
      <ul>
        {definationsArray?.map((el) => <li>{el.definition}</li>)}
      </ul>

      {synonyms?.length ? <div> <h6>Synonyms</h6> <ul>{synonyms.map((word) => <li>{word}</li>)}</ul> </div> : null}
    </div>
  )
}

export default Meaning