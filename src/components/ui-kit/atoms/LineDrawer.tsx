import {  useState, useContext } from 'react';
import { SdSessionContext } from '../../shapediver/atoms/SdSessionContext';
// import { IParameterApi } from '@shapediver/viewer';
import { debounce } from 'debounce';
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

	const { state, dispatch } = useContext(SdSessionContext);
	const [value, setValue] = useState<Array<Coordinates>>();

	var coords;

	function updateCoords(e: Array<Coordinates>) {
		coords = {
			controlPoints: {
				point1: `{50, 500, 0}`,
				point2: `{${e[0].x}, ${size - e[0].y}, 0}`,
				point3: `{${e[1].x}, ${size - e[1].y}, 0}`,
				point4: `{${e[2].x}, ${size - e[2].y}, 0}`,
			},
		};

		dispatch!({
			type: 'setParameter',
			id: 'd2062690-9d31-4706-a5ae-8c2efcc1df24',
			value: JSON.stringify(coords),
		});

		let myCoords = [
			{x: e[0].x, y: size - e[0].y}, {x: e[1].x, y: size - e[1].y}, {x: e[2].x, y: size - e[2].y}
		]

		setValue(myCoords)
	}

	return (
		<>
			<BezierDrawer size={size} onCoordUpdate={debounce( (e : Array<Coordinates>) => {updateCoords(e)} )} />
			<pre>{JSON.stringify(value)}</pre>

		</>
	);
};
