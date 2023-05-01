import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/reset.css';
<<<<<<< HEAD
=======

>>>>>>> da84d6f5ecc2a81c72d7a0c9a74a82b8db44d730
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
