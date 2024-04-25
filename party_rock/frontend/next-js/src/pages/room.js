// import React, { useState, useEffect } from "react";
// import { Grid, Button, Typography } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";
// import SettingsIcon from "@mui/icons-material/Settings";
// import CloseIcon from "@mui/icons-material/Close";
// import CreateRoomPage from "./create";
// import MusicPlayer from "@/components/MusicPlayer";
// import { useRouter } from "next/router";

// const Room = ({ leaveRoomCallback }) => {  
//   const [roomDetails, setRoomDetails] = useState({
//     votesToSkip: 2,
//     guestCanPause: false,
//     isHost: false,
//     spotifyAuthenticated: false,
//     song: {},
//   });
//   const [showSettings, setShowSettings] = useState(false);
//   const { roomCode } = router.query();
//   const router = useRouter();
//   const [song, setSong] = useState(null);

//   const navigate = (route) => {
//     router.push(route); 
//   };

//   const getRoomDetails = () => {
//     fetch("http://127.0.0.1:8000/get-room" + "?code=" + roomCode)
//       .then((response) => {
//         if (!response.ok) {
//           leaveRoomCallback();
//           navigate("/");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setRoomDetails({
//           votesToSkip: data.votes_to_skip,
//           guestCanPause: data.guest_can_pause,
//           isHost: data.is_host,
//         });
//         if (data.is_host) {
//           authenticateSpotify();
//         }
//       });
//   };
  

//   const getRoomDetails = () => {
//     fetch("http://127.0.0.1:8000/api/get-room" + "?code=" + roomCode)
//       .then((response) => {
//         if (!response.ok) {
//           leaveRoomCallback();
//           navigate("/");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setRoomDetails({
//           votesToSkip: data.votes_to_skip,
//           guestCanPause: data.guest_can_pause,
//           isHost: data.is_host,
//         });
//         if (data.is_host) {
//           authenticateSpotify();
//         }
//       });
//   };

//   const authenticateSpotify = () => {
//     fetch("/spotify/is-authenticated")
//       .then((response) => response.json())
//       .then((data) => {
//         setRoomDetails((prevState) => ({
//           ...prevState,
//           spotifyAuthenticated: data.status,
//         }));
//         console.log(data.status);
//         if (!data.status) {
//           fetch("/spotify/get-auth-url")
//             .then((response) => response.json())
//             .then((data) => {
//               window.location.replace(data.url);
//             });
//         }
//       });
//   };

//   const getCurrentSong = () => {
//     fetch("/spotify/current-song")
//       .then((response) => {
//         if (!response.ok) {
//           return {};
//         } else {
//           return response.json();
//         }
//       })
//       .then((data) => {
//         setSong(data);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching current song:", error);
//       });
//   };

//   useEffect(() => {
//     getRoomDetails();
//     const interval = setInterval(getCurrentSong, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const leaveButtonPressed = () => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     };
//     fetch("http://127.0.0.1:8000/api/leave-room", requestOptions).then((_response) => {
//       leaveRoomCallback();
//       navigate("/");
//     });
//   };

//   const updateShowSettings = (value) => {
//     setShowSettings(value);
//   };

//   const renderSettings = () => {
//     return (
//       <Grid container
//       spacing={3}
//       alignItems="center"
//       className="flex flex-col items-center justify-center bg-dark rounded-lg pb-2"
//     >
//         <Grid item xs={12} align="center">
//           <CreateRoomPage
//             update={true}
//             votesToSkip={roomDetails.votesToSkip}
//             guestCanPause={roomDetails.guestCanPause}
//             roomCode={roomCode}
//             updateCallback={getRoomDetails}
//           />
//         </Grid>
//         <Grid item xs={12} align="center">
//           <Button
//             variant="contained"
//             className="flex justify-center items-center bg-danger rounded-lg ml-0 mr-2 text-white hover-bright-lg "
//             onClick={() => updateShowSettings(false)}
//           >
//             <CloseIcon />
//           </Button>
//         </Grid>
//       </Grid>
//     );
//   };

//   const renderSettingsButton = () => {
//     return (
//       <Grid item xs={12} align="center">
//         <Button
//           className="bg-spotify-green btn-circle hover-bright-lg "
//           onClick={() => updateShowSettings(true)}
//         >
//           <SettingsIcon className="text-white" />
//         </Button>
//       </Grid>
//     );
//   };

//   if (showSettings) {
//     return renderSettings();
//   }

//   return (
//     <Grid container spacing={1} className="mt-5 flex justify-center items-center">
//       <Grid item xs={12} align="center" className="my-2">
//         <Typography variant="h5" component="h5" className="font-semibold my-2 text-white">
//           Room Code: {roomCode}
//         </Typography>
//       </Grid>
//       <MusicPlayer {...song} />

