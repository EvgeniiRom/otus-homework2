import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
    children: any
}
interface ErrorBoundaryState {
    hasError: boolean
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state = { hasError: false };
    
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log("Catch error")
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary