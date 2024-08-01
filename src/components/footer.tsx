import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="container grid grid-cols-2 lg:grid-cols-4 mx-auto gap-5 lg:gap-10 xl:gap-16 mt-24 py-10 text-sm">
      <section>
        <p className="text-white">About us</p>
        <ul>
          <Link href="https://www.dreamfinity.io/" target="_blank">
            <li>Dreamfinity LLC.</li>
          </Link>
          <Link
            href="https://dreamfinity.gitbook.io/pug-life-by-dreamfinity/overview/dreamfinity/team"
            target="_blank"
          >
            <li>Team</li>
          </Link>
          <Link
            href="https://dreamfinity.gitbook.io/pug-life-by-dreamfinity/fundamentals/puglife-terms-of-service"
            target="_blank"
          >
            <li>Terms of Service</li>
          </Link>
        </ul>
      </section>
      <section>
        <p className="text-white">Contact us</p>
        <ul>
          <Link href="https://www.discord.gg/puglife" target="_blank">
            <li>Discord</li>
          </Link>
          <Link href="https://t.me/+UiZzaCzPaqU0YTFi" target="_blank">
            <li>Telegram</li>
          </Link>
          <Link href="mailto:puglifegame@gmail.com" target="_blank">
            <li>E-Mail</li>
          </Link>
        </ul>
      </section>
      <section>
        <p className="text-white">FAQ</p>

        <ul>
          <Link
            href="https://www.youtube.com/watch?v=4f7GUHL6zCQ"
            target="_blank"
          >
            <li>How To Play</li>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=4f7GUHL6zCQ"
            target="_blank"
          >
            <li>Video</li>
          </Link>
        </ul>
      </section>
      <section>
        <p className="text-white">Social Media</p>
        <ul>
          <Link href="https://twitter.com/puglifegame" target="_blank">
            <li>Twitter</li>
          </Link>
          <Link
            href="https://dreamfinity.gitbook.io/pug-life-by-dreamfinity"
            target="_blank"
          >
            <li>Gitbook</li>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCeUUKx3_T_aMlqWb2b0q3OA"
            target="_blank"
          >
            <li>Youtube</li>
          </Link>
          <Link href="https://www.discord.gg/puglife" target="_blank">
            <li>Discord</li>
          </Link>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
