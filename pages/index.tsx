import React from 'react'
import Head from 'next/head'
import Logo from 'components/logo'
import TypewriterComponent from 'typewriter-effect'
import { sidebarData } from '../database/data'
export default function Home() {
  //storing sub categories names for using in typewriter effect
  const subCategoriesNames: string[] = []
  sidebarData.forEach((c) => {
    c.subcategory.forEach((a) => {
      subCategoriesNames.push(a.name.toUpperCase())
    })
  })
  return (
    <>
      <Head>
        <title>LinksHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" className="rounded-full" />
      </Head>
      <section className="flex min-h-[calc(100%-68px)] flex-col">
        <div className=" m-auto flex flex-col  items-start gap-2">
          <div className="m-auto md:text-7xl text-5xl gap-2 flex items-center justify-center">
            <Logo />
            <span>👾</span>
          </div>
          <article className="flex flex-col mt-6 justify-center items-start">
            <p className="text-xl">Navigate through menu for</p>
            <TypewriterComponent
              options={{
                strings: subCategoriesNames,
                wrapperClassName: 'text-xl text-violet-500',
                cursorClassName: 'text-xl text-violet-500',
                autoStart: true,
                loop: true,
              }}
            />
          </article>
        </div>
      </section>
    </>
  )
}
