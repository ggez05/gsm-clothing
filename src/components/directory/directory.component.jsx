import CategoryItem from '../category-item/category-item.component.jsx'
import './directory.styles.scss'

const categories = [
    {
        "id": 1,
        "title": "Hats",
        "imageUrl": "https://cache.net-a-porter.com/content/images/story-body-content-26thMay2022-0-1652778491332.jpeg/w950_q65.jpeg",
        route: 'shop/hats'
    },
    {
        "id": 2,
        "title": "Jackets",
        "imageUrl": "https://classyyettrendy.com/wp-content/uploads/2018/09/5-Fall-Layering-Essentials-top-cardigans-denim-jacket-utility-jacket-leather-jacket.jpg.jpg",
        route:'shop/jackets'
    },
    {
        "id": 3,
        "title": "Sneakers",
        "imageUrl": "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/03/30141402/AF1-2018_HO18_Group_14_All_styles_0785_native_1600-1600x900.jpg",
        route:'shop/sneakers'
    },
    {
        "id": 4,
        "title": "Womens Clothing",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
        route: 'shop/womens'
    },
    {
        "id": 5,
        "title": "Mens Clothing",
        "imageUrl": "https://digitalcontent.api.tesco.com/v2/media/homepage/0edb255d-f22e-40fb-b3ed-93f4a0275c31/2214-FF-Hub-Hero-Mens.jpeg",
        route: 'shop/mens'
    }
]

const Directory = () => {
    
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}

        </div>
    )
}

export default Directory;