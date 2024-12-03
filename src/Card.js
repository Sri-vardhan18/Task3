import React from 'react';
import './App.css';

function Card({ title, selftext_html, score, url }) {
  return (
    <div className="cardStyle">
      <h3>{title}</h3>
       
      <div 
          className="htmlContent"
          dangerouslySetInnerHTML={{ __html: selftext_html }}
        />
      <p>
        <strong>Score:</strong> {score}
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Post
      </a>
    </div>
  );
}

export default Card;
