import React from 'react';
import ReactDOM from 'react-dom';
import Clock from 'Clock';

describe('Clock', ()=>{
    it('should render Clock', ()=>{
        const div = document.createElement('div');

        ReactDOM.render(<Clock />, div);
    })
})
