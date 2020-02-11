import React from 'react';

function DisplayQuote({ quote }) {
  return (
    <div className="DisplayQuote">
      <h2>{quote.character}</h2>
      <img
        src={quote.image}
        alt={quote.character}
      />
      <p>{quote.quote}</p>
    </div>
  );
};

export default DisplayQuote;