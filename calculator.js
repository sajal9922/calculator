let calculation = localStorage.getItem('calculation') || '';
    displayCalculation();
    function updateCalculation(value) {
      calculation += value;
     /* if(value === '0'){
        document.querySelector('.js-clear-button').classList.add('js-clear-button-2');
      }else{
        document.querySelector('.js-clear-button').classList.remove('js-clear-button-2');
      }*/
      displayCalculation();
      localStorage.setItem('calculation', calculation);
    }
    // Display function.....
    function displayCalculation() {
      document.querySelector('.js-display').innerHTML = calculation;
      if(calculation === '0'){
        document.querySelector('.js-clear-button').classList.add('js-clear-button-2');
      }else{
        document.querySelector('.js-clear-button').classList.remove('js-clear-button-2');
      }
  
    }