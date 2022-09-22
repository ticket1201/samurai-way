import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component tests', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatus status={'some here'} updateStatus={() => {
        }}/>)
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance && instance.state.statusText).toBe('some here')
    })
    test('after creation span should be displayed ', () => {
        const component = create(<ProfileStatus status={'some here'} updateStatus={() => {
        }}/>)
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType('span')
        expect(span.children).not.toBeNull()
    })
    test('after creation input shouldnt be displayed ', () => {
        const component = create(<ProfileStatus status={'some here'} updateStatus={() => {
        }}/>)
        const root = component.root;
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            root.findByType('input')
        }).toThrowError()
    })
    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status={'some here'} updateStatus={() => {
        }}/>)
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType('span')
        expect(span.children[0]).toBe('some here')
    })
    test('input should be displayed in edit mode', () => {
        const component = create(<ProfileStatus status={'some here'} updateStatus={() => {
        }}/>)
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType('span')
        span.props.onDoubleClick();
        // eslint-disable-next-line testing-library/await-async-query
        let input = root.findByType('input')
        expect(input.props.value).toBe('some here')
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'some here'} updateStatus={mockCallback}/>)
        const instance = component.getInstance();
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })


})