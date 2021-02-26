const superbowlWin = (arr) => {
    const record = arr.find(record => {
        return record.result == "W"
    })
    return record !== undefined ? record.year : record
}
