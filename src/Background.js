import React from 'react'

class Background extends React.Component {
    render() {
        const items = []
        for( let i=0; i<5; i++ ){
            items.push(i)
        }
        console.log(window.innerWidth);
        return(
            <>
            <div className="marquee" aria-hidden="true">
            {items.map((item)=>{
                return (<span className={`toRepeat toRepeat-${item}`} key={item}>{this.props.phrase}</span>)
            })}
            </div>
            </>
        )
    }
}

export default Background