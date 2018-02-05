import React from 'react';
import CountdownForm from 'CountdownForm';

describe('CountdownForm', ()=> {

    let countdownForm,
        onSetCountdownTimeSpy;

    beforeEach(()=>{
        onSetCountdownTimeSpy = jest.fn();
        countdownForm = mount(<CountdownForm onSetCountdownTime={onSetCountdownTimeSpy}/>);
    });

    afterEach(()=>{
        countdownForm.unmount();
    });

    it('should call onSetCountdownTime if valid seconds entered', ()=>{
     
        countdownForm.find('input[type="text"]').getDOMNode().value = '109'
        countdownForm.find('form').simulate('submit',  { preventDefault: () =>{}});

        expect(onSetCountdownTimeSpy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdownTime if invalid seconds entered', ()=>{

        countdownForm.find('input[type="text"]').getDOMNode().value = 'sad'
        countdownForm.find('form').simulate('submit',  { preventDefault: () =>{}});

        expect(onSetCountdownTimeSpy).not.toHaveBeenCalledWith(109);
    });
});