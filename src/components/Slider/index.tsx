import {Slider as DSlider} from "antd";
import React from "react";

interface Props {
    value: number,
    needed: number
}

const getCollected = (value: number, needed: number) => {
    return Number((value / needed * 100).toFixed(2))
}

const Slider: React.FC<Props> = ({needed, value}) => {
    const markers = {
        0: '0%',
        100: '100%'
    }
    return <DSlider disabled marks={markers} tooltipPlacement="right"
                    defaultValue={getCollected(value, needed)} max={100} tipFormatter={(val) => {
        return <>{getCollected(value, needed)}%</>
    }} />
}

export default Slider