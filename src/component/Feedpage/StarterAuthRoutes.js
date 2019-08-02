import React from "react";
import Starterpage from "./Starterpage";

export default function StarterAuthRoutes() {
  return (
    <div>
      {localStorage.getItem("Token") === null ? <div /> : <Starterpage />}
    </div>
  );
}
