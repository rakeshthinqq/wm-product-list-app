import Carousal from '../../components/Carousal';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const testImageList = [ 
                    {'href': 'https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0078/flannel-herringbone-duvet-cover-shams-medium-gray-2-m.jpg'},
                    {'href': 'https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0078/flannel-herringbone-duvet-cover-shams-medium-gray-m.jpg'},
                    {'href': 'https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0020/full-moon-felted-pillow-slate-m.jpg'}
                    ];

describe('<Carousal />', () => {
    it('renders 1 <img /> components', () => {
      const wrapper = shallow(<Carousal imageList={testImageList}/>);
      expect(wrapper.find('img')).to.have.lengthOf(1);
    });

    it('simulate click next and Prev', () => {
        const wrapper = shallow(<Carousal imageList={testImageList}/>);
        expect(wrapper.state('currentIndex')).equal(0);

        wrapper.find('#next').simulate('click')
        expect(wrapper.state('currentIndex')).equal(1);

        wrapper.find('#prev').simulate('click')
        expect(wrapper.state('currentIndex')).equal(0);
    });

});