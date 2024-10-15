import Head from "next/head";
import localFont from "next/font/local";

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
 
  return (
    <>
      <Head>
        <title>Nonso Anetoh</title>
        <meta name="description" content="Nonso Anetoh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Cache-control" content="no-cache" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${CHPublic.className}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100dvh",
          display: "grid",
          placeItems: "center"
        }}
      >
        <p>Under Construction</p>
      </main>
    </>
  );
}
