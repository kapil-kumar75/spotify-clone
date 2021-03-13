export const initialState = {
    user: null,
    playLists:[],
    playing:false,
    token:'BQDTlWO6lwW8N5Y8vZdtR9bAdpspI10Y-FM_yWF05RUE6GhqYeHZWZeibfIKesMAAeCWGMO7ziBT1Pezahn9UL8lMWWz3_NbiC71WXgmBownh7HixHlJobfOenvH_yWmAh7l_fmyPOjpQXBPNqGDPvHyCqfadWTmiK_hY_Vu2MQt8aOw',
}

const reducer = (state, action)=>{  
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
            case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token,
                }
            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists
                }
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
            default:
                return state
    }
}
export default reducer