import React from 'react';
import { mount, shallow } from 'enzyme';
import Clock from 'Clock';

describe('Clock', () => {
    it('should render Clock without crashing', () => {
        mount(<Clock />);
    });

    describe('render', () => {
        it('should render the clock', () => {
            const clock = shallow(<Clock timeInSeconds={60} />);
            const time = <span className="clock-text">01:00</span>;

            expect(clock.contains(time)).toEqual(true);
            expect(clock.find('.clock-text').text()).toBe("01:00");
        });
    });

    describe('formatTime', () => {
        it('should format time', ()=> {
            const clock = shallow (<Clock />);
            const seconds = 120;
            const expected = "02:00";
            const actual = clock.instance().formatTime(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when minutes or seconds are less than 10', ()=>{
            const clock = shallow(<Clock />);
            const seconds = 9;
            const expected = "00:09";
            const actual = clock.instance().formatTime(seconds);

            expect(actual).toBe(expected);
        });
    });
});
