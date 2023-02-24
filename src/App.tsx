import React from "react";
import GameField from "./components/GameField";
import { equalMatrix, Field, fillFieldByField, generateField, generateNextGeneration } from "./common/Tools";
import TopMenu, { ModeButtonType } from "./components/TopMenu";
import BottomMenu, { SizeButtonType, SpeedButtonType } from "./components/BottomMenu";
import TestComponent from "./components/test/TestComponent";
import GlobalStyle from "./components/styled/GlobalStyle";
import TextDialog from "./components/TextDialog";

interface AppProps {
}

interface AppState {
    field: Field;
    mode: ModeButtonType;
    speed: SpeedButtonType;
    size: SizeButtonType;
    width: number;
    height: number;
    dialogVisible: boolean;
    playerName: string;
}

class App extends React.Component<AppProps, AppState> {
    _interval: NodeJS.Timer | undefined;

    setSpeed(speed: SpeedButtonType) {
        this.setState({ speed })
    }

    setSize(size: SizeButtonType) {
        this.setState({ size })
    }

    constructor(props: AppProps) {
        super(props)
        this.state = {
            field: generateField(50, 30),
            mode: 'pause',
            speed: 'medium',
            size: '50x30',
            width: 50,
            height: 30,
            dialogVisible: true,
            playerName: ''
        }
        this.setSpeed = this.setSpeed.bind(this);
        this.setSize = this.setSize.bind(this);
        this.onCellClick = this.onCellClick.bind(this);
        this.onTopMenuClick = this.onTopMenuClick.bind(this);
        this.onRandomClick = this.onRandomClick.bind(this);
        this.onDialogOk = this.onDialogOk.bind(this);
    }

    onCellClick(x: number, y: number) {
        const { mode, field } = this.state;
        if (mode === 'pause') {
            const fieldData = field.data.map((row, i) => row.map((cell, j) => ((i === x && j === y) ? (cell > 0 ? 0 : 1) : cell)));
            this.setState({ field: { ...field, data: fieldData } })
        }
    }

    onTopMenuClick(mode: ModeButtonType) {
        if (mode === 'clear') {
            const { width, height } = this.state;
            this.setState({
                mode: 'pause',
                field: generateField(width, height)
            })
        } else {
            this.setState({ mode });
        }
    }

    onRandomClick(value: number) {
        if (this.state.mode === 'pause') {
            const { width, height } = this.state;
            this.setState({
                field: generateField(width, height, value)
            })
        }
    }

    onDialogOk(value: string) {
        if (value.trim().length > 0) {
            this.setState({
                dialogVisible: false,
                playerName: value.trim()
            })
        }
    }

    shouldComponentUpdate(nextProps: AppProps, nextState: AppState) {
        //не обновлять до момента соответсвия заданного размера игрового поля фактическому
        if (nextState.width !== nextState.field.width || nextState.height !== nextState.field.height) {
            return false;
        }
        return true;
    }

    componentDidUpdate() {
        const { size, width, height, field, mode, speed } = this.state;
        const sizeWH = size.split('x').map(item => parseInt(item));
        const nextWidth = sizeWH[0];
        const nextHeight = sizeWH[1];
        if (nextWidth !== width || nextHeight !== height) {
            const nextField = generateField(nextWidth, nextHeight);
            fillFieldByField(nextField, field);
            this.setState({
                field: nextField,
                width: nextWidth,
                height: nextHeight
            })
        }

        clearTimeout(this._interval)
        if (mode === 'run') {
            let intervalValue = 400;
            if (speed === 'slow') intervalValue = 600;
            if (speed === 'fast') intervalValue = 150;
            this._interval = setInterval(() => {
                const nextGen = generateNextGeneration(field);
                const nextMode = equalMatrix(field.data, nextGen.data) ? 'pause' : mode;
                this.setState({ field: nextGen, mode: nextMode })
            }, intervalValue);
        }
    }

    render() {
        const { mode, field, size, speed, dialogVisible, playerName } = this.state;
        return <>
            <GlobalStyle />
            {dialogVisible && <TextDialog message="Кто ты, воин?" onOk={this.onDialogOk} />}
            <TopMenu active={mode}
                onClick={this.onTopMenuClick}
                onRandomClick={this.onRandomClick}
                text={`Generation: ${field.generation}`}
                playerName={playerName} />
            <GameField field={field.data} onCellClick={this.onCellClick} />
            <BottomMenu activeSize={size} activeSpeed={speed} onSizeClick={this.setSize} onSpeedClick={this.setSpeed} />
        </>
    }
}

export default App;