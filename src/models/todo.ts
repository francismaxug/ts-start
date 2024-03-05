
class NewTodo {
id: string;
task: string;

constructor(todotask: string){
  this.task = todotask
  this.id = new Date().toISOString()
}
}

export default NewTodo