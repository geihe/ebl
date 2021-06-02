import React, {useContext} from 'react';
import * as Yup from 'yup';
import {MyRadioGroup} from "../../Forms/MyRadioGroup";
import {Form} from "../../Forms/Form";
import {MySelect} from "../../Forms/MySelect";
import {Context} from "../../index";

export function Instruction10(props) {
  const {t, config} = useContext(Context);

  const initial = {age: '', gender: '', role: ''};
  let data = initial;
  const validationSchema = Yup.object().shape({
    age: Yup.number()
      .min(18, {en: 'You have to be at least 18 years old', de: 'Sie müssen mindestens 18 Jahr alt sein'})
      .max(100, {en: 'Are your really that old?', de: 'Sind Sie wirklich so alt?'})
      .typeError({en: 'Please enter your age', de: 'Bitte geben Sie Ihr Alter ein'})
      .round('floor'),
    gender: Yup.string()
      .required({en: 'Please enter your gender', de: 'Bitte geben Sie Ihr Geschlecht ein'}),
  });

  return (
    <Form initial={initial} validationSchema={validationSchema} finish={props.finish}>
      <MySelect
        name={'age'}
        label={'Alter'}
        options={[
          {label: 'Bitte Alter auswählen', value: 0},
          {label: '18-24', value: 18},
          {label: '25-29', value: 25},
          {label: '30-34', value: 30},
          {label: '35-39', value: 35},
          {label: '40-44', value: 40},
          {label: '45-49', value: 45},
          {label: '50-54', value: 50},
          {label: '55-59', value: 55},
          {label: '60-64', value: 60},
          {label: '65-69', value: 65},
          {label: '70-74', value: 70},
          {label: '75-79', value: 75},
          {label: '80 oder älter', value: 80},
        ]}
      />

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