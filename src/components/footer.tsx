import Link from "next/link";
import React from "react";
import {
  FaBlog,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="container grid grid-cols-2 lg:grid-cols-4 mx-auto gap-5 lg:gap-10 xl:gap-16 mt-24 py-6 text-sm">
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
      <div className="flex items-center justify-between container py-4">
        <article>
          <Link href={"/"} className="text-2xl text-primary font-bold">
            PugLife
          </Link>
          <p className="italic text-sm">
            PugLife © {new Date().getFullYear()} All rights reserved.
          </p>
        </article>
        <aside className="flex gap-2">
          <Link
            href="https://medium.com/@puglifegame"
            target="_blank"
            aria-label="Medium"
          >
            <FaMedium />
          </Link>
          <Link
            href="https://mirror.xyz/0xC123393D1942d5Dc363C47533C1C7240723A55aE/1kiwetvKgJWHJhbW6lJNEkWwENZYCNY4atv7Ry-PgWQ"
            target="_blank"
            aria-label="Mirror.XYZ"
          >
            <FaBlog />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCeUUKx3_T_aMlqWb2b0q3OA"
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://twitter.com/puglifegame"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://dreamfinity.gitbook.io/pug-life-by-dreamfinity"
            target="_blank"
            aria-label="GitBook"
          >
            <FaGithub />
          </Link>
        </aside>
      </div>
    </>
  );
};

export default Footer;
