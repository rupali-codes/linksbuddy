import React from "react";
import Head from "next/head";
import { SideNavbar } from "../components/SideNavbar";
import { MainContainer } from "../components/MainContainer";
import { LinksContainer } from "../components/LinksConatiners";
import GeneralLayout from "../layouts/GeneralLayout";
import Logo from "../components/logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>LinksHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" className="rounded-full" />
      </Head>
      <main className="h-screen flex ">
        <div className="m-auto md:text-7xl text-5xl  flex items-center">
        <Logo className=""/>
        👾
        </div>
        </main>
       
    </>
  );
}
