import {reducer, StateType} from './Reducer';

test('collapsed should be true',()=>{
    //data
    const state : StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state,{type:'TOGGLE-COLLAPSED'})
    //expection
    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false',()=>{
    //data
    const state : StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state,{type:'TOGGLE-COLLAPSED'})
    //expection
    expect(newState.collapsed).toBe(false)
})

test('wrong type name',()=>{
    //data
    const state : StateType = {
        collapsed: true
    }

    //action
    expect(()=>{
        reducer(state,{type:'FAKE-TYPE'})
    }).toThrowError()

})