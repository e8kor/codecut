import * as React from 'react';
import { Color } from '../model/color';
import { ColorSliderComponent } from './color-slider';

interface Props {
	color: Color;
	onColorUpdated: (color: Color) => void;
}

const updateColor = (props: Props, colorId: keyof Color) => (value) => {
	props.onColorUpdated({
		...props.color,
		[colorId]: value,
	});
};

export const ColorPicker = (props: Props) => (
	<>
		{Object.keys(props.color).map((field: keyof Color) => (
			<ColorSliderComponent
				key={field}
				value={props.color[field]}
				onValueUpdated={updateColor(props, field)}
			/>
		))}
	</>
);
