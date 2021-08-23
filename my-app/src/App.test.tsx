import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import ContactForm from './ContactForm';
import ContactView from './ContactView';
import Address from './Address';
import { MemoryRouter} from 'react-router'
import { Route } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<App/>);
    console.log(component.debug)
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show Home component for / router (getting array of routes)', () => {

    expect(pathMap['/']).toBe(ContactForm);
  })
  it('should show ContactView component for /contactView', () => {
    expect(pathMap['/contactView']).toBe(ContactView);
  })
  it('should show Address component techdomain for /address', () => {
    expect(pathMap['/address']).toBe(Address);
  })
  
})
