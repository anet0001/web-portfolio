import Clock from "@/components/Clock";
import ProjectList from "@/components/ProjectList";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import TitleCard from "@/components/TitleCard";
import Loader from "@/components/shared/Loader";
import { gsap } from "gsap";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

type Timeline = gsap.core.Timeline | undefined;

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [timeline, setTimeline] = useState<Timeline | undefined>();
  const titleCardRef = useRef(null);
  const scope = useRef(null);

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

  useEffect(() => {
    timeline &&
      timeline.to(".test", {
        y: 100,
        duration: 3,
      });
  }, [timeline, showLoader]);

  return (
    <>
      <Head>
        <title>Kanoa App</title>
        <meta name="description" content="Nextjs App Starter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loader showLoader={showLoader} setShowLoader={setShowLoader} />
      <main ref={scope}>
        <ThemeSwitcher />
        <ProjectList />
        <Clock />
        <TitleCard ref={titleCardRef} />
      </main>
    </>
  );
}
