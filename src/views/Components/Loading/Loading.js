import React from "react";
import "assets/css/views/loadingStyle.css";

export default function Loading() {
  return (
    <div>
      <div className="loading-body">
        <h1 class="loading-title">Loading</h1>
        <div class="rainbow-marker-loader"></div>
      </div>
    </div>
  );
}
