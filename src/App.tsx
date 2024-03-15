import { Provider } from 'react-redux';
import { store } from './rtk/store';
import { Courses } from './features/Courses/pages';

const App = () => {
  return (
    <Provider store={store}>
      <Courses />
    </Provider>
  );
};

export default App;
