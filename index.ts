import PromptSync from "prompt-sync";

const user = PromptSync()("Enter your name: ");
console.log(`Hello, ${user}`);