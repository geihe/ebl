import React, {useContext} from 'react';
import * as Yup from 'yup';

import {MyTextArea} from "../../Forms/MyTextArea";
import {Form} from "../../Forms/Form";
import {LngContext} from "../../helper/i18n";

export function EBL01_PostOpen_1_2(props) {
  const t = useContext(LngContext);
  const initial = {postOpen_1: '', postOpen_2: ''};
  let data = initial;
  const validationSchema = Yup.object().shape({
    postOpen_1: Yup.string()
      .required({en: 'Please answer the question', de: 'Bitte gib eine Antwort ein'}),
    postOpen_2: Yup.string()
      .required({en: 'Please answer the question', de: 'Bitte gib eine Antwort ein'}),
  });

  return (<>
      <Form initial={initial} validationSchema={validationSchema} finish={props.finish}>
        <p>
          Bitte stelle Dir folgendes Szenario möglichst anschaulich vor:<br />
 <strong>In einer Vase befinden sich alle 26 Buchstaben des Alphabets.
 Du ziehst nacheinander und zufällig fünf Buchstaben aus der Vase. 
 Wenn Du einen Buchstaben gezogen hast, legst Du ihn vor Dich auf den Tisch. 
 Am Ende jedes Durchgangs hast Du ein „Wort“ aus fünf Buchstaben vor Dir liegen (z.B. GFAVB oder FUMEQ), das Du notierst. 
 Die Buchstaben werden danach alle wieder in die Vase geschüttet und für den nächsten Durchgang neu gemischt. 
   Auf diese Weise ziehst Du insgesamt zehn „Wörter“.</strong>
        </p>
        <p>Beantworte nun bitte die beiden unten stehenden Fragen zu Auswirkungen von hypothetischen Veränderungen an diesem Szenario.</p>
        <hr style={{width: '100%'}}/>
        <MyTextArea
          style={{width: '80%'}}
          intent={'Primary'}
          name={'postOpen_1'}
          label={'1. Welche Auswirkungen hätte es auf die Wahrscheinlichkeit, in einem der zehn Durchgänge ein bestimmtes Wort ziehen (z.B. BOHNE), \n' +
          '        wenn Du jeden gezogenen Buchstaben zwar notieren, dann aber sofort wieder in die Vase zurücklegen würdest? \n' +
          '        Bitte erkläre (eine Rechnung ist nicht notwendig).'}
        />
        <p>Beantworte nun bitte die beiden unten stehenden Fragen zu Auswirkungen von hypothetischen Veränderungen an diesem Szenario.</p>
        <MyTextArea
          style={{width: '80%'}}

          name={'postOpen_2'}
          label={'2.	Die Wahrscheinlichkeit, dass Du in einem der zehn Durchgänge ein bestimmtes Wort ziehst (z.B. BOHNE), hängt davon ab, ob Du die Buchstaben bereits in der richtigen Reihenfolge ziehen musst oder ob Du diese nachträglich noch umsortieren darfst. ' +
          'Bitte erkläre diese Beziehung (eine Rechnung ist nicht notwendig).'}
        />
      </Form>
    </>
  );
}