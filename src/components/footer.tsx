import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="container grid grid-cols-2 lg:grid-cols-4 mx-auto gap-5 lg:gap-10 xl:gap-16 mt-24 py-10 text-sm">
      <section>
        <p className="text-white">About us</p>
        <ul>
          <li>Dreamfinity LLC.</li>
          <li>Team</li>
          <li>Terms of Service</li>
        </ul>
      </section>
      <section>
        <p className="text-white">Contact us</p>
        <ul>
          <li>Discord</li>
          <li>Telegram</li>
          <li>E-Mail</li>
        </ul>
      </section>
      <section>
        <p className="text-white">FAQ</p>
        <ul>
          <li>How To Play</li>
          <li>Video</li>
        </ul>
      </section>
      <section>
        <p className="text-white">Social Media</p>
        <ul>
          <li>Twitter</li>
          <li>Gitbook</li>
          <li>Youtube</li>
          <li>Discord</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
