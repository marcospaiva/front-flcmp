import React, {useState, useEffect} from 'react'
import Phrase from './Phrase'
import Header from './Header'
import Footer from './Footer'
import api from './Api'

function App() {
  const [phrase, setPhrase ] = useState([])

  useEffect( () => {
    async function loadPhrases(){
      const response = await api.get();
      setPhrase(response.data);

      document.title = response.data
    }
    loadPhrases();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Phrase phrase={phrase} />
      </main>
      <Footer />
    </>
  );
}

export default App;
