
  const getIncrementBtn = document.querySelector("[data-action='increment']");
  const getDecrementBtn = document.querySelector("[data-action='decrement']");
  const getValue = document.querySelector("#value");

  let counterValue = 0;
  const increment = function (){
    counterValue += 1;
    getValue.textContent = counterValue;
  };
  
  const decrement = function(){
    counterValue -= 1;
    getValue.textContent = counterValue;
  };
  
  getIncrementBtn.addEventListener("click", increment);
  getDecrementBtn.addEventListener("click", decrement);