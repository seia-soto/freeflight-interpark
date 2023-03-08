import {styled} from '../style.config';

const Bar = styled('section', {
	padding: '18px',
	background: '$black',
	color: '$white',
});

const Heading = styled('h1', {
	padding: 0,
	margin: 0,
	lineHeight: '1em',

	color: '$white',
	fontSize: '18px',
	fontWeight: 500,

	// eslint-disable-next-line @typescript-eslint/naming-convention
	'&>span': {
		color: 'lightgray',
		fontSize: '18px',
		fontWeight: 400,
	},

	// eslint-disable-next-line @typescript-eslint/naming-convention
	'&>div': {
		marginLeft: '7px',
	},
});

export function Header() {
	return (
		<Bar>
			<Heading>
				FreeFlight <span>인터파크</span>
			</Heading>
		</Bar>
	);
}
