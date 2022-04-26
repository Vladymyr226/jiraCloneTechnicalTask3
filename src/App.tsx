
import Card from './component/card'
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