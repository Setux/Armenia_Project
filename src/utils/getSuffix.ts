const getSuffix = (value: number) => {
    if (value < 1000) {
        return value
    } else if (value >= 1000 && value < 1000000) {
        return `${(value / 1000).toFixed(2)}K`
    } else if (value >= 1000000 && value < 1000000000) {
        return `${(value / 1000000).toFixed(2)}KK`
    } else if (value >= 1000000000 && value < 1000000000000) {
        return `${(value / 1000000000).toFixed(2)}KKK`
    } else {
        return `${(value / 1000000000000).toFixed(2)}T`
    }
}

export default getSuffix