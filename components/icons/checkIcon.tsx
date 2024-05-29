import {IconProps} from '../lib/definitions';

function CheckIcon(props: IconProps) {
  const { fill = 'currentColor', secondaryFill = fill, size = '1em', ...rest } = props;

	return (
		// <svg height={size} width={size} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" {...rest}>
		//   <polyline fill="none" points="2.75 9.25 6.75 14.25 15.25 3.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
    // </svg>

    <svg height={size} width={size} viewBox="0 0 12 12" {...rest}>
      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="currentColor">
        <path d="m1.75,6c1.047,1.048,1.803,2.153,2.461,3.579,1.524-3.076,3.659-5.397,6.039-7.158"></path>
      </g>
    </svg>
	);
};

export default CheckIcon;