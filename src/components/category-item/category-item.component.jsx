import { useNavigate } from 'react-router-dom';
import './category-item.style.scss'

const CategoryItem = ({ category }) => {
    const {imageUrl, title, route} = category; // category.imageUrl , category.title // from the map function in directory
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(route);
    }

    return (
        <div className="category-container" onClick={onNavigateHandler}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />

            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;