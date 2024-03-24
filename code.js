const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  // results.innerHTML = `${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  }
  const bmi = `${(weight / ((height*height)/10000)).toFixed(2)}`;

  if(bmi<=18.60){
    results.innerHTML = `<span>Under Weight = ${bmi}</span>`;
  } else if(bmi>18.60 && bmi<=24.9){
    results.innerHTML = `<span>Normal Range = ${bmi}</span>`;
  } else{
    results.innerHTML = `<span>OverWeight = ${bmi}</span>`;
  }
});
