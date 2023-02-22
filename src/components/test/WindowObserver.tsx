import React from "react";

interface WindowObserverProps {
}

interface WindowObserverState {
    width: number
    height: number
}

class WindowObserver extends React.Component<WindowObserverProps, WindowObserverState>{
    constructor(props: WindowObserverProps) {
        super(props)
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.onResize = this.onResize.bind(this);
    }

    onResize() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    render() {
        const { width, height } = this.state;
        return <div>{`size: ${width}x${height}`}</div>
    }
}

export default WindowObserver;