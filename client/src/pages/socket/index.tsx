import React, { ChangeEvent, useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import MainLayout from "@/layouts/main-layout";

const Socket = () => {
  const [name, setName] = useState<string>("");
  const establishConnection = () => {
    const socket = io(":5000", { transports: ["websocket"] });
    socket.on("notification", (notification: string) => {
      console.log("notification", notification);
    });
  };

  const submitName = async () => {
    try {
      await axios.post("http://0.0.0.0:5000/notification/set", { name });
      setName("");
    } catch (e) {
      console.error(e);
    }
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  useEffect(() => {
    establishConnection();
  }, []);

  return (
    <MainLayout>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleName}
          style={{ marginBottom: "30px" }}
        />
        <button
          onClick={submitName}
          style={{
            border: "1px solid black",
            padding: "5px 10px",
            display: "block",
          }}
        >
          Submit
        </button>
      </div>
    </MainLayout>
  );
};

export default Socket;
