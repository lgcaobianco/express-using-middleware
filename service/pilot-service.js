const pilots = [{
        "id": "1",
        "name": "Lewis Hamilton",
        "titles": 7
    },
    {
        "id": "2",
        "name": "Schumacher",
        "titles": 7
    }
]

const findAll = () => {
    return pilots;
}

const findById = (id) => {
    return pilots.filter(pilot => pilot.id === id)[0];
}


module.exports ={
    findAll,
    findById
}