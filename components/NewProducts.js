import styled from "styled-components"
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
`;

const Title = styled.h2`
  font-weight: normal;
  font-size:2rem;
  color:inherit;
  text-decoration:none;
  margin:30px 0 30px;
`;

export default function NewProducts({products}){
    return(
        <Center>
            <Title>New Arrivals</Title>
            <ProductsGrid>
                {products.length>0 && products.map(product=>(
                    <ProductBox {...product}/>
                ))}
            </ProductsGrid>
        </Center>

    );
}