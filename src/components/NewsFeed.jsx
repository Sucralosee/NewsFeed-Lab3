import React, { useState } from 'react';
import './App.css';
import Story from './Story';
import newsData from '../sample_news_stories.json'; // Import your JSON file

const NewsFeed = () => {
  const [stories, setStories] = useState(newsData.results); // Initialize stories from JSON data

  // Delete story handler
  const handleDelete = (index) => {
    setStories(stories.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div className="feed">
        {stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
