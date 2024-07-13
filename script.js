function stringChop(str, size) {
  // your code here
	if (!str) return [];
  
  // Initialize an array to store the chunks
  let chunks = [];
  
  // Iterate through the string in steps of 'size'
  for (let i = 0; i < str.length; i += size) {
    // Extract a substring of length 'size'
    chunks.push(str.substr(i, size));
  }
  
  // Return the array of chunks
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
