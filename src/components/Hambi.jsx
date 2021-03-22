import "./Hambi.css";
import React, { useState } from "react";

export default function Hambi() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div id="hambi" className={open ? "hambi open" : "hambi"} onClick={open ? () => setOpen(false) : () => setOpen(true)}>
				<div className="hambiLine" id="hL1"></div>
				<div className="hambiLine" id="hL2"></div>
				<div className="hambiLine" id="hL3"></div>
			</div>
			{open &&
				<div id="hambiMenu">
					<div className="hambiMenuItem" id="mI1"><a href="/#1">Menu Item #1</a></div>
					<div className="hambiMenuItem" id="mI2"><a href="/#2">Menu Item #2</a></div>
					<div className="hambiMenuItem" id="mI3"><a href="/#3">Menu Item #3</a></div>
				</div>
			}
		</>
	);
}