//       <div className="mt-5 bg-dark  flex flex-col justify-center items-center rounded-lg w-100  pb-5 pt-5">
//       <Grid item xs={12} align="center" className="mb-5">
//       {roomDetails.isHost ? renderSettingsButton() : null}
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Button
//           variant="contained"
//           className="bg-danger rounded-lg text-white hover-bright-lg "
//           onClick={leaveButtonPressed}
//           >
//           <LogoutIcon />
//         </Button>
//       </Grid>
//           </div>
//     </Grid>
//   );
// };

// export default Room;


import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import CreateRoomPage from "./create";
import MusicPlayer from "@/components/MusicPlayer";
import { useRouter } from "next/router";

const Room = ({ leaveRoomCallback }) => {  
  const router = useRouter();
  const [roomDetails, setRoomDetails] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
    spotifyAuthenticated: false,
    song: {},
  });
  const [showSettings, setShowSettings] = useState(false);
  const { roomCode } = router.query; 

  const navigate = (route) => {
    router.push(route); 
  };

  const getRoomDetails = () => {
    fetch("/api/get-room" + "?code=" + roomCode)
      .then((response) => {
        if (!response.ok) {
          leaveRoomCallback();
          navigate("/");
        }
        return response.json();
      })
      .then((data) => {
        setRoomDetails({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
        if (data.is_host) {
          authenticateSpotify();
        }
      });
  };

  const authenticateSpotify = () => {
    fetch("/spotify/is-authenticated")
      .then((response) => response.json())
      .then((data) => {
        setRoomDetails((prevState) => ({
          ...prevState,
          spotifyAuthenticated: data.status,
        }));
        if (!data.status) {
          fetch("/spotify/get-auth-url")
            .then((response) => response.json())
            .then((data) => {
              window.location.replace(data.url);
            });
        }
      });
  };

  const getCurrentSong = () => {
    fetch("/spotify/current-song")
      .then((response) => {
        if (!response.ok) {
          return {};
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setRoomDetails((prevState) => ({
          ...prevState,
          song: data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching current song:", error);
      });
  };

  useEffect(() => {
    if (roomCode) {
      getRoomDetails();
      const interval = setInterval(getCurrentSong, 1000);
      return () => clearInterval(interval);
    }
  }, [roomCode]);

  const leaveButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/api/leave-room", requestOptions).then((_response) => {
      leaveRoomCallback();
      navigate("/");
    });
  };

  const updateShowSettings = (value) => {
    setShowSettings(value);
  };

  const renderSettings = () => {
    return (
      <Grid container spacing={3} alignItems="center" className="flex flex-col items-center justify-center bg-dark rounded-lg pb-2">
        <Grid item xs={12} align="center">
          <CreateRoomPage
            update={true}
            votesToSkip={roomDetails.votesToSkip}
            guestCanPause={roomDetails.guestCanPause}
            roomCode={roomCode}
            updateCallback={getRoomDetails}
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            className="flex justify-center items-center bg-danger rounded-lg ml-0 mr-2 text-white hover-bright-lg"
            onClick={() => updateShowSettings(false)}
          >
            <CloseIcon />
          </Button>
        </Grid>
      </Grid>
    );
  };

  const renderSettingsButton = () => {
    return (
      <Grid item xs={12} align="center">
        <Button
          className="bg-spotify-green btn-circle hover-bright-lg"
          onClick={() => updateShowSettings(true)}
        >
          <SettingsIcon className="text-white" />
        </Button>
      </Grid>
    );
  };

  if (!roomCode) {
    return <div>Loading...</div>; // Render loading state until roomCode is available
  }

  if (showSettings) {
    return renderSettings();
  }

  return (
    <Grid container spacing={1} className="mt-5 flex justify-center items-center">
      <Grid item xs={12} align="center" className="my-2">
        <Typography variant="h5" component="h5" className="font-semibold my-2 text-white">
          Room Code: {roomCode}
        </Typography>
      </Grid>
      <MusicPlayer {...roomDetails.song} />

      <div className="mt-5 bg-dark  flex flex-col justify-center items-center rounded-lg w-100  pb-5 pt-5">
        <Grid item xs={12} align="center" className="mb-5">
          {roomDetails.isHost ? renderSettingsButton() : null}
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            className="bg-danger rounded-lg text-white hover-bright-lg"
            onClick={leaveButtonPressed}
          >
            <LogoutIcon />
          </Button>
        </Grid>
      </div>
    </Grid>
  );
};

export default Room;
