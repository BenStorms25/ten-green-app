import React from "react";
import Carousel from "./Carousel";
import NameTag from "./NameTag.tsx";

function AboutContent() {
  return <div>
    {/*<Carousel />*/}
  <NameTag
  name= "Default Team Member"
  bio= "This is where the default team member's bio will go."
  img_path="./images/WorkerProfile.png"
  />
  </div>;
}

export default AboutContent;
