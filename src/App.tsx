import './App.css';
// import { getMenu } from './showMenu';
import { Menu } from './menu';

function App() {
  return (
    <>
      <div className="hat">
        <button className="hatBut">menu</button>
        <button className="hatBut">desired</button>
      </div>

      <div className="container">
        <h1>menu</h1>

        <ul>
          {Menu.map((dish, index) => (
            <li className="dishList">
              {index + 1}. {dish.name}: {dish.price}${' '}
              <button
                className="dishBut"
                onClick={() => {
                  dish.isDes = !dish.isDes;
                  console.log(dish.isDes);
                }}
              >
                add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
