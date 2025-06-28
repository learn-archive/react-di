import './App.css';
import { MyComponent } from './components/MyComponent';
import { MyService } from './services/MyService';

const service = new MyService();

export const App = () => {
  return <MyComponent myService={service} />;
};
