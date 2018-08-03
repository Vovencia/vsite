import {styled} from "@utils";


export default function(Self, {SiteFrame, ...children}){
	return {
		...children,
		Self: styled(Self)`
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			flex-grow: 1;
		`,
		SiteFrame: styled(SiteFrame)`
			display: flex;
			flex-grow: 1;
		`
	}
}