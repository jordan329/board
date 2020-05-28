export var TicketPriority = {
  Low: "Low",
  Medium: "Medium",
  High: "High",
  
  getAll() {
    return [
      this.Low,
      this.Medium,
      this.High
    ];
  }
};