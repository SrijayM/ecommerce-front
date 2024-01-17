import styled from "styled-components"
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";


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
            <ProductsGrid products={products}/>
        </Center>

    );
}