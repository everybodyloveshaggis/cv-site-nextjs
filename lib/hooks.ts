import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-session-context";
import { useEffect } from "react";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75){
    const {ref, inView} = useInView({
        threshold: threshold,
      });
      const { setActiveSection,timeOfLastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick >1000) {
          setActiveSection(sectionName);
        }
      },[inView, setActiveSection, timeOfLastClick])

      return {ref,};
}