import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const AboutPage = () => {

    return(

        <>
            <main>
               <Layout pageTitle='About' pageHeading='About Heading' />
               <Link to="/">Home</Link>
            </main>
        </>
    )
}


export default AboutPage