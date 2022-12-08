import { useContext } from 'react';
import { SdSessionContext } from '../../shapediver/atoms/SdSessionContext';
import { Alert, Collection, Loader, ScrollView } from '@aws-amplify/ui-react';
import { Slider } from '../atoms/Slider';
import { LineDrawer } from '../atoms/LineDrawer';

export default function SdSessionParameterPanel(): JSX.Element {
	const { state } = useContext(SdSessionContext);
	const error = state.error;
	const session = state.session;

	if (error) {
		return (
			<Alert variation="error" isDismissible={false} hasIcon={true} heading={error.name}>
				{error.message}
			</Alert>
		);
	} else if (session) {
		const parameterIds = Object.keys(session.parameters).filter(
			(id) =>
				session.parameters[id].name === 'parameter.4.verticalPieces' ||
				session.parameters[id].name === 'parameter.5.horizontalPieces' ||
				session.parameters[id].name === 'parameter.2.lampBladeAngle'
		);

		return (
			<ScrollView maxHeight="100%">
				<Collection type="list" items={parameterIds} direction="column">
					{(item, index) => {
						console.log(item);
						return (
							<>
								<Slider key={index} paramid={item} />
							</>
						);
					}}
				</Collection>
				<LineDrawer size={400} paramid={parameterIds[3]} />
			</ScrollView>
		);
	} else {
		return <Loader size="large" />;
	}
}
