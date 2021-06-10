const number = 15
let guess = 0

while (guess !== number) {
  guess = prompt('Guess my age')
  guess = parseInt(guess)

  if (guess > number) {
    alert('Opps too high!')
  }else if (guess === number) {
    alert('you got it!')
  } else if (guess < number) {
    alert('Too low!')
  } 
}
