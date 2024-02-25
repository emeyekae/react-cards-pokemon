import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from 'uuid';

function useFlip(initialState = true) {
  const [isFacingUp, setIsFacingUp] = useState(initialState);
  
  const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
  };
  return [isFacingUp, flipCard];
}


function useAxios( url) {
  const [responses, setResponses] = useState([])  
  const addResponseData = async (restOfUrl = "")  => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setResponses(data => [...data,{...response.data, id: uuid()} ]);
  };
  return [responses, addResponseData];
}


export { useFlip, useAxios };
