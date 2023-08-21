import { Button, Stack, TextField } from '@mui/material';
import AppBar from "@mui/material/AppBar";
import React from 'react';

export interface MenuBarProps {
	words: string;
	onWordsChange: (val: string) => void;
	onSearch: () => void;
}

const MenuBar = ({ words, onWordsChange, onSearch }: MenuBarProps) => {
	return (
		<AppBar position="static" color="inherit" elevation={0}>
			<Stack
				direction="row"
				gap={2}
				justifyContent="center"
				alignItems="stretch"
				width='100%'
			>
				<TextField fullWidth size='small' placeholder='Enter your words' value={words}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						onWordsChange(event.target.value);
					}}
				/>
				<Button variant='contained' size='small' disableElevation sx={{ width: '120px' }} onClick={onSearch}>Search</Button>
				<Button variant='outlined' size='small' disableElevation sx={{ width: '150px' }}>Add a view</Button>
			</Stack>
		</AppBar>
	)
}

export default MenuBar
