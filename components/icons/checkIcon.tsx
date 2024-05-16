import {IconProps} from '../lib/definitions';

function CheckIcon(props: IconProps) {
  const { fill = 'currentColor', secondaryFill = fill, size = '1em', ...rest } = props;

	return (
		<svg height={size} width={size} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" {...rest}>
		  <polyline fill="none" points="2.75 9.25 6.75 14.25 15.25 3.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    </svg>
	);
};

export default CheckIcon;