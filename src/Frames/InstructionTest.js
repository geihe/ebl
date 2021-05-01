import React, {useRef, useState} from "react";
import styled from "@emotion/styled";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Shuffler} from "../helper/Shuffle";
import {DelayedFrame} from "./DelayedFrame";
import {Button} from "@blueprintjs/core";

const items = [
  'Vortest (12 Aufgaben)',
  'Erklärungen über das Urnenmodell und Stochastik',
  '4 mal 4 Lösungsbeispiele mit Befragung zu kognitiver Belastung und zum Flow-Erleben',
  'Pause (10 Minuten)',
  'Testaufgaben (26 Aufgaben)',
  'Verifikationsaufgaben (16 Aufgaben)',
];

const initial = Shuffler.shuffleArray(
  items.map((v, k) => {
    const custom = {
      id: String(k),
      content: v
    };

    return custom;
  })
);

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const QuoteItem = styled.div`
  width: 600px;
  border: 1px solid blue;
  border-radius: 2px;
  margin-bottom: ${grid}px;
  background-color: #ddd;
  padding: ${grid}px;
`;

function Quote({quote, index}) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {provided => (
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {quote.content}
        </QuoteItem>
      )}
    </Draggable>
  );
}

const QuoteList = React.memo(function QuoteList({quotes}) {
  return quotes.map((quote, index) => (
    <Quote quote={quote} index={index} key={quote.id}/>
  ));
});

export function InstructionTest(props) {
  const [state, setState] = useState({quotes: initial});
  const [phase, setPhase] = useState('problem');
  const data = useRef({});

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({quotes});
  }

  function onClick(items) {
    const correct = items.reduce((acc, val, ind) => acc && (val === ind), true);
    data.current = {items, correct};
    setPhase(correct ? 'correctOrder' : 'wrongOrder')
  }

  switch (phase) {
    case 'correctOrder':
      return <DelayedFrame
        delay={2000}
        auto
        data={data.current}
        finish={()=>props.finish(data.current)}>
        <h1>Richtig!</h1><br/>Du wirst nun automatisch weitergeleitet...
      </DelayedFrame>
    case 'wrongOrder':
      return <DelayedFrame
        delay={3000}
        auto
        data={data.current}
        finish={()=>props.finish(data.current)}>
        <h1>Das war nicht die richtige Reihenfolge.</h1> <br/>Lies die Versuchbeschreibung noch einmal gut durch.
      </DelayedFrame>
    default:
      return (
        <>
          <h3>Ziehe mit der Maus die Bausteine des Experiments in die richtige Reihenfolge:</h3>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <QuoteList quotes={state.quotes}/>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Button intent={'Success'} onClick={() => onClick(state.quotes.map(q => +q.id))}>Weiter</Button>
        </>
      );
  }
}
