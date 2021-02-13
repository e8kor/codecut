import * as React from 'react';

interface Props {
	userName: string;
}

export const HelloUser = (props: Props) => {
	return <h2>Hello {props.userName} !</h2>;
};
