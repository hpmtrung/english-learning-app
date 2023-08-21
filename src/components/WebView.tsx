import React from 'react'

export interface WebViewProps {
	addr: string;
}

const WebView = ({ addr }: WebViewProps) => {
	return (
		<webview src={addr} style={{ display: 'inline-flex', width: '100%', height: '100%' }} />
	)
}

export default WebView
