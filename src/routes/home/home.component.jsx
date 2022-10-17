import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import React from 'react';

const Home = () => {

    return (
        <div>
            <Outlet/> {/**USED TO RENDER THE NESTED ROUTING ELEMENT */}
            <Directory/> {/* categ (the name you want to pass it with) /// {categories} (what you want to pass in )*/}
        </div>
        
    );
}


export default Home;