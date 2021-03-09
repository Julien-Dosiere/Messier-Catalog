import React from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';


const ArtistResults = ({results}: { results: ArtistResults }) => (
    <Card.Group centered itemsPerRow={4}>
        {results.artists.items.map((artist: Artist) => {
                let albumImage: string | undefined = artist.images[0].url
                return (
                    <Card
                        key={artist.id}
                        image={albumImage}
                        header={artist.name}
                        meta={artist.name}
                    />
                )
            }
        )}
    </Card.Group>
);

const mapStateToProps = (state: State) => {
    return {
        results: state.artistResults
}; };

const mapDispatchToProps = () => { return {}; };


export default connect(mapStateToProps, mapDispatchToProps)(ArtistResults);



