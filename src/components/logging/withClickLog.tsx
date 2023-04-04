import React from "react"
import { useDispatch } from "react-redux"
import { buttonClick } from "../../store/userStatReduser"

export interface OnClickNative {
    onClick?: React.MouseEventHandler
    logId?: string
}

export function withClickLog<T extends OnClickNative>(WrappedComponent: React.ComponentType<T>) {
    return (props: T) => {
        const dispatch = useDispatch()
        const wrappedClick = (event: React.MouseEvent<Element, MouseEvent>) => {
            const { onClick, logId } = props;
            if (onClick) {
                onClick(event);
            }
            if (logId) {
                dispatch(buttonClick(logId));
            }
        }
        return <WrappedComponent {...props} onClick={wrappedClick} />;
    }
}