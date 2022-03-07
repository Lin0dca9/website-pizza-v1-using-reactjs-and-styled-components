import React from 'react';
import { ProductsContainer,
     ProductsHeading,
    ProductsWrapper,
    ProductsCard,
    ProductImg,
    ProductTitle,
    ProductsInfo,
    ProductDesc,
    ProductPrice,
    ProductButton} from './ProductsElements';

const Products = ({heading, data}) =>{
    return(
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductsCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductsInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductsInfo>
                        </ProductsCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    );
}
export default Products;