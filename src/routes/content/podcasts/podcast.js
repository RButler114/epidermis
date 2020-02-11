import React from 'react';
import '..../styles/App.scss';

function Podcast({ match }) {
	const podcast = podcast.find(({ id }) => id === match.params.podcastId)

  return (
    <div>
      <h1>Podcast Page</h1>
      <p>content</p>
    </div>
  );
}

export default Podcast;
