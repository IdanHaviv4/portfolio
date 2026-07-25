"use client";

import { Icons, Title } from "@/components";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Components } from "./";
import Seperator from "./seperator";
import Image from "next/image";

const Lab = () => {
  const components: {
    bg: string;
    component: React.ReactNode;
    inspiration?: string;
    col_span?: 1 | 2;
  }[] = useMemo(
    () => [
      {
        bg: "#e9f2ef",
        component: <Components.Component4 />,
        inspiration:
          "https://www.uidesigndaily.com/posts/photoshop-movie-ticket-app-mobile-day-350",
      },
      {
        bg: "#eeeff9",
        component: <Components.Component2 />,
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-upgrade-plan-pricing-payment-day-1421",
      },
      {
        bg: "linear-gradient(135deg,#fbecf9,#f3ddf8)",
        component: <Components.Component5 />,
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-cookie-banner-cookies-message-notification-day-1015",
      },
      {
        bg: "#f1e8e6",
        component: <Components.Component1 />,
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-recipe-components-subscribe-tags-card-rating-day-1145",
      },
      {
        bg: "/assets/lab/components/3/bg.jpg",
        component: <Components.Component3 />,
        inspiration:
          "https://www.uidesigndaily.com/posts/sketch-profile-card-gradient-day-1377",
        col_span: 2,
      },
    ],
    [],
  );

  const components_ref = useRef<{
    slider: HTMLDivElement | null;
    buttons: { prev: HTMLButtonElement | null; next: HTMLButtonElement | null };
  }>({
    slider: null,
    buttons: {
      prev: null,
      next: null,
    },
  });

  const handleChangePage = useCallback((dir: 1 | -1) => {
    if (!components_ref.current.slider) return;

    components_ref.current.slider.scrollBy(
      components_ref.current.slider.clientWidth * dir,
      0,
    );
  }, []);

  useEffect(() => {
    if (!components_ref.current.slider) return;

    const handleButtons = () => {
      const slider = components_ref.current.slider;
      const { prev, next } = components_ref.current.buttons;

      if (!slider || !prev || !next) return;

      const can_go_left = slider.scrollLeft > 0;
      const can_go_right =
        slider.scrollLeft + slider.clientWidth + 10 < slider.scrollWidth;

      const changeButtonStyle = (btn: HTMLButtonElement, can_go: boolean) => {
        btn.classList.toggle("bg-[#363E41]", can_go);
        btn.classList.toggle("cursor-pointer", can_go);
        btn.querySelector("svg")!.style.fill = can_go
          ? "white"
          : "var(--color-text-secondary-dark)";
      };

      changeButtonStyle(prev, can_go_left);
      changeButtonStyle(next, can_go_right);
    };

    components_ref.current.slider.onscrollend = handleButtons;

    handleButtons();

    return () => {
      if (!components_ref.current.slider) return;

      components_ref.current.slider.onscrollend = null;
    };
  }, []);

  return (
    <section id="lab" className="w-screen flex flex-col pt-0!">
      <div className="relative w-full z-10 before:w-full before:h-px before:bg-secondary before:absolute before:bottom-0 before:z-5 before:left-0">
        <Seperator className="w-full fill-secondary z-10" />
      </div>

      <div className="w-full bg-secondary px-3 xs:px-6 not-lg:py-6">
        <div className="w-full max-w-max-width mx-auto flex flex-col items-center gap-6">
          <div className="w-full flex flex-col items-end gap-[inherit] md:justify-between md:flex-row md:items-center">
            <div className="w-full flex flex-col gap-4">
              <Title label="Experiments" tag="lab" variant="light" />

              <p className="text-text-secondary-dark!">
                This is my lab. Here i create interactive components to prove
                that <span className="text-white! font-medium!">EVERY</span>{" "}
                design can turn into reality.
              </p>
            </div>

            <div className="flex items-center gap-1">
              {components.length > 1 && (
                <>
                  <button
                    className="bg-[#363E41] p-4 rounded-full cursor-pointer transition duration-200 ease-out"
                    onClick={() => handleChangePage(-1)}
                    ref={(ref) => {
                      components_ref.current.buttons.prev = ref;
                    }}
                  >
                    <Icons.ChevronIcon className="w-10 aspect-square fill-white -rotate-90" />
                  </button>
                  <button
                    className="bg-[#363E41] p-4 rounded-full cursor-pointer transition duration-200 ease-out"
                    onClick={() => handleChangePage(1)}
                    ref={(ref) => {
                      components_ref.current.buttons.next = ref;
                    }}
                  >
                    <Icons.ChevronIcon className="w-10 aspect-square fill-white rotate-90" />
                  </button>
                </>
              )}
            </div>
          </div>

          <div
            className="w-full grid gap-[inherit] overflow-hidden snap-x snap-mandatory transition duration-500 ease-out [--col-w:100%] lg:[--col-w:calc(50%_-_1.5rem_/_2)] not-lg:[--adder:0]"
            ref={(ref) => {
              components_ref.current.slider = ref;
            }}
            style={
              {
                gridTemplateColumns: `repeat(calc(${components.length} + var(--adder, ${components.reduce(
                  (prev, cur) => prev + ((cur.col_span ?? 1) - 1),
                  0,
                )})), var(--col-w))`,
              } as React.CSSProperties
            }
          >
            {components.map(({ bg, component, inspiration, col_span }, idx) => (
              <div
                key={bg}
                className="relative shrink-0 snap-start relative w-full h-full bg-cover bg-center flex justify-center items-center p-2 rounded-lg overflow-hidden not-lg:col-span-1! sm:p-6"
                style={{
                  background: bg,
                  gridColumn: `span ${col_span}`,
                }}
              >
                {bg.startsWith("/") && (
                  <Image
                    src={bg}
                    fill
                    loading="lazy"
                    className="object-cover object-center"
                    alt={`component-${idx + 1}-bg`}
                  />
                )}

                {inspiration && (
                  <div className="absolute top-0 right-0 z-20">
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

      <div className="relative w-full z-10 before:w-full before:h-px before:bg-secondary before:absolute before:top-0 before:z-5 before:left-0">
        <Seperator className="w-full fill-secondary z-10 rotate-180" />
      </div>
    </section>
  );
};

export default Lab;
