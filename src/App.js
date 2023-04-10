import './App.scss';
import CenterPart from './componenets/centerPart/CenterPart';
import Topbar from './componenets/topbar/Topbar';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Meaning from './componenets/meaning/Meaning';

function App({changeTheme}) {

  const [entry, setEntry] = useState('hello');
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${entry}`)
      .then(response => {setData(response.data)
      setError(false)
      })
      .catch(error => {setData('');
      setError(true)
      console.log(error)});
  }, [entry]);

  console.log(data)

  let audio;

  if (data[0]?.phonetics[0]?.audio.length>0) {
    audio = new Audio(data[0]?.phonetics[0]?.audio);
  } else { 
    audio = undefined
  }

  // audio.play() 

  return (
    <div className="App">
      <Topbar changeTheme={changeTheme} />
      <CenterPart word={data[0]?.word} error={error} enterWord={setEntry} audio={audio} />
      {data && <div>
      <Meaning type={data[0]?.meanings[0].partOfSpeech} definationsArray={data[0]?.meanings[0].definitions} synonyms={data[0]?.meanings[0].synonyms} />
      <Meaning type={data[0]?.meanings[1]?.partOfSpeech} definationsArray={data[0]?.meanings[1]?.definitions} synonyms={data[0]?.meanings[1]?.synonyms} />
      <div className="source">
        <h6>Source</h6>
        <a href={`${data[0]?.sourceUrls}`} target="_blank" >Wikipedia</a>
      </div></div>}
      
    </div>
  );
}

export default App;
