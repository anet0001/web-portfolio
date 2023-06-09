import Clock from "@/components/Clock";
import Logo from "@/components/Logo";
import ProjectList from "@/components/ProjectList";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import TitleCard from "@/components/TitleCard";
import Loader from "@/components/shared/Loader";
import { gsap } from "gsap";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import GridBackground from "@/components/shared/GridBackground";
import ContactList from "@/components/ContactList";

const CHPublic = localFont({
  src: [
    {
      path: "../public/fonts/CH-public/CooperHewitt-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CH-public/CooperHewitt-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/CH-public/CooperHewitt-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/CH-public/CooperHewitt-Book.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | undefined>();
  const scope = useRef(null);

  const config = {
    showLoader,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTimeline(tl);
    }, scope);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    timeline && timeline.reversed(!showLoader);
  }, [timeline, showLoader]);

  // useEffect(() => {
  //   timeline && timeline;
  // }, [timeline, showLoader]);

  return (
    <>
      <Head>
        <title>Nonso Anetoh</title>
        <meta name="description" content="Nonso Anetoh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Cache-control" content="no-cache" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader showLoader={showLoader} setShowLoader={setShowLoader} />
      <main ref={scope} className={`${CHPublic.className}`}>
        <GridBackground />
        <Logo {...config} />
        <ContactList {...config} />
        <ThemeSwitcher {...config} />
        <ProjectList {...config} />
        <TitleCard {...config} />
        <Clock {...config} />
      </main>
    </>
  );
}
