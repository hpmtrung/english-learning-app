import React from "react";

interface IErrorBoundaryProps {
	readonly children: JSX.Element | JSX.Element[] | React.ReactNode;
}

interface IErrorBoundaryState {
	readonly error: any;
	readonly errorInfo: any;
}

class ErrorBoundary extends React.Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error: any, errorInfo: any) {
		this.setState({
			error,
			errorInfo,
		});
	}

	render() {
		const { error, errorInfo } = this.state;
		if (errorInfo) {
			// Error details are exposed only at dev mode
			const errorDetails =
				process.env.NODE_ENV === "production" ? (
					<details>
						{error && error.toString()}
						<br />
						{errorInfo.componentStack}
					</details>
				) : undefined;

			return (
				<div>
					<h2 className="error">An unexpected error has occurred</h2>
					{errorDetails}
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;