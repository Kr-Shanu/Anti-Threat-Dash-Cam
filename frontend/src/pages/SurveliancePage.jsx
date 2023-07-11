import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import { useSocket } from "../Context/SocketProvider";
import "./css/survelliance.css";
import NavbarComponent from "../components/NavbarComponent";

const SurveliancePage = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("DL01AB2903");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(() => {
    socket.emit("room:join", { email, room });
  }, [email, room, socket]);

  useEffect(() => {
    handleSubmitForm();
    return () => {
      // handleSubmitForm();
    };
  }, []);

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      //   navigate(`/track/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  // &&&&&&&&&&&&&&&&************************ partition ********************&&&&&&&&&&&&

  //   const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <div className="SurveliancePageContainer">
      <NavbarComponent/>
      <h1>{room}</h1>
      
      {!myStream ? (
        <div className="survelliancebtn">
          <a className="imgSurv"
            href="https://www.freepnglogos.com/pics/camera-logo-hd"
            title="Image from freepnglogos.com"
          >
            <img
              src="https://www.freepnglogos.com/uploads/camera-logo-png/flat-camera-circle-icon-transparent-vector-21.png"
              width="500"
              alt="flat camera circle icon transparent vector"
            />
          </a>
          <button onClick={handleCallUser}>Start Streaming</button>
        </div>
      ) : (
        <h2>Streaming</h2>
      )}

      {myStream && (
        <div className="streamSurv">
          <ReactPlayer
            playing
            muted
            height="500px"
            width="800px"
            url={myStream}
          />
        </div>
      )}
    </div>
  );
};

export default SurveliancePage;
