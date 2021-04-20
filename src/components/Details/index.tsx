import React from 'react';
import {connect} from 'react-redux';
import {Route, Link, Redirect} from 'react-router-dom'
import {Card, List} from 'semantic-ui-react';
import './details.scss'

const Details = ({results, focusObject}: { results: any, focusObject: number }) => {
    return (
        // @ts-ignore
         <Card.Group centered itemsPerRow={2}>
                <Card
                    className={"card--image"}
                    image={results.records[focusObject]?.fields.image}
                    header={results.records[focusObject]?.fields.messier}

                    />
                 <Card
                     header={results.records[focusObject]?.fields.messier}
                     description={
                         <List>
                             <List.Item>
                                 Type: <b>{results.records[focusObject]?.fields.objet}</b>
                             </List.Item>
                             <List.Item>
                                 Constellation: <b>{results.records[focusObject]?.fields.latin_name_nom_latin}</b>
                             </List.Item>
                             <List.Item>
                                 Season: <b>{results.records[focusObject]?.fields.saison}</b>
                             </List.Item>
                             <List.Item>
                                 Discoverer: <b>{results.records[focusObject]?.fields.decouvreur}</b>
                             </List.Item>
                             <List.Item>
                                 Declination: <b>{results.records[focusObject]?.fields.dec}</b>
                             </List.Item>
                             <List.Item>
                                 NGC Code: <b>{results.records[focusObject]?.fields.ngc}</b>
                             </List.Item>
                         </List>

                     }
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



