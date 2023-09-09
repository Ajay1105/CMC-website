"use client";
import { useEffect } from "react";

const Devfolio = () => {
    
        useEffect(() => {
          const script = document.createElement("script");
          script.src = "https://apply.devfolio.co/v2/sdk.js";
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
          return () => {
            document.body.removeChild(script);
          };
        }, []);

  return (
    <div>
    <div
          class="apply-button"
          data-hackathon-slug="hackinghealth2023"
          data-button-theme="dark-invereted"
          style={{height: "44px", width: "312px"}}
        ></div>
    </div>
  )
}

export default Devfolio