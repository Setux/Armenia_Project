const GetTagColor = (type: string) => {
    switch (type) {
        case "end":
            return "grey"
        case "green":
            return "green"
        case "orange":
            return "orange"
        default:
            return "white"
    }
}

export default GetTagColor