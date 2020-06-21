import React, {useEffect} from 'react'

function Background() {
    useEffect(() => {
        function duplicate(){
            const w = window.innerWidth
            const h = window.innerHeight
            const elWidth = document.getElementsByTagName('h4').innerWidth
            const elHeight = document.getElementsByTagName('h4').innerHeight
        }
        duplicate()
    }, [])

    return(
        <h4 className="toRepeat">nomes de garçom</h4>
    )
}

export default Background