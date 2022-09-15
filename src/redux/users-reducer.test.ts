import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingInProgress,
    unfollowSuccess,
    usersReducer,
    UsersType
} from './users-reducer';

let state: UsersType

beforeEach(() => {
    state = {
        users: [],
        pageSize: 4,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('correct user should be followed', () => {
    state = {
        users: [
            {
                name: 'hey',
                id: '1',
                uniqueUrlName: 'sss',
                photos: {
                    small: 'string',
                    large: 'string'
                },
                status: 'string',
                followed: false
            },
            {
                name: 'yo',
                id: '2',
                uniqueUrlName: 'ddd',
                photos: {
                    small: 'string',
                    large: 'string'
                },
                status: '',
                followed: false
            }],
        pageSize: 4,
        totalUserCount: 2,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
    let action = followSuccess('2')
    let newState = usersReducer(state, action)
    expect(newState.users[1].followed).toBe(true)
    expect(newState.users[0].followed).toBe(false)
})
test('correct user should be unfollowed', () => {
    state = {
        users: [
            {
                name: 'hey',
                id: '1',
                uniqueUrlName: 'sss',
                photos: {
                    small: 'string',
                    large: 'string'
                },
                status: 'string',
                followed: false
            },
            {
                name: 'yo',
                id: '2',
                uniqueUrlName: 'ddd',
                photos: {
                    small: 'string',
                    large: 'string'
                },
                status: '',
                followed: true
            }],
        pageSize: 4,
        totalUserCount: 2,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
    let action = unfollowSuccess('2')
    let newState = usersReducer(state, action)
    expect(newState.users[1].followed).toBe(false)
    expect(newState.users[0].followed).toBe(false)
})
test('user should be set', () => {
    let action = setUsers([
        {
            name: 'hey',
            id: '1',
            uniqueUrlName: 'sss',
            photos: {
                small: 'string',
                large: 'string'
            },
            status: 'string',
            followed: false
        },
        {
            name: 'yo',
            id: '2',
            uniqueUrlName: 'ddd',
            photos: {
                small: 'string',
                large: 'string'
            },
            status: '',
            followed: true
        }])
    let newState = usersReducer(state, action)
    expect(newState.users).not.toBeNull()
    expect(newState.users[0].name).toBe('hey')
})
test('correct current page should be set', () => {
    let action = setCurrentPage(2)
    let newState = usersReducer(state, action)
    expect(newState.currentPage).toBe(2)
})
test('correct total users count should be set', () => {
    let action = setTotalUsersCount(2)
    let newState = usersReducer(state, action)
    expect(newState.totalUserCount).toBe(2)
})
test('loading state should set', () => {
    let action = toggleIsFetching(true)
    let newState = usersReducer(state, action)
    expect(newState.isFetching).toBe(true)
})
test('following progress should set for correct user', () => {
    let action = toggleIsFollowingInProgress(true, '1')
    let newState = usersReducer(state, action)
    expect(newState.followingInProgress.length).toBe(1)
    expect(newState.followingInProgress[0]).toBe('1')
})