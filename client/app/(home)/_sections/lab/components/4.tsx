"use client";

import { Icons } from "@/components";
import moment from "moment";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Fragment } from "react/jsx-runtime";

const Component4 = () => {
  const booked_seats: string[] = useMemo(
    () => ["0,1", "1,1", "1,2", "1,5", "2,0", "2,1", "2,6"],
    [],
  );

  const cinema = useMemo(() => ({ rows: 4, cols: 6 }), []);

  const [selected, setSelected] = useState<string[]>([]);

  const price = 3.9;

  return (
    <div className="bg-[#f9fafc] rounded-lg overflow-hidden grid grid-cols-[min-content]">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src="/assets/lab/components/4/movie-banner.jpg"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          alt="movie-banner"
        />

        <div className="absolute top-0 left-0 w-full h-full z-10 flex items-end">
          <div className="w-full px-4 py-2 bg-black/10 backdrop-blur-md flex flex-col">
            <span className="text-[1rem]! text-white! font-medium! leading-4">
              Minions and Monsters
            </span>
            <span
              className="text-[0.8rem]! text-[#ebebeb]!"
              suppressHydrationWarning
            >
              {moment().utc().format("MMM DD, HH:mm")} · Grand Rex, Paris
            </span>
          </div>
        </div>
      </div>

      <div
        className="w-fit grid gap-2 p-4"
        style={{
          gridTemplateRows: `repeat(${cinema.rows + 2},min-content)`,
          gridTemplateColumns: `repeat(${cinema.cols + 2},min-content)`,
        }}
      >
        <div
          className="w-full flex justify-center items-center gap-3 mb-4"
          style={{
            gridColumn: `span ${cinema.cols + 2}`,
          }}
        >
          <div className="flex items-center gap-1">
            <Icons.CouchIcon className="w-4 aspect-square fill-[#5b889d]" />
            <span className="text-[0.8rem]! text-[#63747a]!">Available</span>
          </div>
          <div className="flex items-center gap-1">
            <Icons.CouchIcon className="w-4 aspect-square fill-[#c8d8df]" />
            <span className="text-[0.8rem]! text-[#63747a]!">Booked</span>
          </div>
          <div className="flex items-center gap-1">
            <Icons.CouchIcon className="w-4 aspect-square fill-[#ed407a]" />
            <span className="text-[0.8rem]! text-[#63747a]!">Selected</span>
          </div>
        </div>

        {new Array(cinema.rows).fill(0).map((_, row, { length }) => (
          <Fragment key={row}>
            <span className="text-[0.8rem]! text-[#abb2b4]! w-4 leading-5">
              {["A", "B", "C", "D", "E", "F", "G"][length - row - 1]}
            </span>

            {new Array(cinema.cols + 1).fill(0).map((_, col, { length }) => {
              if (col == Math.floor(length / 2)) return <div key={col}></div>;

              const slug = `${row},${col}`;
              const is_booked = booked_seats.includes(`${row},${col}`);
              const is_selected = selected.includes(`${row},${col}`);

              return (
                <Icons.CouchIcon
                  key={col}
                  className={`w-6 aspect-square ${is_booked ? "fill-[#c8d8df]" : is_selected ? "fill-[#ed407a] cursor-pointer" : "fill-[#5b889d] cursor-pointer"}`}
                  onClick={() => {
                    if (is_booked) return;

                    setSelected((prev) => {
                      if (!is_selected) return [...prev, slug];

                      return prev.toSpliced(prev.indexOf(slug), 1);
                    });
                  }}
                />
              );
            })}
          </Fragment>
        ))}

        <div></div>

        <div
          className="w-full flex flex-col items-center gap-[inherit] mt-4"
          style={{
            gridColumn: `span ${cinema.cols + 1}`,
          }}
        >
          <span className="text-[0.8rem]! text-[#5b889d]! leading-4">
            Screen
          </span>
          <div className="w-full h-px rounded-full bg-[#5b889d]"></div>
        </div>
      </div>

      <div className="w-full p-4 bg-[#ec407a] flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-white! font-medium! leading-4">
            ${(selected.length * price).toFixed(2)}
          </span>
          <span className="text-[#ebebeb]! text-[0.8rem]!">
            {selected.length}&times;{price.toFixed(2)}$
          </span>
        </div>

        <button
          suppressHydrationWarning
          disabled={selected.length <= 0}
          className={`w-fit h-full px-6 text-[1rem]! bg-[#ffffff] rounded-lg cursor-pointer transition duration-200 ease-in-out disabled:cursor-auto disabled:bg-[#f2f2f2] disabled:text-[#63747a]!`}
        >
          {selected.length <= 0 ? "Select tickets" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Component4;
