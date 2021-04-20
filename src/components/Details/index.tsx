import React from 'react';
import {connect} from 'react-redux';
import {Route, Link, Redirect} from 'react-router-dom'
import {Card} from 'semantic-ui-react';


const Details = ({results, focusObject}: { results: any, focusObject: number }) => {
    return (
        // @ts-ignore
         <Card.Group centered itemsPerRow={1}>
                        <Card
                                //@ts-ignore
                                image={results.records[focusObject]?.fields.image}
                                header={results.records[focusObject]?.fields.messier}
                                meta={results.records[focusObject]?.fields.objet}
                            />

        </Card.Group>
    );
}

const mapStateToProps = (state: State) => {
    return {
        results: state.results,
        focusObject: state.focusObject

    };
};

const mapDispatchToProps = () => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(Details);



