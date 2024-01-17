import styled from "styled-components";
import ProductBox from "./ProductBox";


const StyledProductsGrid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    }
`;

export default function ProductsGrid({products}){
    return(
        <StyledProductsGrid>
            {products.length>0 && products.map(product=>(
                <ProductBox key={products._id} {...product}/>
            ))}
        </StyledProductsGrid>
    )
}