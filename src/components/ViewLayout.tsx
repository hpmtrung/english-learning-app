import { Close } from '@mui/icons-material';
import { Box, Divider, IconButton, Paper, Stack, Switch, Typography } from '@mui/material'
import React from 'react'

export interface ViewLayoutProps {
	title: string;
	status: boolean;
	onStatusChange?: (e, val: boolean) => void;
	onClose?: () => void;
	children?: React.ReactNode;
}

const ViewLayout = ({ title, status, onStatusChange, onClose, children }: ViewLayoutProps) => {
	return (
		<Paper elevation={1} sx={{ width: '100%', height: '100%', padding: 1 }}>
			<Stack direction='column' sx={{ width: '100%', height: '100%' }}>
				<Stack direction='row' alignItems='center' spacing={1}>
					<Switch checked={status} onChange={onStatusChange} inputProps={{ 'aria-label': 'controlled' }} size='small' />
					<Typography variant='body2' fontWeight={500}>{title}</Typography>
					<Box flexGrow={1} />
					<IconButton aria-label="delete" onClick={onClose}>
						<Close />
					</IconButton>
				</Stack>
				<Divider />
				{children}
			</Stack>
		</Paper>
	)
}

export default ViewLayout
