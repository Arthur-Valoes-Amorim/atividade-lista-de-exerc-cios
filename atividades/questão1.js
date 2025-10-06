

let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA <= populacaoB) {
  populacaoA *= 1.03;  // cresce 3%
  populacaoB *= 1.015; // cresce 1.5%
  anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a de B.`);
