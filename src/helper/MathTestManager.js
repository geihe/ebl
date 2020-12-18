export class MathTestManager {
  constructor() {
    this.interval1 = [10,99];
    this.interval2 = [10,99];
    this.operators = ['+', '-'];
    return this;
  }

  setInterval1(i) {
    this.interval1=i;
    return this;
  }

  setInterval2(i) {
    this.interval2=i;
    return this;
  }

  setOperators(op) {
    this.operators=op.split('');
    return this;
  }

  hasNext() {
    return true;
  }

  nextTask() {
    let n1 = this.randomNumber(this.interval1);
    let n2 = this.randomNumber(this.interval2);
    const op = this.operators[this.randomNumber([0, this.operators.length-1])];

    switch (op) {
      case '-':
        const first = Math.max(n1, n2);
        const second = Math.min(n1, n2);

        const difference = first-second;
        return {
          stimulus: `${first} ${op} ${second} = `,
          correctAnswer: difference,
          validate: (answer)=> +answer === difference
        };
      case '*':
      case 'x':
        const product = n1 * n2;
        return {
          stimulus: `${n1} ${op} ${n2} = `,
          correctAnswer: product,
          validate: (answer)=> +answer === product
        };
      case ':':
      case '/':
        const quotient = n1;
        return {
          stimulus: `${n1*n2} ${op} ${n2} = `,
          correctAnswer: quotient,
          validate: (answer)=> +answer === quotient
        };
      default:
        const sum = n1 + n2;
        return {
          stimulus: `${n1} ${op} ${n2} = `,
          correctAnswer: sum,
          validate:
            (answer)=> {
              console.log(answer, sum);
            return +answer === sum;
            }
        };
    }
  }

  randomNumber(interval) {
    const min = Math.min(...interval);
    const max = Math.max(...interval);
    return Math.floor(Math.random()*(max - min + 1) + min);
  }
}