import {
    addPostActionCreator,
    deletePostActionCreator, ProfilePageType,
    profileReducer,
    ProfileStateType,
    setStatus, setUserProfile
} from './profile-reducer';

let state:ProfileStateType

beforeEach(()=> {
    state = {
        posts: [
            {id: '1234', name: 'July Jill', time: '12:35', message: 'Hi, how are you?', likeCount: 15},
            {id: '3211', name: 'John Dory', time: '09:10', message: 'It\'s my first post', likeCount: 1},
            {id: '2133', name: 'Tony Thompson', time: '01:08', message: 'Hey ho lets go', likeCount: 1}
        ],
        profile: {} as ProfilePageType,
        status: '',
    }

})


test('new post should be added', () => {
    let action = addPostActionCreator('one', 'test test', '13:22')
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[0].message).toBe('test test')
})

test('post should be deleted', () => {
    let action = deletePostActionCreator('1234')
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(2)
    expect(newState.posts[0].message).toBe('It\'s my first post')
})

test(`in wrong id case, post length shouldn't be changed`, () => {
    let action = deletePostActionCreator('333')
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[0].message).toBe('Hi, how are you?')
})

test(`status should be changed`, () => {
    let action = setStatus('new status')
    let newState = profileReducer(state,action);
    expect(state.status).toBe('')
    expect(newState.status).toBe('new status')
})

test(`user profile should be set`, () => {
    let action = setUserProfile( {
        aboutMe: 'some',
        contacts: {
            facebook: 'string',
            website: 'string',
            vk: 'string',
            twitter: 'string',
            instagram: 'string',
            youtube: 'string',
            github: 'string',
            mainLink: 'string'
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'no',
        fullName: 'string',
        userId: 3,
        photos: {
            small: 'string',
            large: 'string'
        }
    })
    let newState = profileReducer(state,action);
    expect(newState.profile).not.toBeNull()
    expect(newState.profile?.aboutMe).toBe('some')
})

