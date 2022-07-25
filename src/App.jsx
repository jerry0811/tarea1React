import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./json/quotes.json";
import colors from "./utils/colors";

function App() {
	const [count, setCount] = useState(0);

	const getRandomElement = (arr) => {
		const indexRandom = Math.floor(Math.random() * arr.length);
		return arr[indexRandom];
	};

	let quoteRandom = getRandomElement(quotes);
	let colorRandom = getRandomElement(colors);

	const [randomQuote, setRandomQuote] = useState(quoteRandom);
	const [randomColor, setRandomColor] = useState(colorRandom);

	const objStyle = {
		backgroundColor: randomColor,
	};

	const getRandomAll = () => {
		quoteRandom = getRandomElement(quotes);
		colorRandom = getRandomElement(colors);

		setRandomColor(colorRandom);
		setRandomQuote(quoteRandom);
	};

	return (
		<div className="App" style={objStyle}>
			<QuoteBox
				randomQuote={randomQuote}
				randomColor={randomColor}
				getRandomAll={getRandomAll}
			/>
		</div>
	);
}

export default App;
