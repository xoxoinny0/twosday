"use client";
import { PORTAL_MODAL_CONTAINER_ID } from "@/constances";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import css from "./Modal.module.scss";

const mutationObserverOption: MutationObserverInit = {
  childList: true,
  subtree: false,
};

export default function PortalModalContainer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let observer: MutationObserver | null = null;

    ref.current.childNodes.length > 0
      ? ref.current.classList.add("active")
      : ref.current.classList.remove("active");

    observer = new MutationObserver(() => {
      const size = ref.current?.childNodes.length || 0;
      ref.current?.classList.toggle("active", size > 0);
    });

    observer.observe(ref.current, mutationObserverOption);

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  return (
    <div id={PORTAL_MODAL_CONTAINER_ID} className={classNames(css.modalContainer)} ref={ref} />
  );
}
