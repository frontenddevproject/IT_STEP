class DefaultMethods {
  constructor() {}

  showInfo() {
    console.log(this);
  }

}

class Company extends DefaultMethods {
  constructor(name, projects, age) {
    super();
    this.name = name;
    this.projects = projects;
    this.developers = this.getDevelopersFromProjects(projects); // method to implement
    this.age = age;
  }
// -------------------1-st method------------------------------------------------------------
  getDevelopersFromProjects(projects) {
    let developers = [];
    for(let project of projects) developers.push(project.developers);
    return developers.flat();
  }
//------------------------------------------------------------------------------------------


//-----------------------2-nd method-------------------------------------------------------
// getDevelopersFromProjects(projects) {
//   let developers = [];
//   for(let i = 0; i < projects.length; i++){
//     for(let j = 0; j < projects[i].developers.length; j++) {
//       developers.push(projects[i].developers[j]);
//     }
//   }
//   return developers
// }

//------------------------------------------------------------------------------------------
  addProject(newProject) {
    if (newProject instanceof Project) {
      this.projects.push(newProject);
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  removeProject(projectToDelete) {
    if (projectToDelete instanceof Project) {
      this.projects = this.projects.filter(
        ({ name }) => projectToDelete.name !== name
      );
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  addDeveloper(newDeveloper) {
    if (newDeveloper instanceof Developer) {
      this.developers.push(newDeveloper);
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  removeDeveloper(developerToDelete) {
    if (developerToDelete instanceof Developer) {
      this.developers = this.developers.filter(
        ({ name }) => developerToDelete.name !== name
      );
      return;
    }
    new Error("Item is not belongs to proper Class");
  }
}

class Project extends DefaultMethods {
  constructor(name, duration, developers, budget) {
    super();
    this.name = name;
    this.duration = duration;
    this.developers = developers;
    this.budget = budget;
  }

  addDeveloper(newDeveloper) {
    if (newDeveloper instanceof Developer) {
      this.developers.push(newDeveloper);
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

  removeDeveloper(developerToDelete) {
    if (developerToDelete instanceof Developer) {
      this.developers = this.developers.filter(
        ({ name }) => developerToDelete.name !== name
      );
      return;
    }
    new Error("Item is not belongs to proper Class");
  }

}

class Developer extends DefaultMethods {
  constructor(name, age, salary, skills) {
    super();
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.skills = skills;
  }

  addSkill(newSkill) {
    if (!this.skills.includes(newSkill)) {
      this.skills.push(newSkill);
    }
  }

  removeSkill(skillToRemove) {
    this.skills = this.skills.filter((skill) => skill !== skillToRemove);
  }

}

const amazon = new Company("Amazon",
  [
    new Project(
      "Frontend",
      1.5,
      [new Developer("John", 27, 3000, ["JS", "CSS"])],
      25000
    ),
    new Project(
      "Backend",
      1.5,
      [new Developer("Bob", 47, 6000, ["Node.js", "Express"])],
      15000
    ),
  ], [], 20);

amazon.showInfo();
