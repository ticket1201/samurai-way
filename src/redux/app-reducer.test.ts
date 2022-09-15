import {appReducer, setInitializedAC} from './app-reducer';

let state: { initialized: boolean }

beforeEach(() => {
    state = {
        initialized: false
    }
})


test('app should be initialized', () => {
    let action = setInitializedAC()
    let newState = appReducer(state, action)
    expect(newState.initialized).toBe(true)
})