export function setupCounter(element) {
  let counter = 0
  element.innerHTML = `count is ${counter}`;
  element.addEventListener('click', function() 
  {
    counter ++;
    element.innerHTML = `count is ${counter}`;
  }
  )
  // let counter = 0
  // const setCounter = (count) => {
  //   counter = count
  //   element.innerHTML = `count is ${counter}`
  // }
  // element.addEventListener('click', () => setCounter(counter + 1))
  // setCounter(0)
}
