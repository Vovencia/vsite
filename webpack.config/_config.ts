const path = require('path');
const fs = require('fs');
import {root} from "./_utils";

export let ENV = process.env.NODE_ENV || 'development';
export let MODE = process.env.RUN_MODE || 'server';

let snapSvgPath = root('node_modules', 'snapsvg');
if( fs.existsSync( path.join(snapSvgPath, 'dist', 'snap.svg-min.js') ) ){
	snapSvgPath = path.join(snapSvgPath, 'dist', 'snap.svg-min.js');
} else {
	snapSvgPath = path.join(snapSvgPath, 'dist', 'snap.svg.js');
}

export {snapSvgPath};