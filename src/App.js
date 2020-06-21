import React, {useState, useEffect} from 'react'
import Phrase from './Phrase'
import Header from './Header'
import Footer from './Footer'
import api from './Api'

function App() {
    const [obj, setObj ] = useState(
        {
        "phrase": "Nomes de garçom"
        }
    )

    document.title = obj.phrase

    useEffect(() => {
        async function loadObj(){
        const response = await api.get()
        setObj(response.data)
        document.title = response.data.phrase
    }
    loadObj();
    }, []);

    return (
        <>
        <Header />
        <main>
            <Phrase phrase={obj.phrase} />
        </main>
        <Footer />
        </>
    );
}

export default App;
