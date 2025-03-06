import { useEffect } from "react";

const ScrollProgress = () => {
   useEffect(() => {
     const handleScroll = () => {
       const scrollTop = window.scrollY;
       const scrollHeight = document.documentElement.scrollHeight;
       const clientHeight = document.documentElement.clientHeight;
 
       const scrollProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
       document.documentElement.style.setProperty("--scrollProgress", `${scrollProgress}%`);
     };
 
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   return <div className="scroll-bar"></div>;
 };
export default ScrollProgress;
