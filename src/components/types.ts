export type View = LinkView & {
	position: {
		x: number;
		y: number;
		w: number;
		h: number;
	};
	status: boolean;
	type: 'web' | 'youtube';
}

export type LinkView = {
	title: string;
	addr: string;
	defaultAddr: string;
	query: string;
}