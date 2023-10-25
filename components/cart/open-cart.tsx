import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="cart-icon-container">
      <ShoppingCartIcon className={`cart-icon ${className}`} />
      {quantity ? <div className="quantity-indicator">{quantity}</div> : null}
    </div>
  );
}
