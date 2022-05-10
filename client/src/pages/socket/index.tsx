import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "@/layouts/main-layout";
import { observer } from "mobx-react-lite";
import NotificationStore from "@/pages/socket/NotificationStore";
import { useRouter } from "next/router";

const Socket = observer(() => {
  const [name, setName] = useState<string>("");
  const [store, setStore] = useState<NotificationStore>(null);
  const {
    query: { room },
  } = useRouter();
  const init = async () => {
    if (room) {
      const notificationStore = new NotificationStore(`room_${room}`);
      setStore(notificationStore);
    }
  };

  const submitName = async () => {
    try {
      await axios.post("http://0.0.0.0:5000/notification/set-name", {
        name,
        id: room,
      });
      setName("");
    } catch (e) {
      console.error(e);
    }
  };

  const setRoom = async () => {
    try {
      await axios.post("http://0.0.0.0:5000/notification/set-room", {
        name: "roomName",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  useEffect(() => {
    init().catch(console.log);
  }, [room]);

  return (
    <MainLayout>
      <div>
        <div>Room: {room}</div>
        <hr />
        <div>
          {store?.notifications.map((item, index) => (
            <p key={index}>
              {index}: {item}
            </p>
          ))}
        </div>
        <hr />
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
});

export default Socket;
