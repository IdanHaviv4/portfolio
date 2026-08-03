const Component2 = () => (
  <div className="bg-[#ffffff] rounded-2xl p-2 flex flex-col gap-6 overflow-hidden shadow-[0_0_30px_hsl(204_29%_66%_/0.2)] xs:p-6">
    <div className="mx-auto px-2 rounded-full bg-[#fbfbff] border-2! border-solid! border-[#f2f3fb]! xs:px-4">
      <span className="text-[0.75rem]! leading-8 xs:text-[0.8rem]!">
        Offer includes{" "}
        <span className="text-[0.8rem]! font-medium">first month free</span> of
        charge
      </span>
    </div>

    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="flex justify-between items-start gap-6 bg-linear-to-r from-[#987ef7] to-[#7074e0] p-6 rounded-t-lg">
        <div className="flex flex-col gap-1">
          <span className="text-[1rem]! text-white! font-medium leading-4">
            Premium Individual
          </span>
          <span className="text-[0.8rem]! text-[#e6e6e6]!">1 account</span>
        </div>

        <span className="text-[1rem]! text-white! font-medium! leading-4">
          $12
          <span className="text-[0.8rem]! text-[#e6e6e6]!">/month</span>
        </span>
      </div>
      <div className="w-full bg-linear-to-r from-[#987ef7] to-[#7074e0] p-6 rounded-b-lg **:text-[0.8rem]! shadow-[0_-10px_30px_hsl(0_0%_0%_/0.1)]">
        <ul className="list-disc ml-3 **:text-[#e6e6e6]!">
          <li>Only 12$ after 1 month trial</li>
          <li>You won't be charged until Sep 16, 2021</li>
          <li>Cancel anytime</li>
        </ul>
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <span className="text-[1rem]!">Select payment method</span>
      <div className="w-full grid grid-cols-2 gap-[inherit]">
        {[{ label: "Credit card" }, { label: "Paypal" }].map(({ label }) => (
          <div
            key={label}
            className="relative w-full py-2 flex justify-center items-center rounded-lg bg-linear-120 from-section to-section text-[0.8rem]! cursor-pointer overflow-hidden transition duration-200 ease-out has-[input[type='radio']:checked]:text-[#090b2e]! has-[input[type='radio']:checked]:from-[#03dbfc] has-[input[type='radio']:checked]:to-[#03fcf4] has-[&_input[type='radio']:not(:checked)]:text-[#525252]! has-[&_input[type='radio']:not(:checked)]:hover:from-section-hover has-[&_input[type='radio']:not(:checked)]:hover:to-section-hover"
          >
            <label className="absolute w-full h-full cursor-pointer opacity-0">
              <input
                type="radio"
                name="payment-method"
                className="cursor-pointer"
              />
            </label>
            {label}
          </div>
        ))}
      </div>
    </div>

    <button className="w-full py-4 rounded-lg bg-[#090b2e] text-white! text-[0.8rem]! cursor-pointer transition duration-200 ease-out hover:bg-[#141742]!">
      Continue
    </button>
  </div>
);

export default Component2;
