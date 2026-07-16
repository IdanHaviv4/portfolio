"use client";

import { projects } from "@/constants";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { default as Proj } from "@/app/(projects)/project/[id]/page";

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
      className="p-10 overflow-y-auto"
    >
      <Proj is_modal />
    </dialog>
  );
};

export default Project;
