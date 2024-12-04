import App from './App'
import { shallow } from 'enzyme'

describe('Test App.js', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

})