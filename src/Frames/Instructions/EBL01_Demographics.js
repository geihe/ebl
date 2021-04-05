import React from 'react';
import * as Yup from 'yup';
import {MyRadioGroup} from "../../Forms/MyRadioGroup";
import {Form} from "../../Forms/Form";
import {MySelect} from "../../Forms/MySelect";
import {UniBielefeld} from "../../MicroComponents/UniBielefeld";

export function EBL01_Demographics(props) {
  const initial = {degree: '', age: '', gender: '', nativeLanguage: ''};
  // eslint-disable-next-line no-unused-vars
  let data=initial;
  const validationSchema = Yup.object().shape({
    degree: Yup.string()
      .required({en: 'Please enter your degree', de: 'Bitte geben Sie Ihren Bildungsabschluss ein'}),
    age: Yup.number()
      .min(18, {en: 'You have to be at least 18 years old', de: 'Sie müssen mindestens 18 Jahr alt sein'})
      .max(100, {en: 'Are your really that old?', de: 'Sind Sie wirklich so alt?'})
      .typeError({en: 'Please enter your age', de: 'Bitte geben Sie Ihr Alter ein'})
      .round('floor'),
    nativeLanguage: Yup.string()
      .required({en: 'Please enter your gender', de: 'Bitte geben Sie Ihr Geschlecht ein'}),
    gender: Yup.string()
      .required({en: 'Please enter your native language', de: 'Bitte geben Sie Ihre Muttersprache ein'}),
  });

  return (<>
      <UniBielefeld/>
      <h1>Bitte beantworte diese Fragen:</h1>
      <Form initial={initial} validationSchema={validationSchema} finish={props.finish}>
        <MySelect
          name={'degree'}
          label={'Höchster Bildungsabschluss'}
          options={[
            {label: 'Bitte Bildungsabschluss auswählen', value: ''},
            {label: 'kein Abschluss', value: 'kein'},
            {label: 'Hauptschulabschluss', value: 'Hauptschul'},
            {label: 'Realschulabschluss bzw. mittlere Reife', value: 'Realschul'},
            {label: 'Fachhochschulreife bzw. Abitur', value: 'Abitur'},
            {label: 'Bachelor', value: 'Bachelor'},
            {label: 'Diplom', value: 'Diplom'},
            {label: 'Staatsexamen', value: 'Staatsexamen'},
            {label: 'Master bzw. Magister', value: 'Master'},
            {label: 'Promotion', value: 'Promotion'},
            {label: 'anderer Abschluss', value: 'anderer'},
          ]}
        />
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

        <MySelect
          name={'nativeLanguage'}
          label={'Muttersprache'}
          options={[
            {label: 'Bitte wähle die passendste Option', value: ''},
            {label: 'Deutsch', value: 'Deutsch'},
            {label: 'Deutsch und weiter(e) Sprache(n) (multilingual)', value: 'multilingual'},
            {label: 'andere', value: 30},
          ]}
        />
      </Form>
    </>
  );
}