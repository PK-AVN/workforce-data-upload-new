import React, { useEffect } from "react";
import * as API from "../apiConfig/api";

const Home = () => {
  useEffect(() => {
    process.env.REACT_APP_MOCK_API ? getMockedData() : getData();
  }, []);

  const getData = async () => {
    const res = await API.get("https://catfact.ninja/fact");
    console.log(res, "data");
  };

  const getMockedData = async () => {
    const res = await API.get("http://localhost:4000/users");
    console.log(res, "mockedData");
  };

  return <div>Home</div>;
};

export default Home;
