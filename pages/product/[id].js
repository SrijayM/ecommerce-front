import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5rem;

`;

const ColWrapper = styled.div`
    display: grid;
    gap: 40px;
    margin: 40px 0;
    grid-template-columns: 1fr;
    @media screen and(min-width: 768px) {
        grid-template-columns: 0.8fr 1.2fr;

    }
`;

const PriceRow = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
`;

const Price = styled.span`
    font-size: 1.4rem;
`;

export default function ProductPage({product}) {
    const {addProduct} = useContext(CartContext);
    return(
        <>
        <Header/> 
        <Center>
            <ColWrapper>
                <WhiteBox>
                    <ProductImages images={product.images}/>
                </WhiteBox>
                <div>
                    <Title>{product?.title}</Title>
                    <p>{product.description}</p>
                    <PriceRow>
                        <div>
                            <Price>${product.price}</Price>   
                        </div>
                        <div>
                            <Button primary={1} onClick={ () => addProduct(product._id) }><CartIcon/> Add to Cart</Button>
                        </div>
                    </PriceRow>
                </div>
            </ColWrapper>
        </Center>
        </>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
      }
    }
  }