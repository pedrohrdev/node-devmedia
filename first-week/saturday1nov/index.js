const fs = require('fs');
const readline = require('readline');

const FILE = 'todos.json';

function loadTodos() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

let todos = loadTodos();

function showTodos() {
  console.clear();
  console.log('===== TODO APP (Node.js) =====');
  if (todos.length === 0) {
    console.log('Nenhuma tarefa.');
  } else {
    todos.forEach((t, i) => {
      console.log(`${i + 1}. [${t.done ? 'x' : ' '}] ${t.text}`);
    });
  }
  console.log('\nComandos: add, done <n>, del <n>, clear, exit');
}

function addTodo(text) {
  todos.push({ text, done: false });
  saveTodos(todos);
}

function markDone(index) {
  if (todos[index]) {
    todos[index].done = !todos[index].done;
    saveTodos(todos);
  }
}

function deleteTodo(index) {
  if (todos[index]) {
    todos.splice(index, 1);
    saveTodos(todos);
  }
}

function clearDone() {
  todos = todos.filter(t => !t.done);
  saveTodos(todos);
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function prompt() {
  showTodos();
  rl.question('> ', (cmd) => {
    const [action, ...args] = cmd.trim().split(' ');

    switch (action) {
      case 'add':
        const text = args.join(' ');
        if (!text) console.log('Digite uma tarefa.');
        else addTodo(text);
        break;
      case 'done':
        markDone(parseInt(args[0]) - 1);
        break;
      case 'del':
        deleteTodo(parseInt(args[0]) - 1);
        break;
      case 'clear':
        clearDone();
        break;
      case 'exit':
        console.log('Saindo...');
        rl.close();
        return;
      default:
        console.log('Comando desconhecido.');
    }

    setTimeout(prompt, 400);
  });
}

prompt();