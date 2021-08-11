
const timer1 = function() {
  // Get the command line args
  let commandArgs = process.argv.slice(2);

  if (commandArgs.length === 0) {
    return false;
  }
  // Create an array which will hold the strings converted to nums
  let numArgs = [];
  for (let str of commandArgs) {
    str += '000';
    let parsedInt = parseInt(str);
    if (parsedInt < 0 || isNaN(parsedInt)) {
      continue;
    }
    numArgs.push(parsedInt);
  }
  //Sorted them but probably not necessary considering how fast the for loop runs
  const sortedArgs = numArgs.sort(function(a, b) {
    return a - b;
  });

  let delay = 0;
  for (let arg of sortedArgs) {
    delay = arg;
    //'\x07' should ring bell but it doesn't in vs code so using . also
    setTimeout(() => {
      process.stdout.write("\x07");
    }, delay);
    setTimeout(() => {
      process.stdout.write(".");
    }, delay);
  }
  // Kept track of the delay so that we can use it to print a new line at the end of the fx
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay + 100);
};

timer1();

