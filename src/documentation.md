#Frame
Ein Frame steht für ein "Bild" des Versuchs.

#TimelineRec
Die rekursive Timeline entspricht der timeline in jspsych. 


Es können folgende Elemente enthalten sein:
* ein Frame
> {  
>frame: Frame
>id  
>effort: number //1 - default  
>noProgress: //false - default    
>nolog: //false - default  

>}
* ein Array von TimelineRec-Elementen, insbesondere auch ein Array von Frames
* ein IfElse-Element:  
> {  
> if: (lastLog, data) => boolean,  
> then: TimelineRec,  
> else: TimelineRec //optional  
> }
* ein While-Element:  
> {  
> while: (lastLog, data) => boolean,
> do: TimelineRec  
> }
* ein milestone-Element:  
> {  
> milestone: true  
> }
* ein Timer-Element:
> timer: seconds:number || false // false - default
> frames: Frame[]



#Timeline
Die TimelineRec wird in einen "flache" Timeline-Array umgewandelt.
Die App-Komponente erhält als Property die Timeline des Experiments. 

Es ist ein Array, das folgenden Elemente enthalten kann.
* ein Frame
> {  
>type: 'frame',
>frame: Frame ,
>id,
>effort?: number //default 1  
>timer?: seconds || 'continueTimer'
>}
* ein jump-Objekt:  
> {  
>type: 'jump'  
>jumpRel: number   //relative Angabe! z.B. +4  
>}
* ein jumpif-Objekt:  
> {  
> type: 'jumpif'  
> jumpif: function:boolean,    
> jumpRel: number  //relative Angabe! z.B. +4
> }
* ein milestone-Objekt:  
> {  
> type: 'milestone'  
> }


#Umwandlung TimelineRec in Timeline



Beispiel:  
  
  
