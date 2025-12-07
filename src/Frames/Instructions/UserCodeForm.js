import React from 'react';
import * as Yup from 'yup';
import {MyInput} from "../../Forms/MyInput";
import {Form} from "../../Forms/Form";
import {Zone} from "../../MicroComponents/Zone";
import image from "../../assets/CodeBeispiel.jpg";


export function UserCodeForm(props) {
  const initial = {code: ''};
  // eslint-disable-next-line no-unused-vars
  let data = initial;
  const validationSchema = Yup.object().shape({
    code: Yup.string()
      .min(6, 'Der Code muss genau 6 Zeichen lang sein.')
      .max(6, 'Der Code muss genau 6 Zeichen lang sein.')
      .test('example', 'Du sollst deinen EIGENEN Code eingeben :)', val => val!= 'ONAU21'),
  });

  return (<>
      <Form initial={initial} validationSchema={validationSchema} finish={props.finish}>
        <Zone>
          <img src={image} alt={'Bitte eigenen Code erstellen.'} style={{width: "100%"}}/>
        </Zone>
        <MyInput
          name={'code'}
          label={'Bitte persönlichen 6-stelligen Code eingeben.'}
        />
      </Form>
    </>
  );
}