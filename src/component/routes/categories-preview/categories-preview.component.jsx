import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../../context/categories.contexts';

import CategoryPreview from '../../../component/category-preview/category-preview.component'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </>
    )
}

export default CategoriesPreview;