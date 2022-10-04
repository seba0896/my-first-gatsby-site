import React  from 'react';




const Header = (props) => {

    return(
        <>
            <header className='header'>
               <h2>{ props.title }</h2> 
                <p>{ props.texto.algo } </p>
            </header>
        </>
    )
}


export default Header