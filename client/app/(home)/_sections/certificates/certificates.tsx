"use client";

import Title from "@/components/title";
import { Fragment, useRef } from "react";

const Certificates = () => {
  const dialog_ref = useRef<HTMLDialogElement>(null);

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <dialog
        open={false}
        ref={dialog_ref}
        className="m-auto border-none outline-none rounded-lg overflow-hidden backdrop:backdrop-blur-xl backdrop:bg-secondary/50"
        onClick={(e) => {
          if (e.target === dialog_ref?.current) dialog_ref.current?.close();
        }}
      >
        <img />
      </dialog>

      <Title label="Certificates" tag="certificates" orientation="center" />

      <div className="w-full grid grid-cols-6 gap-2">
        {new Array(5).fill(0).map((_, idx, arr) => {
          const in_row = Math.floor(idx / 3);
          const last_row = Math.floor(arr.length / 3);

          return (
            <Fragment key={idx}>
              {in_row == last_row && idx % 3 == 0 && <div></div>}

              <div
                className="group col-span-2 w-full h-full rounded-lg overflow-hidden cursor-pointer border-2 border-solid border-section"
                onClick={() => {
                  if (!dialog_ref.current) return;

                  const img = dialog_ref.current.querySelector("img")!;

                  img.src = `/assets/certificates/${idx + 1}.jpg`;
                  img.alt = `certificate-${idx + 1}`;

                  dialog_ref.current.showModal();
                }}
              >
                <img
                  src={`/assets/certificates/${idx + 1}.jpg`}
                  className="w-full h-full object-cover transition duration-200 ease-out group-hover:scale-105"
                  alt={`certificate-${idx + 1}`}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
