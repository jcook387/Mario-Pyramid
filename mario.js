// TODO #2
// Take in user input for the height
let height = prompt("Enter the height of the pyramid: ");
printPyramid(height);
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    let n = parseInt(height);
    let string = "";
    
    for (let i = 1; i <= n; i++) {

      for (let j = 0; j < n - i; j++) {
        string += " ";
      }

      for (let k = 0; k < i + 1; k++) {
        string += "#";
      }
      string += "\n";
    }
    

    // TODO #1
    // print that pyramid!
    console.log(string);
}
