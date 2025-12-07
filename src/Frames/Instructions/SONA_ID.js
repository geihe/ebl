import React from 'react';
import * as Yup from 'yup';
import {MyInput} from "../../Forms/MyInput";
import {Form} from "../../Forms/Form";
import {Zone} from "../../MicroComponents/Zone";


export function SONA_ID(props) {
  const initial = {sona1: '', sona2: ''};
  // eslint-disable-next-line no-unused-vars
  let data=initial;
  const validationSchema = Yup.object().shape({
    sona1: Yup.string(),
    sona2: Yup.string().oneOf([Yup.ref('sona1'), null], 'IDs müssen übereinstimmen')
  });

  return (<>


      <Form initial={initial} validationSchema={validationSchema} finish={props.finish}>
        <Zone>
          <h1>Bitte beachten:</h1>
          <p>Wenn du in <strong>Hagen</strong> studierst dann trage hier deine SONA-ID ein, damit wir dir die VP-Stunden gutschreiben können. Bitte  gib die SONA-ID zweimal ein und kontrolliere genau, dass sich kein Fehler eingeschlichen hat. </p>
          <p>Wenn du in <strong>Würzburg</strong> studierst oder keine Versuchspersonenstunden benötigst, kannst du direkt auf "WEITER" klicken.</p>
        </Zone>
        <MyInput
          name={'sona1'}
          label={'Bitte SONA-ID eingeben.'}
        />
        <MyInput
          name={'sona2'}
          label={'Bitte erneut SONA-ID eingeben.'}
        />
      </Form>
    </>
  );
}