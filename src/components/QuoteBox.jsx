import React from "react";
import InfoText from "./InfoText";

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {
	return (
		<article className="QuoteBox">
			<InfoText
				randomQuote={randomQuote}
				randomColor={randomColor}
				getRandomAll={getRandomAll}
			/>
		</article>
	);
};

export default QuoteBox;
