import Clock from "@/components/Clock";
import Logo from "@/components/Logo";
import ProjectList from "@/components/ProjectList";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import TitleCard from "@/components/TitleCard";
import Loader from "@/components/shared/Loader";
import { Timeline } from "@/types/animation";
import { gsap } from "gsap";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [timeline, setTimeline] = useState<Timeline | undefined>();
  const titleCardRef = useRef(null);
  const titleCardLineOne = useRef(null);
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

  useEffect(() => {
    timeline && timeline;
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
      <main ref={scope} className="container">
        <Logo {...config} />
        <ThemeSwitcher {...config} />
        <ProjectList {...config} />
        <TitleCard {...config} />
        <Clock {...config} />
      </main>
    </>
  );
}
