class TeamMemeber {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} thanks for your feedback`);
  }
}

class Instructor extends TeamMemeber {
  designation = "Web Instructor";
  team = "Web team";
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`Your support session time ${time}`);
  }
  createQuize(module) {
    console.log(`Please create for your module ${module}`);
  }
}

class Developer extends TeamMemeber {
  designation = "Web Instructor";
  team = "Web team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  startSupportSession(time) {
    console.log(`Your support session time ${time}`);
  }
  createQuize(module) {
    console.log(`Please create for your module ${module}`);
  }
}

const sumon = new Instructor("sumon", "natore");
console.log(sumon);
sumon.provideFeedback();
const jannatul = new Developer("jannatul", "natore", "developer");
console.log(jannatul);
jannatul.provideFeedback();
