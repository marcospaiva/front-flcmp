import React, {useState, useEffect} from 'react'
import ReactGA from 'react-ga'
import {Helmet} from "react-helmet"
import Phrase from './Phrase'
import Header from './Header'
import Footer from './Footer'
import api from './Api'
import Background from './Background'
import image from './images/ico.ico'
import og_image from './images/og-image.jpg'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
ReactGA.pageview(process.env.REACT_APP_PUBLIC_URL)

function App() {
    const [obj, setObj ] = useState({})

    function handleAnimationPlay() {
        const svgBottles = document.querySelector('.bottle')

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
                document.title = `${response.data.phrase} 🍻`
                handleAnimationComplete()
            },3000)

            ReactGA.event({
                category: 'User',
                action: 'Phrase',
                label: response.data.phrase
            });
        }
        loadObj();
    }, []);
    return (
        <>
        <Helmet>
            <title>🍻 Nomes de garçom 🍻</title>
            <link rel="icon" href={process.env.REACT_APP_PUBLIC_URL + image} type="image/x-icon"/>
            <meta name="description" content="Uma coleção de frases tipicamente brasileiras para chamar garçons" />
            <meta name="og:description" content="Uma coleção de frases tipicamente brasileiras para chamar garçons" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Nomes de garçom 🍻" />
            <meta property="og:image" content={process.env.REACT_APP_PUBLIC_URL + og_image} />
            <meta property="og:url" content={process.env.REACT_APP_PUBLIC_URL} />
            <link rel="canonical" href={process.env.REACT_APP_PUBLIC_URL}/>
        </Helmet>
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
