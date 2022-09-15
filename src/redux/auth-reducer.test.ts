import {authReducer, authType, setAuthUserData} from './auth-reducer';

let state: authType

beforeEach(() => {
    state = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }
})


test('user data should be set', () => {
    let action = setAuthUserData({
        id: 1, email: 'email', login: 'login', isAuth: true
    })
    let newState = authReducer(state, action)
    expect(newState.id).toBe(1)
    expect(newState.email).toBe('email')
    expect(newState.login).toBe('login')
    expect(newState.isAuth).toBe(true)
})