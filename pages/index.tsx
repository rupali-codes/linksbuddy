import React, { useState } from "react";
import Head from "next/head";
import Logo from "components/logo/logo";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { IoMdGitBranch, IoIosStar } from "react-icons/io";
import {
  FaDiscord,
  FaGithub,
  FaXTwitter,
  FaArrowRightLong,
} from "react-icons/fa6";
import StarIcon from "../assets/icons/svg/heart.svg";
import HeartIcon from "../assets/icons/svg/heart.svg";
import Link from "next/link";
import Button from "components/Button";
import { sidebarData } from "../database/data";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, title, description }) => (
  <div className={`w-4/12 bg-slate-800 hover:bg-slate-700 rounded-md p-6`}>
    <Link href={href}>
      <div className={`flex items-center text-white gap-2 mb-3`}>
        {icon}
        {title}
      </div>
      <h3>{description}</h3>
    </Link>
  </div>
);

export default function Home() {
  const [welcome, setWelcome] = useState(true);
  const [community, setCommunity] = useState(true);
  const [resources, setResources] = useState(true);

  const handleWelcome = () => {
    setWelcome((prev) => !prev);
  };
  const handleCommunity = () => {
    setCommunity((prev) => !prev);
  };
  const handleResources = () => {
    setResources((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>LinksHub</title>
        <meta name="title" content="LinksHub" />
        <meta
          name="description"
          content="LinksHub is the ultimate hub of ready-to-use tech resources. Discover free tools and libraries to streamline your development process and build better projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="LinksHub, developers, free resources, tools, software, libraries, frameworks, applications, websites"
        />
        <meta name="author" content="Rupali Haldiya" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph */}
        <meta property="og:url" content="https://linkshub.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="og:description"
          content="LinksHub aims to provide developers with access to a wide range of free resources and tools that they can use in their work."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png"
        />
        <meta property="og:site_name" content="LinksHub" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://linkshub.dev" />
        <meta
          property="twitter:title"
          content="LinksHub: A hub of ready-to-use tech resources"
        />
        <meta
          property="twitter:description"
          content="LinksHub aims to provide developers with access to a wide range of free resources and tools that they can use in their work."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dhnkuonev/image/upload/v1683805184/linkshub_gcahgs.png"
        />
        <meta name="language" content="English" />
        <meta
          name="twitter:site"
          content="https://twitter.com/linkshubdotdev"
        />
        <meta property="discord:server" content="1064977356198006805" />
        <meta
          property="discord:invite"
          content="https://discord.com/invite/NvK67YnJX5"
        />

        <link rel="icon" href="/icon.png" className="rounded-full" />
      </Head>
      <section
        data-custom="restrict-click-outside"
        className="flex max-h-[calc(100vh-165px)] flex-col m-3 p-5 overflow-y-scroll"
      >
        <section>
          <div
            className={
              "flex items-center justify-between transition-all duration-700 ease-in cursor-pointer"
            }
            onClick={handleWelcome}
          >
            <div className={"text-2xl text-white"}>Welcome!</div>
            {welcome ? <RxCaretDown size={50} /> : <RxCaretRight size={50} />}
          </div>
          {welcome && (
            <>
              <span>
                Welcome aboard, we&apos;re excited to have you at LinksHub!
              </span>
              <div className={"h-52 rounded-lg dark:bg-slate-800 my-2"}>
                <div className={"h-full flex items-center justify-around"}>
                  <div className={"w-6/12"}>
                    <Logo />
                    <p className={"my-2"}>
                      LinksHub aims to provide developers with access to a wide
                      range of free resources and tools that they can use in
                      their work. These resources include links to free
                      software, libraries, frameworks, and other tools that can
                      be used to build and deploy applications and websites.
                    </p>
                  </div>
                  <div className={"flex items-center justify-center gap-10"}>
                    <div className="bg-[#575448] text-white rounded-lg w-[160px] text-3xl p-4">
                      <IoIosStar className="bg-[#FBD449] rounded-full text-black text-3xl p-1" />
                      <div className="text-3xl my-1">
                        336<span className="text-lg m-1">stars</span>
                      </div>
                      <Link href={""}>
                        <button className="text-base p-2 w-32 bg-[#FBD449] text-black rounded-lg text-center">
                          Give a star
                        </button>
                      </Link>
                    </div>
                    <div className="bg-[#403B56] text-white rounded-lg w-[160px] text-3xl p-4">
                      <IoMdGitBranch className="bg-[#714EFF] rounded-full text-white text-3xl p-1" />
                      <div className="text-3xl my-1">
                        447<span className="text-lg m-1">forks</span>
                      </div>
                      <Link href={""}>
                        <button className="text-base w-32 bg-[#714EFF] text-white rounded-lg p-2 text-center">
                          Contribute now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
        <section>
          <div
            className="flex items-center justify-between transition-all duration-700 ease-in cursor-pointer"
            onClick={handleCommunity}
          >
            <div className="text-2xl text-white">Community</div>
            {community ? <RxCaretDown size={50} /> : <RxCaretRight size={50} />}
          </div>
          {community && (
            <div className="transition-all duration-700 ease-in">
              Get involved in our community. Everyone is welcome!
              <div className="flex items-center justify-center gap-20 my-2">
                {/* Twitter */}
                <SocialLink
                  href="https://twitter.com/linkshubdotdev"
                  icon={<FaXTwitter size={30} />}
                  title="Twitter"
                  description="For announcements, tips, and general information."
                />

                {/* Discord */}
                <SocialLink
                  href="https://discord.com/invite/NvK67YnJX5"
                  icon={<FaDiscord size={30} />}
                  title="Discord"
                  description="To get involved in the community, ask questions, and share tips."
                />

                {/* Github */}
                <SocialLink
                  href="https://github.com/rupali-codes/LinksHub"
                  icon={<FaGithub size={30} />}
                  title="Github"
                  description="To report bugs, request features, and contribute to the project."
                />
              </div>
            </div>
          )}
        </section>
        <section>
          <div className={"flex items-center justify-between"}>
            <div className={"text-2xl text-white"}>Resources</div>
            <div
              className={"transition-all duration-700 ease-in"}
              onClick={handleResources}
            >
              {resources ? (
                <RxCaretDown size={50} />
              ) : (
                <RxCaretRight size={50} />
              )}
            </div>
          </div>
          <div className={`items-center transition-all duration-700 ease-in`}>
            <span>
              We&apos;ve curated a wealth of resources just for you. Go ahead
              and explore at your own pace.
            </span>
            <ul className="flex flex-wrap my-6 gap-5">
              {resources &&
                sidebarData.map((el, i) => (
                  <Link
                    key={i}
                    href={`/${el.category}`}
                    className="w-[calc(33.33%-1rem)] border-solid border border-slate-800 bg-slate-800 hover:bg-slate-700 flex items-center rounded-lg justify-between p-4 relative overflow-hidden group"
                  >
                    <li>
                      {el.category.toUpperCase()}
                      <FaArrowRightLong className="hidden absolute right-3 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ease-in-out group-hover:block" />
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </section>
        <section>
          <div className="bg-slate-800 rounded-lg shadow-md flex items-center justify-between p-4">
            <div className={"text-yellow-400"}>
              <StarIcon />
            </div>
            <div className="text-lg w-9/12 m-2">
              <h1>More awesome resources are coming soon!</h1>
              <p className="text-gray-500">
                No extensive research is required to discover valuable
                resources. We&apos;ve been diligently curating a wealth of
                materials to make your journey smoother. Show us some love and
                support our efforts in simplifying your path to success.
              </p>
            </div>
            <Button
              label="Sponsor"
              icon={<HeartIcon />}
              variant="pale"
              link="https://github.com/sponsors/rupali-codes"
              className="hidden sm:flex"
            />
          </div>
        </section>
      </section>
    </>
  );
}
