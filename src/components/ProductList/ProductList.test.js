import ProductList from '../../components/ProductList';
import React from 'react';
import  { expect } from 'chai';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<ProductList  />', () => {
    it('renders first time', ()=>{
        const wrapper = shallow(<ProductList />);
        console.log('here' + wrapper.state('products'));
        expect(wrapper.state('products')).to.be.a('object')

    });


});