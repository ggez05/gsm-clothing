import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import React from 'react';

const Home = () => {

    const categories = [
        {
            "id": 1,
            "title": "Hats",
            "imageUrl": "https://cache.net-a-porter.com/content/images/story-body-content-26thMay2022-0-1652778491332.jpeg/w950_q65.jpeg"
        },
        {
            "id": 2,
            "title": "Jackets",
            "imageUrl": "https://classyyettrendy.com/wp-content/uploads/2018/09/5-Fall-Layering-Essentials-top-cardigans-denim-jacket-utility-jacket-leather-jacket.jpg.jpg"
        },
        {
            "id": 3,
            "title": "Sneakers",
            "imageUrl": "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/30141402/AF1-2018_HO18_Group_14_All_styles_0785_native_1600-1600x900.jpg"
        },
        {
            "id": 4,
            "title": "Womens Clothing",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "Mens Clothing",
            "imageUrl": "https://digitalcontent.api.tesco.com/v2/media/homepage/0edb255d-f22e-40fb-b3ed-93f4a0275c31/2214-FF-Hub-Hero-Mens.jpeg"
        }
    ]

    return (
        <div>
            <Outlet/> {/**USED TO RENDER THE NESTED ROUTING ELEMENT */}
            <Directory categ={categories} /> {/* categ (the name you want to pass it with) /// {categories} (what you want to pass in )*/}
        </div>
        
    );
}


export default Home;