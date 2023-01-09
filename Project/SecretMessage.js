let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Step 1, 2
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

// Step 3 add 2 element 
secretMessage.push('to', 'Program');
console.log(secretMessage.length);

// Step 4  change word
console.log(secretMessage.indexOf('easily')); // gettings index of easily
secretMessage[7] = 'right'; // change the index 7 to 'right'
console.log(secretMessage);

// Step 5 Remove first element
secretMessage.shift();
console.log(secretMessage);

// Step 6 add at the beginning of the array
secretMessage.unshift('Programming');
console.log(secretMessage[0])

// Step 7 Remove Strings 'get, right, the, first, time' replaced by know
secretMessage.splice(6, 5, 'know,');
console.log(secretMessage)

// Step 8
console.log(secretMessage.join(' '))