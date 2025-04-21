"use client";
// import dynamic from "next/dynamic";
import promo from "../../public/assets/promos/promo_24_mayo.png";
import Image from "next/image";

export default function Home() {
  // const VideoPlayer = dynamic(() => import("../components/video/video"), {
  //   ssr: false,
  // });
  return (
    <div className="home-container">
      <h2>Bif 5: El evento empieza el día 24 de mayo a las 6pm</h2>
      {/* <VideoPlayer
        url="https://servidorcadefi.inowu.dev/live/hls/bif.m3u8"
        width="100%"
        loop={false}
        muted={false}
        controls={true}
      /> */}
      <div className="relative w-full h-full rounded-xl bg-neutral-500 overflow-hidden">
        <Image src={promo} alt="" className="object-cover" fill />
      </div>
    </div>
  );
}
