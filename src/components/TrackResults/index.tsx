import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { connect } from 'react-redux';

import AudioPlayer from '../AudioPlayer';





const TrackResults = ({ results }: { results: TrackResults }) => {
    return (
        <Card.Group centered itemsPerRow={4}>

            {results.tracks.items.map((track: Track) => {
                    let albumImage: string | undefined = track.album?.images?.length ? track.album.images[0].url : ''
                    return (
                        <Card
                            key={track.id}
                            image={albumImage}
                            header={track.name}
                            meta={track.artists[0].name}
                            extra={<AudioPlayer url={track.preview_url}/>}
                        />
                    )
                }
            )}
        </Card.Group>


    );
}

const mapStateToProps = (state: State) => {

    return {
        results: state.trackResults
}; };

const mapDispatchToProps = () => { return {}; };


export default connect(mapStateToProps, mapDispatchToProps)(TrackResults);



