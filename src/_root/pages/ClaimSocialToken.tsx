// import React from 'react'

const ClaimSocialToken = () => {
  return (
    <div className="flex flex-1">
    <div
      className="common-container"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "56.25%", // 16:9 aspect ratio
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdYu3yAvGAFEiUi-ifoEsioIi0oymaGW7vRlUW2vw523y5Lpg/viewform?embedded=true"
        className="embed-responsive-item"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          height: "100%",
          border: 0,
        }}
        // frameBorder="0"
        // marginHeight="0"
        // marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  </div>
  )
}

export default ClaimSocialToken