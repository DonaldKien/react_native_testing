const initialState = {
    linkPressed: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LINKPRESSED': return {linkPressed: true} 
    }
}

export default reducer;