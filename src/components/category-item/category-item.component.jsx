import './category-item.style.scss'

const CategoryItem = ({ category }) => {
    const {imageUrl, title} = category; // category.imageUrl , category.title // from the map function in directory
    return (
        <div className="category-container">
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