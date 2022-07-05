import React from 'react';
import { Link } from 'react-router-dom';
function Home(){
    return(
        <section>
            <h1>Home</h1>
            <Link to="/overView">List Task</Link>
        </section>
    )
}

export default Home;