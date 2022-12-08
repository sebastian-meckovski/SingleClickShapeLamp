import {  useState } from 'react';
// import { SdSessionContext } from '../../shapediver/atoms/SdSessionContext';
// import { IParameterApi } from '@shapediver/viewer';
// import { debounce } from 'debounce';
import { BezierDrawer } from 'seb-curved-line-drawer';

interface Props {
	size: number;
	paramid: string;
}

interface Coordinates {
	x: number;
	y: number;
}


export const LineDrawer = ({ size, paramid }: Props): JSX.Element => {
	// TODO refactor based on parametersSlice

	// const { state, dispatch } = useContext(SdSessionContext);
	const [value, setValue] = useState<Array<Coordinates>>();

	function updateCoords(e: Array<Coordinates>) {
		// var coords = {
		// 	controlPoints: {
		// 		point1: `{${100 - e[0].y * 0.5}, ${150 - e[0].x * -0.5}, 0}`,
		// 		point2: '{200, 350, 0}',
		// 		point3: `{400, 150, 0}`,
		// 		point4: '{100, 0, 0}',
		// 	},
		// };

		// dispatch!({
		// 	type: 'setParameter',
		// 	id: 'd2062690-9d31-4706-a5ae-8c2efcc1df24',
		// 	value: JSON.stringify(coords),
		// });

		let myCoords = [
			{x: e[0].x, y: e[0].y}, {x: e[1].x, y: e[1].y}, {x: e[2].x, y: e[2].y}
		]

		setValue(myCoords)
	}

	return (
		<>
			<BezierDrawer size={size} onCoordUpdate={updateCoords} />
			<pre>{JSON.stringify(value)}</pre>

		</>
	);
};
