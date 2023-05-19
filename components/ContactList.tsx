import Link from "next/link";
import React, { FC } from "react";

const ContactList: FC = () => {
  return (
    <ul className="contact-list">
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
