import React from 'react';
import news_feed from './sample_news_stories.json'; 
import Story from './components/Story';

function App() {
  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <header className="header">
        <div className="logo">EV News</div> 
        <h1 className="site-title">Electric Vehicle News Feed</h1>
        <div className='navigation'>
          <div className="search-icon">🔍</div> 
          <nav className="nav">
            <ul className="nav-list">
              <li>Home</li>
              <li>Latest</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="feed">
        <h2>Breaking News</h2>
        {stories.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </div>
    </div>
  );
}

export default App;
