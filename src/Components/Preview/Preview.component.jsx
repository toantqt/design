import React from "react";
const PreviewComponent = (props) => {
  console.log(props.link.location.pathname);
  const pathname = props.link.location.pathname;
  const link = pathname.slice(6);
  console.log(link);
  return (
    <div style={{ backgroundColor: "#eff3f8" }}>
      <div
        style={{
          width: "100%",
          height: "1000px",
          margin: "0 auto",
          backgroundColor: "white",
          overflowY: "hidden",
        }}
      >
        <iframe src={link} frameborder="0" width="100%" height="100%"></iframe>
      </div>
    </div>
  );
};
export default PreviewComponent;
