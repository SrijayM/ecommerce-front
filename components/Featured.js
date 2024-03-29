import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;


export default function Featured({product}){
  const {addProduct} = useContext(CartContext)
  function addFeaturedTocard(){
    addProduct(product._id);
  }
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read More</ButtonLink>
                                <Button white={1} onClick={addFeaturedTocard}>
                                    <CartIcon/>

                                    Add to Cart
                                </Button>
                            </ButtonsWrapper>

                        </div>
                    </Column>
                    <Column>
                        <img src="https://media.flixcar.com/webp/static-asset/inpage/intel-components/Boxed-CPU-12thGen/i9-12900K/images/header-img-tb.png"/>
                    </Column>

                </ColumnsWrapper>
               
            </Center>   
        </Bg>
    )
}