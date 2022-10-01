import CategoryItem from '../category-item/category-item.component.jsx'
import './directory.styles.scss'

const Directory = ({categ}) => {
    return (
        <div className="categories-container">
            {categ.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}

        </div>
    )
}

export default Directory;