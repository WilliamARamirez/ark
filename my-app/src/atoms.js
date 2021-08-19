import { atom } from 'recoil';


const atoms = {}


atoms.people  = atom({
  key: 'people',
  default: [],
});

export default atoms;