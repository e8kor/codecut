import * as React from 'react';

interface PropsColorSlider {
	value: number;
	onValueUpdated: (newValue: number) => void;
}

export const ColorSliderComponent = (props: PropsColorSlider) => (
	<div>
		<input
			type="range"
			min="0"
			max="255"
			value={props.value}
			onChange={(event) => props.onValueUpdated(+event.target.value)}
		/>
	</div>
);
