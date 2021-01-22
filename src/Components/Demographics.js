import React, {useContext} from 'react';
import * as Yup from 'yup';
import {MyNumInput} from "../Forms/MyNumInput";
import {MyRadioGroup} from "../Forms/MyRadioGroup";
import {LngContext} from "../helper/i18n";
import {Form} from "../Forms/Form";

export function Demographics(props) {
  const t = useContext(LngContext);

  const initial = {age: '', gender: '', role: '', course: ' '};
  let data = initial;
  const validationSchema = Yup.object().shape({
    age: Yup.number()
      .min(18, {en: 'You have to be at least 18 years old', de: 'Sie müssen mindestens 18 Jahr alt sein'})
      .max(100, {en: 'Are your really that old?', de: 'Sind Sie wirklich so alt?'})
      .typeError({en: 'Please enter your age', de: 'Bitte geben Sie Ihr Alter ein'})
      .round('floor'),
    role: Yup.string()
      .required({en: 'Please enter your role', de: 'Bitte geben Sie Ihre Rolle an der Universtät ein'}),
    gender: Yup.string()
      .required({en: 'Please enter your gender', de: 'Bitte geben Sie Ihr Geschlecht ein'}),
    course: Yup.string()
      .required({en: 'Please enter your course', de: 'Bitte geben Sie Ihren Kurs ein'}),
  });

  return (
    <Form initial={initial} validationSchema={validationSchema} finish={props.finish}>
      <MyNumInput
        name='age'
        label={{de: 'Alter: ', en: 'Age: '}}
        placeholger={{de: 'Alter: ', en: 'Age: '}}/>

      <MyRadioGroup
        name='gender'
        label={{en: 'Gender', de: 'Geschlecht'}}
        inline={true}
        options={[
          {label: {en: 'male', de: 'männlich'}, value: 'male'},
          {label: {en: 'female', de: 'weiblich'}, value: 'female'},
          {label: {en: 'other', de: 'divers'}, value: 'other'},
        ]}/>
    </Form>
  );
}