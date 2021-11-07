const dataRes = {
    categories: [],
    images:[]
}
export default function dataReducer (state = dataRes,action){
    switch (action.type){
        case "setCategories": {
            return {
                ...state,
                categories: action.payload
            }
        }
        case "setImages": {
            return {
                ...state,
                images: action.payload
            }
        }
        default:
            return state
    }
}
