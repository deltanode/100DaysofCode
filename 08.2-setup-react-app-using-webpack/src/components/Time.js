import React, { useState } from "react"

function Time() {
  const { theTime, setTheTime } = useState(new Date().toLocaleString())

  setTimeout(function () {
    setTheTime(new Date().toLocaleString())
  }, 1000)

  return <p>Current Time: {theTime}</p>
}

export default Time
