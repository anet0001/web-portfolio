import { GenericComponent } from "@/types";
import { gsap } from "gsap";
import Link from "next/link";
import React, { FC } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const ContactList: FC<GenericComponent> = ({ showLoader }) => {
  const scope = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (showLoader) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.from("a", {
        autoAlpha: 0,
        y: 100,
        stagger: 0.07,
        delay: 0.3,
      });
    }, scope);

    return () => ctx.revert();
  }, [showLoader]);

  return (
    <ul className="contact-list" ref={scope}>
      <li>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/anet0001"
        >
          Github
        </Link>
      </li>
      <li>
        <Link href="mailto:nonsoanetoh@gmail.com">Email Me</Link>
      </li>
    </ul>
  );
};

export default ContactList;
