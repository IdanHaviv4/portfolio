import { Icons } from "@/components";
import Link from "next/link";
import { useMemo } from "react";

const Lab = () => {
  const components: {
    bg: string;
    component: React.ReactNode;
    inspiration?: string;
    colSpan?: 1 | 2;
  }[] = useMemo(
    () => [
      {
        bg: "#f1e8e6",
        component: (
          <div className="bg-white grid grid-cols-[min-content] grid-rows-[repeat(2,min-content)] rounded-2xl overflow-hidden shadow-[0_0_30px_hsl(338_83%_34%_/0.2)]">
            <div className="w-full aspect-video">
              <img
                src="https://img.magnific.com/free-photo/ingredients-making-greek-vegetable-casserole-with-rice-tomatoes-feta-cheese_127032-3209.jpg?semt=ais_hybrid&w=740&q=80"
                className="w-full h-full object-cover"
                alt="food-newsletter"
              />
            </div>

            <div className="flex flex-col gap-4 p-6 w-80">
              <div className="flex flex-col items-center">
                <span className="text-[0.8rem]! text-[#5d5d6c]! font-medium! tracking-wider">
                  SUBSCRIBE TODAY
                </span>
                <span className="text-[1.25rem]! font-medium! leading-6">
                  Never miss a recipe
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <input
                  className="text-[1rem]! px-6 py-3 rounded-lg border-2! border-solid! border-[#f0d9d4]"
                  placeholder="Your email address"
                />
                <button className="text-[1rem]! w-full h-full flex justify-center items-center py-3 rounded-lg bg-[#f55951] text-white! font-medium shadow-[0_0_30px_hsl(338_83%_34%_/0.2)] cursor-pointer">
                  Subscribe
                </button>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-[0.8rem]! text-[#5d5d6c]! text-center">
                  We wont send you spam
                  <br />
                  Unsubscribe at any time
                </p>
              </div>
            </div>
          </div>
        ),
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-recipe-components-subscribe-tags-card-rating-day-1145",
      },
      {
        bg: "#eeeff9",
        component: (
          <div className="bg-[#ffffff] rounded-2xl p-6 flex flex-col gap-6 overflow-hidden shadow-[0_0_30px_hsl(204_29%_66%_/0.2)]">
            <div className="mx-auto px-4 rounded-full bg-[#fbfbff] border-2! border-solid! border-[#f2f3fb]!">
              <span className="text-[0.8rem]! leading-8">
                Offer includes{" "}
                <span className="text-[0.8rem]! font-medium">
                  first month free
                </span>{" "}
                of charge
              </span>
            </div>

            <div className="flex flex-col rounded-lg overflow-hidden">
              <div className="flex justify-between items-start gap-6 bg-linear-to-r from-[#987ef7] to-[#7074e0] p-6 rounded-t-lg">
                <div className="flex flex-col">
                  <span className="text-[1rem]! text-white! font-medium">
                    Premium Individual
                  </span>
                  <span className="text-[0.8rem]! text-[#e6e6e6]!">
                    1 account
                  </span>
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
        ),
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-upgrade-plan-pricing-payment-day-1421",
      },
      {
        bg: "linear-gradient(135deg,#c3fef4,#a2c7fd)",
        component: (
          <div className="relative bg-white/40 px-8 py-6 rounded-[2rem] flex items-start gap-6 border-2! border-solid! border-white/60 my-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:scale-x-95 before:translate-y-[5%] before:bg-white/40 before:rounded-[inherit]">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="relative shrink-0 w-24 aspect-square rounded-full object-cover border-4! border-solid! border-white!"
              alt="pfp"
            />

            <div className="relative flex flex-col gap-10 mt-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-[1.5rem]! font-medium! leading-6">
                    Mae Shaw
                  </span>
                  <span className="text-[0.8rem]! text-[#626262]! font-medium!">
                    @maeshaw
                  </span>
                </div>

                <p className="w-full max-w-105 text-[1rem]! text-[#626262]!">
                  If you like my work, consider supporting me on Paypal and help
                  me make a dream come true.
                </p>
              </div>

              <div className="flex items-center gap-4 *:even:bg-white *:even:w-0.5 *:even:h-8 *:even:rounded-full">
                <div className="flex flex-col">
                  <span className="text-[1.1rem]! font-medium! leading-4">
                    74.3M
                  </span>
                  <span className="text-[0.8rem]! text-[#626262]! font-medium! leading-4">
                    Views
                  </span>
                </div>

                <div />

                <div className="flex flex-col">
                  <span className="text-[1.1rem]! font-medium! leading-4">
                    17
                  </span>
                  <span className="text-[0.8rem]! text-[#626262]! font-medium! leading-4">
                    Rank
                  </span>
                </div>

                <div />

                <div className="flex flex-col">
                  <span className="text-[1.1rem]! font-medium! leading-4">
                    45M
                  </span>
                  <span className="text-[0.8rem]! text-[#626262]! font-medium! leading-4">
                    Downloads
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-6 py-2 rounded-lg bg-[#0a0a14] text-[1rem]! text-white! border-2! border-solid border-[#0a0a14] cursor-pointer">
                  Follow
                </button>
                <button className="px-6 py-2 rounded-lg text-[1rem]! text-[#0a0a14]! border-2! border-solid border-[#0a0a14] cursor-pointer">
                  View profile
                </button>
              </div>
            </div>
          </div>
        ),
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-profile-card-gradient-day-1377",
        colSpan: 2,
      },
    ],
    [],
  );

  return (
    <section id="lab" className="w-screen">
      <div className="w-full bg-secondary py-20">
        <div className="w-full max-w-360 mx-auto flex flex-col gap-20">
          <img
            src="/assets/lab/banner.jpg"
            alt="lab-banner"
            className="w-screen h-auto object-cover"
          />

          <div className="w-full max-w-max-width mx-auto flex flex-col gap-6">
            <p className="text-text-secondary-dark!">
              This is my lab. Here i create components to prove that{" "}
              <span className="text-white! font-medium!">EVERY</span> design can
              turn into reality.
            </p>

            <div className="w-full grid grid-cols-2 gap-[inherit]">
              {components.map(({ bg, component, inspiration, colSpan }) => (
                <div
                  key={bg}
                  className="relative h-full flex justify-center items-center p-6 rounded-lg overflow-hidden"
                  style={{
                    background: bg,
                    gridColumn: `span ${colSpan ?? 1}`,
                  }}
                >
                  {inspiration && (
                    <div className="absolute top-0 right-0">
                      <Link href={inspiration} target="_blank">
                        <button className="bg-accent text-white! px-3 py-1 rounded-bl-lg flex items-center gap-1 cursor-pointer">
                          Inspiration
                          <Icons.ArrowTopRightIcon className="w-4 aspect-square fill-white" />
                        </button>
                      </Link>
                    </div>
                  )}

                  {component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;
