import "./App.css";
import Header from "./components/Header";
import LinerChart from "./components/charts/linerChart";
import PieChart from "./components/charts/pieChart";
import Cart from "./components/card/Cart";

function App() {
	return (
		<div className="App">
			<Header />

			<div className="linerChart">
				<div className="cart-container">
					<Cart />
					<Cart />
					<Cart />
				</div>
				<div className="linerChart-container">
					<LinerChart />
				</div>
			</div>

			<div className="pieChart">
				<PieChart />
				<PieChart />
			</div>
		</div>
	);
}

export default App;
