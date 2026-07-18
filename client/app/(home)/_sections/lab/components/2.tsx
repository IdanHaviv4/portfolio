const Component2 = () => (
  <div className="bg-[#ffffff] rounded-2xl p-6 flex flex-col gap-6 overflow-hidden shadow-[0_0_30px_hsl(204_29%_66%_/0.2)]">
    <div className="mx-auto px-4 rounded-full bg-[#fbfbff] border-2! border-solid! border-[#f2f3fb]!">
      <span className="text-[0.8rem]! leading-8">
        Offer includes{" "}
        <span className="text-[0.8rem]! font-medium">first month free</span> of
        charge
      </span>
    </div>

    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="flex justify-between items-start gap-6 bg-linear-to-r from-[#987ef7] to-[#7074e0] p-6 rounded-t-lg">
        <div className="flex flex-col">
          <span className="text-[1rem]! text-white! font-medium">
            Premium Individual
          </span>
          <span className="text-[0.8rem]! text-[#e6e6e6]!">1 account</span>
        </div>

        <span className="text-[1rem]! text-white! font-medium!">
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
        <div className="relative w-full py-2 flex justify-center items-center rounded-lg bg-section text-[0.8rem]! border-2! border-solid border-transparent cursor-pointer overflow-hidden transition duration-200 ease-out has-[&_input[type='radio']:checked]:border-[#090b2e]! has-[&_input[type='radio']:checked]:text-[#090b2e]! has-[&_input[type='radio']:not(:checked)]:text-[#525252]!">
          <label className="absolute w-full h-full cursor-pointer opacity-0">
            <input
              type="radio"
              name="payment-method"
              className="cursor-pointer"
            />
          </label>
          Credit card
        </div>

        <div className="relative w-full py-2 flex justify-center items-center rounded-lg bg-section text-[0.8rem]! border-2! border-solid border-transparent cursor-pointer overflow-hidden transition duration-200 ease-out has-[&_input[type='radio']:checked]:border-[#090b2e]! has-[&_input[type='radio']:checked]:text-[#090b2e]! has-[&_input[type='radio']:not(:checked)]:text-[#525252]!">
          <label className="absolute w-full h-full cursor-pointer opacity-0">
            <input
              type="radio"
              name="payment-method"
              className="cursor-pointer"
            />
          </label>
          Paypal
        </div>
      </div>
    </div>

    <button className="w-full py-4 rounded-lg bg-[#090b2e] text-white! text-[0.8rem]! cursor-pointer">
      Continue
    </button>
  </div>
);

export default Component2;
