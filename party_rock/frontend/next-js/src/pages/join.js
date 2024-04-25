import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { TextField, Button, div, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import LoginIcon from "@mui/icons-material/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const join = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1ed760",
      },
    },
  });

  const router = useRouter();

  const [roomCode, setRoomCode] = useState("");
  const [error, setError] = useState(false);

  const handleTextFieldChange = (e) => {
    setRoomCode(e.target.value);
    setError(false);
  };

  const roomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: roomCode,
      }),
    };
    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          router.push(`/room/${roomCode}`);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Party Rock | Create A Room</title>
        <meta name="Join A Room" content="Enter a code and join a room." />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <div className="w-full p-4 bg-light border border-solid border-dark rounded-2xl shadow-2xl dark:shadow-light dark:shadow-xl dark:bg-dark dark:border-light">
            <div className="flex justify-center items-center">
              <AnimatedText
                text="Create A Room"
                className="text-center lg:text-4xl mb-8"
              />
            </div>
            <div className="flex justify-center items-center mb-5">
              <ThemeProvider theme={theme}>
                <TextField
                  color="primary"
                  focused
                  margin="dense"
                  error={error}
                  label="Code"
                  placeholder="Enter a Room Code"
                  value={roomCode}
                  helperText={error ? "Room not found" : ""}
                  variant="outlined"
                  onChange={handleTextFieldChange}
                  inputProps={{
                    style: { color: "white" },
                  }}
                />
              </ThemeProvider>
            </div>
            <div className="flex justify-center items-center my-2">
              <Button
                variant="contained"
                className="bg-spotifyGreen mx-1 rounded-lg text-white hover:bg-spotifyLight"
                onClick={roomButtonPressed}
              >
                Join <LoginIcon />{" "}
              </Button>
            </div>
            <div className="flex justify-center items-center">
              <Button
                variant="contained"
                className="bg-red-500 mx-1 my-2 rounded-lg text-white hover:bg-red-400"
                onClick={() => router.push("/")}
              >
                {" "}
                <ArrowBackIcon /> Back
              </Button>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default join;
