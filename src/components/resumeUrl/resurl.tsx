"use client"

import { Button } from "../ui/button";

const Resurl = () => {
     // onclick function 
  const resumeURL = 'https://drive.google.com/file/d/1-FVvIpocdurdhmyOG6Z7JaUZ3NqPVabr/view?usp=drive_link'; // Replace with your actual resume URL

  const handleClick = () => {
    // Trigger the link when the button is clicked
    window.open(resumeURL, '_blank');
  };



  return (<Button  onClick={handleClick} >Resume</Button>)
}

export default Resurl;