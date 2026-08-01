"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { default as Proj } from "@/app/(projects)/project/[id]/page";
import { Cursor } from "@/components/cursor";

const Project = () => {
  const router = useRouter();

  const dialog_ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialog_ref.current) return;

    dialog_ref.current.showModal();
    dialog_ref.current.onclose = () => {
      router.back();
    };

    return () => {
      if (!dialog_ref.current) return;

      dialog_ref.current.onclose = null;
    };
  }, []);

  return (
    <dialog
      ref={dialog_ref}
      onClick={(e) => {
        if (e.target === dialog_ref?.current) dialog_ref.current?.close();
      }}
      className="overflow-y-auto"
    >
      <Proj is_modal />

      <Cursor />
    </dialog>
  );
};

export default Project;
