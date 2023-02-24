import React from "react";

interface FetchTestProps {
    url: string
}

interface FetchTestState {
    text: string,
    error: string | undefined
}

class FetchTest extends React.Component<FetchTestProps, FetchTestState>{
    constructor(props: FetchTestProps) {
        super(props)
        this.state = {
            text: 'LOADING...',
            error: undefined
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then((response) => {
                if (response.status !== 200) {
                    this.setState({ error: `RESPONSE STATUS: ${response.status}` });
                }
                return response.text()
            })
            .then((text) => { this.setState({ text }) })
            .catch(() => { this.setState({ error: "LOADING ERROR" }) })
    }

    render() {
        const { error, text } = this.state;
        if (error) throw error;
        return <div>{text}</div>
    }
}

export default FetchTest;