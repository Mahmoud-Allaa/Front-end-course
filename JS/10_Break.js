/*************************** Break ***************************/ 
/**
  * Break Loop
  * Continue Loop  
*/


// Break Loop
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

// Continue Loop
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}