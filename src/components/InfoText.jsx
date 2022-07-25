import React from "react";

const InfoText = ({ randomQuote, randomColor, getRandomAll }) => {
	const objStyle = {
		color: randomColor,
	};
	const objBgStyle = {
		backgroundColor: randomColor,
	};

	return (
		<section className="card" style={objStyle}>
			<article className="card-quote">
				<i className="fa-solid fa-quote-left card-quote_quotation"></i>
				<p className="card-quote_quote">{randomQuote.quote}</p>
			</article>
			<article className="card-autor">
				<p className="card-autor_autor">{randomQuote.author}</p>
				<button
					onClick={getRandomAll}
					className="card-autor_btn"
					style={objBgStyle}
				>
					&#62;
				</button>
			</article>
		</section>
	);
};

export default InfoText;
