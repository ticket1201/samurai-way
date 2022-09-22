import {create} from 'react-test-renderer';
import React from 'react';
import {Pagination} from './Pagination';

describe('Paginator component tests', () => {
    test('page count is 13 but should show only 12', () => {
        const component = create(<Pagination totalUserCount={13} pageSize={1} currentPage={1} onPageChanged={()=>{}}/>)
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let spans = root.findAllByType('span')
        // @ts-ignore
        expect(spans.length).toBe(12)
    })
})