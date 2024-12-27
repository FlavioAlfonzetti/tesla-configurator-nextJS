type PriceSectionProps = {
  totalPrice: number;
};

const PriceSection = ({ totalPrice }: PriceSectionProps) => {
  return (
    <div className="pt-4">
      <h3 className="font-semibold text-lg">Total Price</h3>
      <p id="total-price" className="text-2xl font-bold">
        €{totalPrice.toLocaleString()}
      </p>
    </div>
  );
};

export default PriceSection;
