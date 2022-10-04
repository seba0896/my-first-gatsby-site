import { Link } from 'gatsby';
import React  from 'react';
import Layout from '../components/layout';



const Contact = () => {

    return(

        <>
            <main>
                <Layout pageTitle='Contact Us' pageHeading='Contact Page'>

                    Cualquier cosa aquí dentro
                </Layout>

                <Link to="/">Home</Link>
            </main>
            
        </>
    )
}

export default Contact