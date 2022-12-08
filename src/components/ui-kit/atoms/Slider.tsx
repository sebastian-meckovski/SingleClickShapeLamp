import { useContext } from 'react';
import { SdSessionContext } from '../../shapediver/atoms/SdSessionContext';
import { SliderField } from '@aws-amplify/ui-react';
import { IParameterApi } from '@shapediver/viewer';
import { debounce } from 'debounce';

interface Props {
  paramid : string
}

export const Slider = ({ paramid } : Props) : JSX.Element => {
  
  // TODO refactor based on parametersSlice

  const {state, dispatch} = useContext(SdSessionContext);
  const session = state.session!;
  const param = session.parameters[paramid] as IParameterApi<number>;
  const value = param.type === 'Float' ? parseFloat(param.value+'') : parseInt(param.value+'')
  // {   "controlPoints": {     "point1": "{100, 500, 0}",     "point2": "{200, 350, 0}",     "point3": "{200, 150, 0}",     "point4": "{100, 0, 0}"   } }

  return (
    <SliderField
      label={param.displayname ? param.displayname : param.name}
      descriptiveText={param.tooltip}
      min={param.min}
      max={param.max}
      step={Math.pow(0.1, param.decimalplaces as number)}
      defaultValue={value}
      onChange={debounce((v : number) => dispatch!({type: 'setParameter', id: param.id, value: v.toString()}), 200)}
    />
  );
};
