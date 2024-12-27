type PaymentBreakdownProps = {
  totalPrice: number;
};

const PaymentBreakdown = ({ totalPrice }: PaymentBreakdownProps) => {
  const downPayment = totalPrice * 0.1;
  const loanAmount = totalPrice - downPayment;
  const loanTermMonths = 60;
  const interestRate = 0.03;

  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment =
    (loanAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTermMonths))) /
    (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);

  return (
    <div className="border-t pt-4 mt-6">
      <h3 className="font-semibold text-lg">Estimated Payment Breakdown</h3>
      <div className="mt-4">
        <p>
          Down Payment:{" "}
          <span id="down-payment" className="font-bold">
            €{downPayment.toLocaleString()}
          </span>
        </p>
        <p>
          Loan Term: <span className="font-bold">60 Months</span>
        </p>
        <p>
          Interest Rate: <span className="font-bold">3% APR</span>
        </p>
        <p>
          Estimated Monthly Payment:{" "}
          <span id="monthly-payment" className="font-bold text-2xl">
            €{monthlyPayment.toFixed(2).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaymentBreakdown;
