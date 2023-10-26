'use client';
import { ProductDescription } from 'components/product/product-description';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  padding: 0 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  color: #fff;
  padding: 2rem; /* p-8 */
  @media (min-width: 768px) {
    padding: 3rem; /* md:p-12 */
    justify-content: space-evenly;
    flex-direction: row;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div``;

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
`;

const DescriptionContainer = styled.div`
  flex-basis: 100%;
  @media (min-width: 1024px) {
    flex-basis: 33.333333%; /* lg:basis-2/6 */
  }
`;

function ProductClient({
  product,
  searchParams
}: {
  product: any;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log(product);

  return (
    <>
      <Container>
        <Card>
          <ImageContainer>
            <StyledImage src="/flyers.jpg" alt="GregMMA" width={560} height={800} />
          </ImageContainer>
          <DescriptionContainer>
            <ProductDescription product={product} searchParams={searchParams} />
          </DescriptionContainer>
        </Card>
      </Container>
    </>
  );
}

export default ProductClient;
