import { AnimationData, IAnimationTrack } from "@shapediver/viewer";
import { useContext, useEffect } from "react";
import { SdSessionContext } from "./SdSessionContext";

export default function SdSessionAnimationData() : JSX.Element {

  const {state} = useContext(SdSessionContext);
  const session = state.session;  

  useEffect( () => {

    if (session) {

      const tracks: IAnimationTrack[] = [
        {
          times: [0, 2.5, 5],
          values: [0, 0, 0, 1000, 200, 0, 0, 0, 0],
          node: session.node,
          path: "translation",
          interpolation: "linear"
        }
      ];
      
      console.log('addning animations..')
      const animationData = new AnimationData("myAnimation", tracks, 0, 5);
      session.node.addData(animationData)
      animationData.repeat = false;
      animationData.startAnimation()
    } 
  });

  return (
    <>
    </>
  )
}
