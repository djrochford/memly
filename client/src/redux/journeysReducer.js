const journeysInitialState = {
  nearbyJourneys: [],
  favouriteJourneys: [],
}

export default function journeysReducer(state = journeysInitialState, action) {
  switch(action.type) {

    case 'SET_NEARBY_JOURNEYS': {
      return {
        ...state,
        nearbyJourneys: action.journeys
      }
    }

    case 'ADD_FAVOURITE_JOURNEY': {
      return {
        ...state,
        favouriteJourneys: state.favouriteJourneys.concat([state.nearbyJourneys[action.index]]),
      }
    }

    default : {
      return state
    }
  }
}