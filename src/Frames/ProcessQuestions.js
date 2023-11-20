import React from 'react';
import {LikertFrame} from "./LikertFrame";

export function Pq1(props) {
  return (<>
      <LikertFrame minText={'Gar nicht'} maxText={'Sehr stark'}
        title={'<p><strong>Ich habe mich angestrengt, die Gemeinsamkeiten zwischen den einzelnen Lösungsbeispielen zu erkennen. </strong></p>'}
        finish={props.finish}
      />
    </>
  )
    ;
}
export function Pq2(props) {
  return (<>
      <LikertFrame minText={'Gar nicht'} maxText={'Sehr stark'}
        title={'<p><strong>Ich habe mich angestrengt, die Unterschiede zwischen den einzelnen Lösungsbeispielen zu erkennen. </strong></p>'}
        finish={props.finish}
      />
    </>
  )
    ;
}
export function Pq3(props) {
  return (<>
      <LikertFrame minText={'Gar nicht'} maxText={'Sehr stark'}
        title={'<p><strong>Ich habe mich angestrengt, die einzelnen Lösungsbeispiele zu vergleichen. </strong></p>'}
        finish={props.finish}
      />
    </>
  )
    ;
}
export function Pq4(props) {
  return (<>
      <LikertFrame minText={'Gar nicht'} maxText={'Sehr stark'}
        title={'<p><strong>Ich habe mich angestrengt, die Logik hinter den einzelnen Lösungsbeispielen zu erschließen, zu integrieren und zu ordnen. </strong></p>'}
        finish={props.finish}
      />
    </>
  )
    ;
}


