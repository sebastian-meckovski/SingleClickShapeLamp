import { useContext, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { SdSessionContext } from "../../components/shapediver/atoms/SdSessionContext";
import { thunkDeregisterSession, thunkRegisterSession } from "./parametersSlice";

export default function SdSessionParameterBridge() : JSX.Element {

  const {state} = useContext(SdSessionContext);
  const session = state.session;
  const name = state.name;

  const dispatch = useAppDispatch();

  // TODO add selectors for parameter values, run session customization in case of change

  useEffect( () => {
    if (session) {
      dispatch(thunkRegisterSession({session: session, name: name}));
    } 

    return () => {
      if (session) {
        dispatch(thunkDeregisterSession({name: name}));
      }
    }
  }, [session, name, dispatch]);

  return (<></>)
}
