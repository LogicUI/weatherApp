const mapForeCastToDays = (array) => {
    return array.map((elements) => {
        return {date:elements.date , condition: elements.day.condition}
    }) 
}

export default mapForeCastToDays;