
export function convertMonth(ogStr){
    const arrA = ogStr.split(" & ");
    let arrB = [];
    let arrC = [];

   for(let i=0; i<arrA.length;i++){
    arrB = arrA[i].split("-");
    arrB.forEach(element => { arrC.push(element) });
   }
   for(let i=0; i<arrC.length; i++){
    arrC[i] = toMonthName(arrC[i]);
   }

   let xa = 1;
   let xb = 0;
   let finalStr = '';

   arrC.forEach(element => {
    if(xa === 2){
        finalStr += '-'; xa = 0;
    }

    if(xb === 2){
        finalStr += ' & '; xb = 0;
    }

    finalStr += element;
    xa++; xb++;
   });

   return finalStr;
} 

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}




/* export function convertHours(ogStr){
  const arrA = ogStr.split(" & ");
    let arrB = [];
    let arrC = [];

   for(let i=0; i<arrA.length;i++){
    arrB = arrA[i].split(" - ");
    arrB.forEach(element => { arrC.push(element) });
   }

   let xa = 1;
   let xb = 0;
   let finalStr = '';

   arrC.forEach(element => {
    if(xa === 2){
        finalStr += ' - '; xa = 0;
    }

    if(xb === 2){
        finalStr += '  &  '; xb = 0;
    }

    finalStr += element;
    xa++; xb++;
   });
   return finalStr;
} */