import { CategoryContainer, Title } from './category.styles';
import { useParams } from 'react-router';
import { useContext, useEffect, useState,Fragment } from 'react';
import { CategoriesContext } from '../../../context/categories.contexts';
import ProductCard from '../../product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
  
    return (
      <Fragment>
        <Title>{category.toUpperCase()}</Title>
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      </Fragment>
    );
  };
  
  export default Category;