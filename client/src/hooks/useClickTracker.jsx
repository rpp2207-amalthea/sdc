import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useClickTracker = () => {
  const [clickInfo, setClickInfo] = useState({
    element: null,
    widget: null,
    time: null
  })

  useEffect(() => {

    if (!clickInfo.element) {
      return;
    }

    axios.post('/clickTrackPost', clickInfo)
    .then((response) => {
      console.log("API SUCCESSFUL Click Tracking Response: ", response, " Here's the info: ", clickInfo);
    })
    .catch ((err) => {
      console.log("API FAILURE: Click Tracking ERROR: ", err)
    })

  }, [clickInfo])

  const handleClick = (event) => {

    setClickInfo({
      element: event.target.tagName ? event.target.tagName : "null",
      widget: event.target.getAttribute("widgetname") ? event.target.getAttribute("widgetname") : "null",
      time: new Date(Date.now()).toString()
    })
  }

  return {
    clickInfo,
    onClickTracker: handleClick
  }
}

export default useClickTracker;
