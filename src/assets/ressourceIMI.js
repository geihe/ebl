export const rating1Config = {
  type: 'statement',      //image or statement
  min: 1,
  max: 7,
  step: 1,
  minText: {en: 'strongly disagree', de:'starke Ablehung'},
  maxText: {en: 'strongly agree', de:'starke Zustimmung'},
  title: {en: 'Please rate the statement:', de:'Bitte bewerten Sie die Aussage:'},
  items: [
    {en: '(1)	I put a lot of effort into this.',
      de:'(1) Ich habe mir viel Mühe gegeben.'},
    {en: '(2)	I didn’t try very hard to do well at this activity.',
      de:'(2) Ich habe mich nicht sehr bemüht, bei dieser Aufgabe gut abzuschneiden.'},
    {en: '(3)	I tried very hard on this activity.',
      de:'(3) Ich habe mich bei der Aufgabe sehr bemüht.'},
    {en: '(4)	It was important to me to do well at this activity.',
      de:'(4) Es war mir wichtig, bei dieser Aufgabe gut abzuschneiden.'},
    {en: '(5)	I didn’t put much energy into this.',
      de:'(5) Ich habe nur wenig Energie in diese Aufgabe gesteckt.'},
  ]
}

export function getArray(start, end, step = 1) {
  const length = Math.floor((end-start)/step)+1;
  return Array.from(Array(length), (_, i) => start + i * step);
}