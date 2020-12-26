import React, {useState, useEffect} from 'react'
import Phrase from './Phrase'
import Header from './Header'
import Footer from './Footer'
import api from './Api'
import Background from './Background'

function App() {
    const [obj, setObj ] = useState({})

    function handleAnimationPlay() {
        const svgBottles = document.querySelector('.bottle')
        const wrapper = document.querySelector('.logoWrapper')
        const background = document.querySelector('.marquee')

        svgBottles.classList.add('isAnimated')
    }

    function handleAnimationComplete() {
        const svgBottles = document.querySelector('.bottle')
        const wrapper = document.querySelector('.logoWrapper')
        const background = document.querySelector('.marquee')
        const main = document.querySelector('h1')

        svgBottles.classList.remove('isAnimated')
        wrapper.classList.remove('preloading')

        setTimeout(function(){
            background.classList.add('loaded')
        },500)

        setTimeout(function(){
            main.classList.add('loaded')
        },1000)
    }

    useEffect(() => {
        handleAnimationPlay()
        async function loadObj(){
            const response = await api.get()
            setTimeout(function(){
                setObj(response.data)
                document.title = response.data.phrase
                handleAnimationComplete()
            },3000)
        }
        loadObj();
    }, []);

    return (
        <>
        <Header />
        <main>
            <Phrase phrase={obj.phrase} />
        </main>
        <Background phrase={obj.phraseOtherGender}/>
        <Footer />
        </>
    );
}

export default App;
