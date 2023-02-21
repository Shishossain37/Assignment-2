
const readline =require('readline');

let readLine=readline.createInterface(process.stdin,process.stdout);
readLine.question('Please enter your name : ',(user)=>{
    readLine.setPrompt(`Hello ${user}`)
    readLine.prompt();
    readLine.close();
})