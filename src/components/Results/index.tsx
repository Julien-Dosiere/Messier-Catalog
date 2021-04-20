import React from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom'
import {Card} from 'semantic-ui-react';
import './results.scss'


const Results = ({
     results,
     noResult,
     setFocusObject }: {
    results: any,
    noResult: boolean,
    setFocusObject:GenericCallback
}) => {
    return (
        <>
            {noResult ?
                <span className="span--noresult"> No results </span>
            :
                <Card.Group centered itemsPerRow={4}>
                    {results.records.map((result: Result, index: string) => {
                            return (
                                <Link
                                    to={"/details/" + index}
                                    onClick={setFocusObject}
                                    id={index}
                                    key={result.recordid}

                                >
                                    <Card
                                        // @ts-ignore
                                        header={result.fields.messier}
                                        meta={result.fields.objet}
                                        image={result.fields.image}

                                    />
                                </Link>
                            )
                        }
                    )}
                </Card.Group>

            }

        </>
    );
}

const mapStateToProps = (state: State) => {
    return {
        results: state.results,
        noResult: state.noResult
    };

};

const mapDispatchToProps = (dispatch: (...args: any[]) => any) => {
    return{
        setFocusObject:(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log('SET_FOCUS_OBJECT:')

            dispatch({
                type: 'SET_FOCUS_OBJECT',
                payload: {
                    id: event.target.closest('a')?.id
                }
            });
            dispatch({type: 'DETAIL_MODE_ON'});

        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Results);



