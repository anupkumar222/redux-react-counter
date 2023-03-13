export function incrememt() {
    return {
        type: "increment"
    }      
}

export function decrememt() {
    return {
        type: "decrement"
    }
        
}
export function reset() {
    return {
        type: "reset"
    }
       
}

export function updateStep(step) {
    return {
        type: "changeStep",
        payload: step
    }
       
}