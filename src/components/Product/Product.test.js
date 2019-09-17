import Product from '../../components/Product';
import React from 'react';
import  { expect } from 'chai';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<Product  />', () => {
    it('renders first time', ()=>{
        const wrapper = shallow(<Product image='' title='' imageList='[]' />);
        expect(wrapper.state('open')).equal(false);
    });


});