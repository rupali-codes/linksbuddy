import Head from "next/head";
import Logo from "../components/Logo/Logo";
import TopBar from "../components/TopBar/TopBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>LinksHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" className="rounded-full" />
      </Head>
      <main className="h-screen flex flex-col">
        <TopBar header="Home" />
        <div className="m-auto md:text-7xl text-5xl gap-2 flex items-center justify-center">
          <Logo />
          <span>👾</span>
        </div>
      </main>
    </>
  );
}
