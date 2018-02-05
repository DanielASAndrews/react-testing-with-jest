import React from 'react';
import Countdown from 'Countdown';

jest.useFakeTimers();

describe('Countdown', () => {

    let countDown;

    beforeEach(()=>{
        countDown = mount(<Countdown />);
    });

    afterEach(()=>{
        countDown.unmount();
    });

    describe('handleSetCountdownTime()', () => {
        it('it should set countdown time and start countdown', () => {
            
            const actual = countDown.instance().handleSetCountdownTime(10);
            const expected = { count: 10, countdownStatus: 1 };

            expect(countDown.state().count).toEqual(expected.count);
            expect(countDown.state().countDownStatus).toEqual(expected.countDownStatus);

            jest.advanceTimersByTime(1000);

            expect(countDown.state().count).toEqual(9);
        });

        it('should never set countdown time to less than zero', () => {
            
            const actual = countDown.instance().handleSetCountdownTime(1);

            jest.advanceTimersByTime(3000);

            expect(countDown.state().count).toEqual(0);
        });
    });
});