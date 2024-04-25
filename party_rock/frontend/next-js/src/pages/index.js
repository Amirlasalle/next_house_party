import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import join from "./join";
import create from "./create";
import room from "./room";
import about from "./about";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import homePic from "../../public/images/home/party-rock-home.png";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

function HomePage() {
  const router = useRouter();
  const [roomCode, setRoomCode] = useState("");

  useEffect(() => {
    async function fetchRoomCode() {
      try {
        const response = await fetch("127.0.0.1:8000/api/user-in-room");
        const data = await response.json();
        setRoomCode(data.code);
      } catch (error) {
        console.error("Error fetching room code:", error);
      }
    }

    fetchRoomCode();
  }, []);

  const renderHomePage = () => {
    return (
      <>
        <Head>
          <title>Party Rock</title>
          <meta
            name="Miro Productions"
            content="Welcome to Party Rock! Stream your favorite songs with friends and family via Spotify! 🎵 🎶 "
          />
        </Head>

        <TransitionEffect />

        <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
          <Layout className="pt-0 md:pt-8 sm:pt-0">
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full minlg:hidden lg:text-center">
                <AnimatedText
                  text="Welcome To Party Rock"
                  className="!text-5xl !text-left xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
              </div>
              <div className="w-1/3 mx-5 md:w-1/2">
                <Image
                  src={homePic}
                  alt="Party Rock"
                  className="w-full h-full lg:hidden md:inline-block md:w-full"
                  priority
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                />
              </div>
              <div className="w-1/2 minlg:flex minlg:flex-col items-center self-center lg:w-full lg:text-center hidden">
                <AnimatedText
                  text="Welcome To Party Rock"
                  className="!text-5xl !text-left xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />

                <h6 className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  The app wh6ere friends and family sync up to stream the same
                  Spotify tunes together! Create or join rooms with unique codes
                  and enjoy synchronized music playback for the ultimate shared
                  listening experience.
                </h6>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link
                    href="/join"
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  >
                    Join A room
                  </Link>
                  <Link
                    href="/create"
                    className="flex items-center mx-3  bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark

                dark:bg-spotifyGreen dark:text-dark hover:dark:bg-dark hover:dark:text-spotifyGreen hover:dark:border-spotifyGreen md:p-2 md:px-4 md:text-base"
                  >
                    Create A room
                  </Link>
                </div>
              </div>
              <div className="flex items-center self-start mt-2 lg:self-center minlg:hidden">
                <Link
                  href="/join"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Join A room
                </Link>
                <Link
                  href="/create"
                  className="flex items-center mx-3  bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark

                dark:bg-spotifyGreen dark:text-dark hover:dark:bg-dark hover:dark:text-spotifyGreen hover:dark:border-spotifyGreen md:p-2 md:px-4 md:text-base"
                >
                  Create A room
                </Link>
              </div>
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center minlg:hidden">
                <h6 className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  The app where friends and family sync up to stream the same
                  Spotify tunes together! Create or join rooms with unique codes
                  and enjoy synchronized music playback for the ultimate shared
                  listening experience.
                </h6>
              </div>
            </div>
          </Layout>
        </main>
      </>
    );
  };

  const clearRoomCode = () => {
    setRoomCode("");
  };

  useEffect(() => {
    if (roomCode) {
      router.push(`/room/${roomCode}`);
    }
  }, [roomCode]);

  return (
    <div id="root" className="flex-column justify-center items-center">
      {roomCode ? (
        router.push(`/room/${roomCode}`)
      ) : (
        renderHomePage()
      )}
    </div>
  );
}



export default HomePage;
