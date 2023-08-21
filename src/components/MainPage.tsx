import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { View } from './types';
import MenuBar from './MenuBar'
import ViewBoard from './ViewBoard'

const INIT_VIEWS: View[] = [
	{
		type: 'web',
		title: 'Oxford dictionary',
		status: true,
		addr: 'https://www.oxfordlearnersdictionaries.com/',
		defaultAddr: 'https://www.oxfordlearnersdictionaries.com/',
		query: 'https://www.oxfordlearnersdictionaries.com/definition/english/{}',
		position: { x: 0, y: 0, w: 6, h: 2 },
	},
	{
		type: 'web',
		status: true,
		title: 'Ozdic collocation',
		addr: 'https://ozdic.com/',
		defaultAddr: 'https://ozdic.com/',
		query: 'https://ozdic.com/collocation/{}',
		position: { x: 6, y: 0, w: 6, h: 2 },
	},
	{
		type: 'web',
		status: true,
		title: 'Thesaurus',
		addr: 'https://www.thesaurus.com/',
		defaultAddr: 'https://www.thesaurus.com/',
		query: 'https://www.thesaurus.com/browse/{}',
		position: { x: 0, y: 2, w: 6, h: 2 },
	}
]

const MainPage = () => {

	const [words, setWords] = useState('');
	const [views, setViews] = useState<View[]>([...INIT_VIEWS]);

	const handleSearch = () => {
		if (!words) return;
		setViews(views.map(v => ({ ...v, addr: v.query.replace("{}", encodeURI(words)) })));
	}

	const handleCloseView = (id: number) => {
		const updated = [...views];
		updated.splice(id, 1);
		setViews(updated);
	}

	const handleViewStatusChange = (id: number, val: boolean) => {
		const updated = [...views];
		updated[id].status = val;
		setViews(updated);
	}

	return (
		<Stack direction='column' alignItems='stretch' spacing={2} sx={{ padding: 2, height: '100%' }}>
			<MenuBar words={words} onWordsChange={setWords} onSearch={handleSearch} />
			<ViewBoard views={views} onCloseView={handleCloseView} onStatusChange={handleViewStatusChange} />
		</Stack>
	)
}

export default MainPage
