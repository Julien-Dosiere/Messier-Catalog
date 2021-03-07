import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { connect } from 'react-redux';

import AudioPlayer from '../AudioPlayer';
// @ts-ignore
const TrackResults = ({ results }: { results: Results }) => (
  <Card.Group centered itemsPerRow={4}>
    {results.tracks.items.map((track: Track) => {
      let albumImage: string | undefined  = track.album?.images?.length ? track.album.images[0].url : ''
      console.log(track.artists[0])
      return(
        <Card
          key={track.id}
          // cette ligne est un peu moche...
          image={albumImage}
          header={track.name}
          meta={track.artists[0].name}
          extra={<AudioPlayer url={track.preview_url} />}
        />
      )}
    )}
  </Card.Group>
);

const mapStateToProps = (state: State) => {

    return {
    results: state.results,
}; };

// 2ème callback : mapDispatchToProps, prépa de props "en écriture"
const mapDispatchToProps = () => { return {}; };

// On génère avec connect() un composant de type "container" qui va
// exploiter le state global de l'application pour préparer des props
// et les passer au composant de présentation ci-avant.
export default connect(mapStateToProps, mapDispatchToProps)(TrackResults);



