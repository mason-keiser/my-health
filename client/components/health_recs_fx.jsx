import React from 'react';

function NextArrow(props) {
  return (
    <div className=" ar next-arrow mr-3"
      style={{ textDecoration: 'none', height: 'fit-content' }}
      onClick={() => {
        props.goToNextRec();
      }}>
      <h1 className="fa fa-angle-right fa-3x" aria-hidden="true">►</h1>
    </div>
  );
}

function BackArrow(props) {
  return (
    <div className=" ar back-arrow ml-3"
      style={{ textDecoration: 'none', height: 'fit-content' }}
      onClick={() => {
        props.goToPrevRec();
      }}>
      <h1 className="fa fa-angle-left fa-3x" aria-hidden="true">◄</h1>
    </div>
  );
}

function Rec(props) {
  return (
    <div className={
      props.index === props.activeIndex
        ? 'flashcards-review-flashcard d-flex justify-content-center align-items-center col-12'
        : 'd-none'
    }
    key={props.index}>
        <div className='recs' key={props.rec.id}>
            <img
            className="recImg p-0"
            src={props.rec.image}
            alt={`${props.rec.name} poster`}
            />
            <h3 className='mt-3'>{props.rec.name}</h3>
            <h5 className='mb-3 pr-2 pl-2'>{props.rec.description}</h5>
        </div>
    </div>
  );
}

export { NextArrow, BackArrow, Rec};
