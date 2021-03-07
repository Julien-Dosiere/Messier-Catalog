import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import AudioPlayer from 'src/components/AudioPlayer';

const TrackResults = ({ results }) => (
  <Card.Group centered itemsPerRow={4}>
    {results.items.map((track) => (
      <Card
        key={track.id}
        // cette ligne est un peu moche...
        image={track.album.images && track.album.images.length > 0 && track.album.images[0].url}
        header={track.name}
        meta={track.artist}
        extra={<AudioPlayer url={track.preview_url} />}
      />
    ))}
  </Card.Group>
);

TrackResults.propTypes = {
  // l'objet est un peu gros... ca serait bien de valider juste ce dont on se sert
  results: PropTypes.object.isRequired,
};

export default TrackResults;
