import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { Collapse } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";

const CreateRoomPage = ({
  votesToSkip: initialVotesToSkip = 2,
  guestCanPause: initialGuestCanPause = true,
  update = false,
  roomCode = null,
  updateCallback = () => {},
}) => {
  const [guestCanPause, setGuestCanPause] = useState(initialGuestCanPause);
  const [votesToSkip, setVotesToSkip] = useState(initialVotesToSkip);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const handleVotesChange = (e) => {
    setVotesToSkip(e.target.value);
  };

  const handleGuestCanPauseChange = (e) => {
    setGuestCanPause(e.target.value === "true" ? true : false);
  };

  const handleRoomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
      }),
    };
    fetch("/api/create-room", requestOptions) // Update the URL path
      .then((response) => response.json())
      .then((data) => router.push("/room/" + data.code))
      .catch((error) => setErrorMsg("Error creating room..."));
  };

  const handleUpdateButtonPressed = () => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
        code: roomCode,
      }),
    };
    fetch("/api/update-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          setSuccessMsg("Room updated successfully!");
        } else {
          setErrorMsg("Error updating room...");
        }
        updateCallback();
      })
      .catch((error) => setErrorMsg("Error updating room..."));
  };

  const renderCreateButtons = () => {
    return (
      <div className="flex flex-col items-center mt-2">
        <button
          className=" bg-spotifyGreen text-white rounded-lg px-4 py-2 mb-2 hover:bg-spotifyLight "
          onClick={handleRoomButtonPressed}
        >
          Create A Room
        </button>
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-400"
          onClick={() => router.push("/")}
        >
          <ArrowBackIcon /> Back
        </button>
      </div>
    );
  };

  const renderUpdateButtons = () => {
    return (
      <div className="flex flex-col items-center mt-2">
        <button
          className="bg-spotify-green text-white rounded-lg px-4 py-2 hover:bg-spotifyGreen"
          onClick={handleUpdateButtonPressed}
        >
          Update Room <UpgradeIcon />
        </button>
      </div>
    );
  };

  const title = update ? "Update Room" : "Create a Room";

  return (
    <>
      <Head>
        <title>Party Rock | Create A Room</title>
        <meta
          name="Create A Room"
          content="Become a host by creating a room."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <div className="w-full p-4 bg-light border border-solid border-dark rounded-2xl shadow-2xl dark:shadow-light dark:shadow-xl dark:bg-dark dark:border-light">
            <div className="flex justify-center items-center">
              <Collapse in={errorMsg !== "" || successMsg !== ""}>
                {successMsg !== "" ? (
                  <Alert
                    severity="success"
                    onClose={() => {
                      setSuccessMsg("");
                    }}
                  >
                    {successMsg}
                  </Alert>
                ) : (
                  <Alert
                    severity="error"
                    onClose={() => {
                      setErrorMsg("");
                    }}
                  >
                    {errorMsg}
                  </Alert>
                )}
              </Collapse>
            </div>
            <AnimatedText
              text="Create A Room"
              className="text-center lg:text-4xl mb-8"
            />
            <div className="flex justify-center items-center">
              <fieldset>
                <legend className="text-default text-center">
                  Guest Control of Playback State
                </legend>
                <div className="flex justify-center items-center text-white mb-5">
                  <label className="mx-2">
                    <input
                      type="radio"
                      value="true"
                      checked={guestCanPause === true}
                      onChange={handleGuestCanPauseChange}
                      className="mr-1 !text-white"
                    />
                    Play/Pause
                  </label>
                  <label className="mx-2">
                    <input
                      type="radio"
                      value="false"
                      checked={guestCanPause === false}
                      onChange={handleGuestCanPauseChange}
                      className="mr-1"
                    />
                    No Control
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-default">Votes Required To Skip Song</p>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="number"
                min="1"
                value={votesToSkip}
                onChange={handleVotesChange}
                className="bg-white rounded-md px-2 py-1 mt-2 text-center"
              />
            </div>
            <div className="flex my-5 justify-center items-center">
              {update ? renderUpdateButtons() : renderCreateButtons()}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default CreateRoomPage;
