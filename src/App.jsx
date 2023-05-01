import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/reset.css';
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

// import { feedImages } from "./api"
// feedImages();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Home/>
    </div>
  </QueryClientProvider>

  );
}

export default App