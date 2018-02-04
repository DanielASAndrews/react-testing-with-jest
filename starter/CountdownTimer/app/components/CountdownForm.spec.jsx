import React from 'react';
import { mount, shallow } from 'enzyme';
import CountdownForm from 'CountdownForm';

describe('CountdownForm', ()=> {
    it('should render without crashing', ()=>{
        mount(<CountdownForm />);
    });

    it('should call onSetCountdownTime if valid seconds entered', ()=>{
        const onSetCountdownTime = jest.fn();

        const countdownForm = mount(<CountdownForm onSetCountdownTime={onSetCountdownTime} />);

        countdownForm.find('input[type="text"]').getDOMNode().value = '109'
        countdownForm.find('form').simulate('submit',  { preventDefault: () =>{}});

        expect(onSetCountdownTime).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdownTime if invalid seconds entered', ()=>{
        const onSetCountdownTime = jest.fn();

        const countdownForm = mount(<CountdownForm onSetCountdownTime={onSetCountdownTime} />);

        countdownForm.find('input[type="text"]').getDOMNode().value = 'sad'
        countdownForm.find('form').simulate('submit',  { preventDefault: () =>{}});

        expect(onSetCountdownTime).not.toHaveBeenCalledWith(109);
    });
});