import {type PropsWithChildren, type SVGProps} from 'react';
import {styled} from '../style.config';

const Box = styled('div', {
	verticalAlign: 'middle',
	display: 'inline-block',
});

export function IconBox(props: PropsWithChildren) {
	return (
		<Box>
			{props.children}
		</Box>
	);
}

export function SvgSpinnersRingResize(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><g stroke='#888888'><circle cx='12' cy='12' r='9.5' fill='none' strokeLinecap='round' strokeWidth='3'><animate attributeName='stroke-dasharray' calcMode='spline' dur='1.5s' keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1' keyTimes='0;0.475;0.95;1' repeatCount='indefinite' values='0 150;42 150;42 150;42 150'></animate><animate attributeName='stroke-dashoffset' calcMode='spline' dur='1.5s' keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1' keyTimes='0;0.475;0.95;1' repeatCount='indefinite' values='0;-16;-59;-59'></animate></circle><animateTransform attributeName='transform' dur='2s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'></animateTransform></g></svg>
	);
}

export function DashiconsCloudSaved(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20' {...props}><path fill='#888888' d='M14.8 9c.1-.3.2-.6.2-1c0-2.2-1.8-4-4-4c-1.5 0-2.9.9-3.5 2.2c-.3-.1-.7-.2-1-.2C5.1 6 4 7.1 4 8.5c0 .2 0 .4.1.5c-1.8.3-3.1 1.7-3.1 3.5C1 14.4 2.6 16 4.5 16h10c1.9 0 3.5-1.6 3.5-3.5c0-1.8-1.4-3.3-3.2-3.5zm-6.3 5.9l-3.2-3.2l1.4-1.4l1.8 1.8l3.8-3.8l1.4 1.4l-5.2 5.2z'></path></svg>
	);
}
