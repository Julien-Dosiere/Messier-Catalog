import React from 'react';
import {connect} from 'react-redux';

import {Card} from 'semantic-ui-react';

import AudioPlayer from '../AudioPlayer';


const TrackResults = ({results}: { results: any }) => {
    return (
        <Card.Group centered itemsPerRow={4}>
            {results.records.map((result: Result) => {
                    console.log(result)
                    let image: any = result.fields?.image? result.fields.image : null
                return (
                        <Card
                            // @ts-ignore
                            key={result.recordid}
                            image={image}
                            header={result.fields.messier}
                            meta={result.fields.objet}
                            // extra={audio}
                        />
                    )
                }
            )}
        </Card.Group>
    );
}

const mapStateToProps = (state: State) => {
    return {
        results: state.results
    };
};

const mapDispatchToProps = () => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(TrackResults);



