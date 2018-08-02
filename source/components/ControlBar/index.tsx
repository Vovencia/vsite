import * as React from "react";
import {div} from "@utils";

import Time from "./time";

export class ControlBar extends React.Component {
	render(){
		return (
			<div {...this.props}>
				<RightPanel>
					<StyledTime />
				</ RightPanel>
			</div>
		)
	}
}

let {
	Self: StyledControlBar,
	RightPanel,
	Time: StyledTime
} = require("./styles.ts").default(ControlBar, {
	RightPanel: div("ControlBar_RightPanel"),
	Time: Time,
});

export default StyledControlBar;