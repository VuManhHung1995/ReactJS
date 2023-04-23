import "./App.css";
import CountClick from "./components/CountClick";
import CountText from "./components/CountText";
import Counter from "./components/Counter";
import Form from "./components/Form";
import OrderForm from "./components/OrderForm";
import ProductList from "./components/ProductList";
import SearchAndFilter from "./components/SearchAndFilter";
import ShippingCalculator from "./components/ShippingCalculator";
import TaskList from "./components/TaskList";
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <div className="App">
      <CountText />
      <CountClick />
      <Counter />
      <OrderForm />
      <ProductList />
      <TaskList />
      <SearchAndFilter />
      <Form />
      <TemperatureConverter />
      <ShippingCalculator />
    </div>
  );
}

export default App;
