import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../context/categories.context';
import './category.styles.scss'

const Category = () => {
    const { category } = useParams(); 
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    
    useEffect(()=> {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    return (
        <div>
            <h2 className='category-name-h2'>{category.toUpperCase()}</h2>
            <span className='category-container1'>
            {
                products && products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
            </span>
        </div>
    )

};
export default Category;