class DefaultMethods {
  constructor(isClosed) {
    this.isClosed = isClosed;
  }

  showInfo() {
    console.log(this);
  }

  close () {
    if (this instanceof Developer) return;

    if (this instanceof Company || this instanceof Project) {
      for (let developer of this.developers) {
        this.removeDeveloper(developer);
      }
    }

    if (this instanceof Company) {
      this.projects.forEach((project) => project.close());
      this.isClosed = true;
    }

    if (this instanceof Project) {
      this.isClosed = true;
    }

  }
  checkBirthday() {
    if (this instanceof Company || this instanceof Project) {
      (this.developers.length !== 0) ? this.developers.forEach((developer) => developer.birthday()) :
      console.log("There are no developers in the company yet");
    }
  }
}

class Company extends DefaultMethods {
  constructor(name, projects, age) {
    super(false);
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
  super(false);
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

finish(isSuccess) {

  // if (isSuccess) {
  //   this.developers.forEach((developer) =>
  //     developer.increaseSalary((this.budget / this.developers.length) * 0.5)
  //   );
  // } else {
  //   this.developers.forEach((developer) =>
  //     developer.decreaseSalary(developer.salary * 0.3)
  //   );
  // }

  this.developers.forEach((developer) =>
    isSuccess
      ? developer.increaseSalary((this.budget / this.developers.length) * 0.5)
      : developer.decreaseSalary(developer.salary * 0.3)
  );
}
}

class Developer extends DefaultMethods {
constructor(name, age, birthdayDate, salary, skills) {
  super(false);
  this.name = name;
  this.age = age;
  this.birthdayDate = birthdayDate;
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

birthday() {
  const birthDate = this.birthdayDate.getDate();
  const birthMonth = this.birthdayDate.getMonth() + 1;
  console.log(this);
  const currentDate = new Date();
  const todaysDate = currentDate.getDate();
  const todaysMonth = currentDate.getMonth() + 1;

  

  if ((birthDate === todaysDate) && (birthMonth === todaysMonth)) {
    this.age++;
    this.salary = this.salary + this.salary * 0.3;
  }
}

increaseSalary(amount) {
  this.salary += amount;
}

decreaseSalary(amount) {
  this.salary -= amount;
}
}

const amazon = new Company(
"Amazon",
[
  new Project(
    "Frontend",
    1.5,
    [new Developer("John", 27, new Date(),  3000, ["JS", "CSS"])],
    25000
  ),
  new Project(
    "Backend",
    1.5,
    [new Developer("Bob", 47, new Date(),  6000, ["Node.js", "Express"])],
    15000
  ),
],
20
);

amazon.showInfo();
amazon.checkBirthday();




