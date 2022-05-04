
import Card from './component/main'
import { Provider } from 'react-redux'
import store from './redux/store/store'

function App() {
  return (
    <Provider store={store}>
      <Card />
    </Provider>
  );
}

export default App;