"use client";

import Title from "@/components/title";
import Image from "next/image";
import { Fragment, useRef } from "react";

const Certificates = () => {
  const dialog_ref = useRef<HTMLDialogElement>(null);

  return (
    <section
      id="certificates"
      className="w-full flex flex-col gap-6 items-center"
    >
      <dialog
        open={false}
        ref={dialog_ref}
        onClick={(e) => {
          if (e.target === dialog_ref?.current) dialog_ref.current?.close();
        }}
      >
        <img alt="certificate-upscale" />
      </dialog>

      <Title label="Certificates" tag="certificates" orientation="center" />

      <div className="w-fit grid grid-cols-1 gap-2 md:grid-cols-6">
        {new Array(5).fill(0).map((_, idx, arr) => {
          const in_row = Math.floor(idx / 3);
          const last_row = Math.floor(arr.length / 3);

          return (
            <Fragment key={idx}>
              {in_row == last_row && idx % 3 == 0 && (
                <div className="not-md:hidden"></div>
              )}

              <div
                className="group w-fit max-w-100 h-full rounded-lg overflow-hidden cursor-pointer border-2 border-solid border-section md:col-span-2"
                onClick={() => {
                  if (!dialog_ref.current) return;

                  const img = dialog_ref.current.querySelector("img")!;

                  img.src = `/assets/certificates/${idx + 1}.jpg`;
                  img.alt = `certificate-${idx + 1}`;

                  img.onload = () => {
                    if (img.width > img.height)
                      img.style.width = "min(720px,100vw)";
                    else img.style.width = "min(512px,100vw)";

                    dialog_ref.current?.showModal();
                    img.onload = null;
                  };
                }}
              >
                <Image
                  src={`/assets/certificates/${idx + 1}.jpg`}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-auto h-auto object-cover transition duration-200 ease-out group-hover:scale-105"
                  alt={`certificate-${idx + 1}`}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
