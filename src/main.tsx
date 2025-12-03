import "./styles/index.css";

import { DesignManual, PPLDesignManual } from "./theme";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const DevTabs = () => {
  const [activeTab, setActiveTab] = useState<"design" | "ppl">("ppl");

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          gap: "8px",
          padding: "8px",
          background: "#f0f0f0",
          borderBottom: "2px solid #ccc",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setActiveTab("ppl")}
          style={{
            padding: "8px 16px",
            background: activeTab === "ppl" ? "#007bff" : "#fff",
            color: activeTab === "ppl" ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          PPL Design Manual
        </button>
        <button
          onClick={() => setActiveTab("design")}
          style={{
            padding: "8px 16px",
            background: activeTab === "design" ? "#007bff" : "#fff",
            color: activeTab === "design" ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Full Design Manual
        </button>
      </div>
      <div style={{ marginTop: "50px" }}>
        {activeTab === "design" && <DesignManual />}
        {activeTab === "ppl" && <PPLDesignManual />}
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DevTabs />
  </React.StrictMode>
);
