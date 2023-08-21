import { Box } from '@mui/material';
import React from 'react';
import GridLayout from "react-grid-layout";
import { View } from './types';
import ViewLayout from './ViewLayout';
import WebView from './WebView';

export interface ViewBoardProps {
	views: View[];
	onCloseView: (id: number) => void;
	onStatusChange: (id: number, val: boolean) => void;
}

const getLayout = (views: View[]) => {
	return views.map((v, id) => ({
		i: v.title,
		maxW: 6,
		minW: 3,
		minH: 2,
		maxH: 3,
		isBounded: true,
		...v.position,
	}))
}

const ViewBoard = ({ views, onCloseView, onStatusChange }: ViewBoardProps) => {
	const layout = getLayout(views);

	return (
		<Box height='100%' width='100%' sx={{ border: '1px solid gray' }}>
			<GridLayout
				className="layout"
				layout={layout}
				width={1200}
				isBounded
			>
				{views.map((v, id) => (
					<div key={v.title}>
						<ViewLayout
							status={v.status}
							title={v.title}
							onClose={() => onCloseView(id)}
							onStatusChange={(e, val) => onStatusChange(id, val)}
						>
							{v.type === 'web' ? (
								<WebView addr={v.addr} />
							): (
									<div>Youtube</div>
							)}
						</ViewLayout>
					</div>
				))}
			</GridLayout>
		</Box>
	)
}

export default ViewBoard
