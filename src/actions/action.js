const toBd = () => {
    return {
        type: 'BD'
    }
}

const toName1 = (name) => {
    return {
        type: 'PL1',
        payPl1: name
    }
}

const toName2 = (name) => {
    return {
        type: 'PL2',
        payPl2: name
    }
}

const mo = (count) => {
    return {
        type: 'MO',
        payCount: count
    }
}

const cond1 = (event) => {
    return {
        type: 'COND1',
        payEvent: event
    }
}

const cond2 = (event) => {
    return {
        type: 'COND2',
        payEvent: event
    }
}

const vin = () => {
    return {
        type: 'WIN'
    }
}

export {toBd, toName1, toName2, mo, cond1, cond2, vin};