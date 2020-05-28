export var Section = {
  Backlog: "Backlog",
  Staging: "Staging",
  ToDo: "To Do",
  Doing: "Doing",
  Done: "Done",
  Archive: "Archive",

  getAll() {
    return [
      this.Backlog,
      this.Staging,
      this.ToDo,
      this.Doing,
      this.Done,
      this.Archive,
    ]
  }
}