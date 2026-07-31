"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

const Component6 = () => {
  const imgs_ref = useRef<HTMLImageElement[]>([]);
  const current_idx = useRef<number | null>(null);
  const interval_ref = useRef<NodeJS.Timeout | null>(null);
  const pointer_ref = useRef<{
    pos: { x: number; y: number } | null;
    is_clicking: boolean;
  }>({ pos: null, is_clicking: false });

  const imgs = useMemo(
    () => [
      "https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553114836-026cecec9778?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1771838026270-28fd7e3bef1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1550236520-7050f3582da0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfDF8MHx8fDI%3D",
      "https://images.unsplash.com/photo-1639760181882-63c4e9d703db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589223050279-18d1f14059cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [],
  );

  const IMGS_TO_SHOW = 5;

  useEffect(() => {
    const container = imgs_ref.current[0].parentNode! as HTMLDivElement;

    if (!container) return;

    container.onpointermove = (e) => {
      pointer_ref.current.pos = {
        x: e.clientX,
        y: e.clientY,
      };

      if (interval_ref.current) return;

      interval_ref.current = setInterval(() => {
        // on start, has to be in view

        const visible_imgs = imgs_ref.current.filter(
          (img) => !img.classList.contains("opacity-0"),
        );

        const hideImg = (img: HTMLImageElement) => {
          img.classList.add("opacity-0");
          img.style.zIndex = "0";
          img.style.scale = "0.8";
          img.style.rotate = `${-parseInt(img.style.rotate)}deg`;
        };

        const hideLastImg = () => {
          const current_at = visible_imgs.findIndex(
            (_, idx) => idx == current_idx.current,
          );

          const idx = (current_at + 1) % visible_imgs.length;
          const img = visible_imgs.at(idx)!;

          hideImg(img);

          visible_imgs.splice(idx, 1);

          return idx;
        };

        if (!pointer_ref.current.pos) {
          // not in view
          if (!visible_imgs.length) {
            // no visible images
            current_idx.current = null;
            clearInterval(interval_ref.current!);
            interval_ref.current = null;
            return;
          }

          return hideLastImg();
        }

        // in view

        if (pointer_ref.current.is_clicking) return;

        const calcCurrentIdx = () => {
          current_idx.current =
            ((current_idx.current ??
              imgs_ref.current.findLastIndex(
                (img) => !img.classList.contains("opacity-0"),
              )) +
              1) %
            imgs_ref.current.length;
        };

        const showImg = (img: HTMLImageElement) => {
          if (!pointer_ref.current.pos || !container) return;

          const { x, y } = container.getBoundingClientRect();

          img.classList.remove("opacity-0");
          img.style.top = `${pointer_ref.current.pos.y - y}px`;
          img.style.left = `${pointer_ref.current.pos.x - x}px`;
          img.style.rotate = `${Math.random() * 20 - 10}deg`;
          img.style.scale = "1";
        };

        const splice_at =
          visible_imgs.length >= IMGS_TO_SHOW
            ? hideLastImg()
            : visible_imgs.length;

        calcCurrentIdx();

        const img_to_show = imgs_ref.current.at(current_idx.current!)!;

        visible_imgs.splice(splice_at, 0, img_to_show);

        if (current_idx.current == null) return;

        showImg(img_to_show);

        for (let i = 0; i < visible_imgs.length; i++)
          visible_imgs.at(
            (splice_at + i + 1) % visible_imgs.length,
          )!.style.zIndex = `${i + 1}`;
      }, 150);
    };

    container.onpointerdown = () => {
      pointer_ref.current.is_clicking = true;
    };

    container.onpointerup = () => {
      pointer_ref.current.is_clicking = false;
    };

    container.onpointerleave = () => {
      pointer_ref.current.is_clicking = false;
      pointer_ref.current.pos = null;
    };

    return () => {
      container.onpointermove = null;
      container.onpointerdown = null;
      container.onpointerup = null;
      container.onpointerleave = null;
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center gap-2 cursor-pointer">
      {imgs.map((img, idx) => (
        <Image
          ref={(ref) => {
            imgs_ref.current.push(ref!);
          }}
          loading="lazy"
          key={idx}
          src={img}
          width={500}
          height={500}
          className="absolute top-0 left-0 -translate-1/2 w-auto h-64 opacity-0 rounded-lg transition-[opacity,rotate,scale] duration-200 ease-out"
          alt={`img-${idx}`}
          style={{
            zIndex: "0",
          }}
        />
      ))}

      <span className="text-text-secondary-dark! xs:text-[1.25rem]!">
        Move to discover the beauty of
      </span>
      <span className="text-[3rem]! leading-12! font-bold font-['Edu_VIC_WA_NT_Hand']! bg-linear-to-r from-[#37e6af] to-[#8bd457] bg-clip-text text-transparent! tracking-tight xs:leading-20! xs:text-[5rem]!">
        NATURE
      </span>
      <span className="text-text-secondary-dark! xs:text-[1.25rem]!">
        Hold to enjoy it!
      </span>
    </div>
  );
};

export default Component6;
