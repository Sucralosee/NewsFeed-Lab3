import React from 'react';

const Story = ({ story }) => {
  const placeholderImage = 'https://placehold.co/100x100';

  function handleDelete(e) {
    e.stopPropagation(); // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
    e.currentTarget.closest('.story').remove(); // removes it for real this time
  }
  

  return (
    <div className="story">
      <span className="delete" onClick={handleDelete}>x</span> 
      <div className="story_header">
        <div className="story_image">
          <img src={story.image_url || placeholderImage} alt={story.title} />
        </div>
        <h1 className='story_headline'>
          <a href={story.link} target="_blank" className='story_headline_link'>
            {story.title}
          </a>
          <span className="story_creator">By {story.creator}</span> 
        </h1>
      </div>
      <p>{story.description}</p>
    </div>
  );
};

export default Story;
