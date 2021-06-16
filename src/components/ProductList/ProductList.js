import React from 'react';
import ProductCard from '../ProductCard/ProductCard.js';

function ProductList({items}) {
    return (
      <div className='flex flex-wrap justify-center'> {
        items.map(items => {
          return (
            <ProductCard
              key={items.id}
              image={items.image}
              title={items.title}
              price={items.price}
              description={items.description}
          />);
          })
        }
      </div>
    
      
    );
}

export default ProductList;