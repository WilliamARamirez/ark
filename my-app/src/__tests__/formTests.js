import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';




import ContactForm  from '../ContactForm';

//configure  for new for newer react versions

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('Test Form', ()=>{
  describe('Contact Form', () =>{
    let wrapper;
    


    beforeAll(()=>{
        wrapper = shallow(<ContactForm{...props}/>);
      });

      it('Renders Add Contact', () => {
        expect(wrapper.find("h1").text()).toEqual("Add Contact");
      });



  })
});