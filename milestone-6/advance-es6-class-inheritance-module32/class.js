class Instructor {
  name;
  designation = "Web Instructor";
  team = "Web team";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
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
sumon.startSupportSession("9:00 pm");
sumon.createQuize(60);

const jannatul = new Instructor("jannatul", "natore");
console.log(jannatul);
