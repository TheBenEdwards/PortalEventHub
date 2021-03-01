export interface Props {
    data?: any;
    orientation: string;
    name?: string;
    animate?: boolean;
    padding?: boolean;
}

export interface State {
    animationInProgress: boolean;
    isOpen: boolean;
    animate: boolean;
    padding: boolean;
    border: boolean;
    updateLog?: boolean;
    data?: any;
}