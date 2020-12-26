import React from 'react'

class Background extends React.Component {
    render() {
        const items = []
        for( let i=1; i<8; i++ ){
            items.push(i)
        }

        return(
            <>
            <div className="marquee" aria-hidden="true">
            {items.map((item, i)=>{
                return (<span className={`toRepeat toRepeat-${item}`} key={item}>{this.props.phrase}</span>)
            })}
            </div>
            </>
        )
    }
}

export default Background