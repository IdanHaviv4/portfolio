import { Icons, Title } from "@/components";
import Link from "next/link";
import { useMemo } from "react";
import { Components } from "./";

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
        component: <Components.Component1 />,
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-recipe-components-subscribe-tags-card-rating-day-1145",
      },
      {
        bg: "#eeeff9",
        component: <Components.Component2 />,
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-upgrade-plan-pricing-payment-day-1421",
      },
      {
        bg: "linear-gradient(135deg,#c3fef4,#a2c7fd)",
        component: <Components.Component3 />,
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-profile-card-gradient-day-1377",
        colSpan: 2,
      },
    ],
    [],
  );

  return (
    <section id="lab" className="w-screen pt-20">
      <div className="w-full bg-secondary py-20">
        <div className="w-full max-w-max-width mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Title label="Lab" tag="lab" variant="light" />

            <p className="text-text-secondary-dark!">
              This is my lab. Here i create components to prove that{" "}
              <span className="text-white! font-medium!">EVERY</span> design can
              turn into reality.
            </p>
          </div>

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
    </section>
  );
};

export default Lab;
