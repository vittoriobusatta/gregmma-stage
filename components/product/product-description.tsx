'use client';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product, ProductVariant } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';
import { useEffect, useState } from 'react';

export function ProductDescription({
  product,
  searchParams
}: {
  product: Product;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  useEffect(() => {
    if (searchParams) {
      const variantSelect = searchParams['ticket type'];
      const variant = product.variants.find((variant) => variant.title === variantSelect);
      if (variant !== undefined) {
        setSelectedVariant(variant);
      } else {
        setSelectedVariant(null);
      }
    }
  }, [searchParams, product.variants]);

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            // amount={product.priceRange.maxVariantPrice.amount}
            amount={
              selectedVariant
                ? selectedVariant.price.amount
                : product.priceRange.maxVariantPrice.amount
            }
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector
        options={product.options}
        variants={product.variants}
        onVariantChange={handleVariantChange}
      />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
