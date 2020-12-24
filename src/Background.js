import React from 'react'

class Background extends React.Component {
    render() {
        const items = []
        for( let i=0; i<3; i++ ){
            items.push(i)
        }

        return(
            <>
            <div className="marquee" aria-hidden="true">
            {items.map((item, i)=>{
                return (<span className={`toRepeat toRepeat-${item}`} key={item} style={`--rotateItem: ${Math.random() * 10}deg;--topItem: ${Math.random() * 200}rem;--leftItem: ${Math.random() * 100 }rem;`}>{this.props.phrase}</span>)
            })}
            </div>
            </>
        )
    }
}

export default Background