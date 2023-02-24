import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import FetchTest from "./FetchTest";
import WindowObserver from "./WindowObserver";

interface TestComponentProps { }
interface TestComponentState {
    visible: boolean
}
class TestComponent extends React.Component<TestComponentProps, TestComponentState> {
    constructor(props: TestComponentProps) {
        super(props)
        this.state = {
            visible: true
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        const visible = this.state.visible;
        const buttonText = visible ? 'Скрыть' : 'Показать';
        return <div style={{ color: 'white' }}>
            <button onClick={this.onClick}>{buttonText}</button>
            {visible && <WindowObserver />}
            {visible && <ErrorBoundary>
                <FetchTest url='https://jsonplaceholder.typicode.com/posts/1' />
            </ErrorBoundary>}
            {visible && <ErrorBoundary>
                <FetchTest url='https://jsonplaceholder.typicode.com/post/1111' />
            </ErrorBoundary>}
        </div>
    }
}

export default TestComponent