
import React from 'react';

import { Link } from 'gatsby';

import { container } from './layout.module.css'

import { StaticImage } from 'gatsby-plugin-image';

const Layout = ({ pageTitle, pageHeading, children}) => {

    return(
        <>
             <main>
                <title>{pageTitle}</title>
                <h1>{pageHeading}</h1>
                {/* <nav>
                <ul>
                    <li><Link to="/about">Go to About Page</Link></li>
                    <li><Link to="/contact">Go to Contact Page</Link></li>
                </ul>
                </nav>
                {children}

                <StaticImage src='https://placeimg.com/400/400/any' alt='A image'/>
                <StaticImage src='../images/55.jpg' alt='A image'/> */}

            </main>
        </>
    )
}

export const Head = () => <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

export default Layout