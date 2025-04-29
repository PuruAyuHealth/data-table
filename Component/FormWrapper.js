import React from "react";

function FormWrapper({ children, title }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          minWidth: "50%",
          borderRadius: 8,
          padding: 24,
        }}
      >
        {title ? <h1 style={{ textAlign: "center" }}>{title}</h1> : null}
        {children}
      </div>
    </div>
  );
}

export default FormWrapper;
