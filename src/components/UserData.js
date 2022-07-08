import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingAnimation } from "./Routing/LoadingAnimation";
import { LoadingOverlay, Paper, Button } from "@mantine/core";

import UserDataShell from "./VNGridContent/UserDataShell";

const UserData = () => {
  const location = useLocation();

  const [apiLoad, setApiLoad] = useState(false);
  const [userList, setUserList] = useState([]);
  
  const navigateTo = useNavigate();

  const loadUserData = async () => {
    fetch("/get_user_data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(location.state),
    })
      //Response if something was received
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })

      //If response received, just load data
      .then((responseJson) => {
        setUserList(responseJson);
        setApiLoad(true);
      })

      //Otherwise, redirect to error page
      .catch((error) => {
        const errorException = error;
        navigateTo("/ErrorPage", { state: { Error: errorException } });
        
      });
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <>
      <LoadingAnimation />
        <Paper >
          <LoadingOverlay visible={!apiLoad} />
          <UserDataShell UserData={userList} />
        </Paper>
    </>
  );
};

export default UserData;
