import {styled} from "@utils";

export default function StylesCursor(Cursor) {
	return styled(Cursor)`
		position: fixed;
		pointer-events: none;
		color: #20efa4;
		z-index: 1000;
		top: 50%;
		left: 50%;
		svg {
			display: block;
			width: 40rem;
			height: 40rem;
			color: #20efa4;
			fill: currentColor;
			stroke: currentColor;
			stroke-width: 0;
			z-index: 1;
			position: absolute;
			top: -20rem;
			left: -20rem;
			transition: color 0.3s;
			transition-property: color, transform;
			transform-origin: center center;
			#cursor {
				display: block;
			}
			*:not(#cursor) {
				display: none;
			}
		}
		&[data-cursor="pointer"] {
			svg {
				color: #efe120;
			}
		}
		&[data-state*="active"] {
			svg {
				transform: scale(0.8)
			}
		}
	`
}