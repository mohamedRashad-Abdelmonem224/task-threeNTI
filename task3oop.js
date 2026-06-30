class allschoolmembers{
    #email;
    #id;
    constructor(name, email, id) {
        this.name = name;
        this.#email = email; 
        this.#id = id;      
    }

    describe() {
        return `Member: ${this.name}, ID: ${this.id}, Email: ${this.email}`;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        if (newEmail.includes("@")) {
            this.#email = newEmail;
        } else {
            console.log("Invalid email");
        }
    }

    set id(id) {
        if (typeof id === "number" && id > 0) { 
            this.#id = id;
        } else {
            console.log(`invalid id ${id}`);
        }
    }

    get id(){
        return this.#id;
    }
}
class Admin extends allschoolmembers{
    constructor(name, email, id, role) {
        super(name, email, id);
        this.role = role;
        this.members = []; 
    }

    addMember(member) {
        this.members.push(member);
        console.log(`Member ${member.name} was added`);
    }

    removeMember(id) { 
        this.members = this.members.filter((m) => m.id !== id); 
        console.log(`Member with id ${id} was removed`);
    }

    listMember() {
        console.log("All users managed by Admin:");
        this.members.forEach((m) => { 
            console.log(`- ${m.name} (${m.constructor.name})`);
        });
    }

    performTask() {
        console.log("The Admin manages all");
    }
}class Teacher extends allschoolmembers{
    constructor(name,email,id,subject){
        super(name,email,id)
        this.subject = subject;
        this.gradedStudents = []; 
    }
    
    gradeStudent(studentName, grade){ 
        this.gradedStudents.push({name: studentName, grade: grade});
        console.log(`${this.name} graded ${studentName}: ${grade}`); 
    }
    listGradedStudents(){ 
        console.log(`Students graded by ${this.name} for ${this.subject}:`); 
        if (this.gradedStudents.length === 0) {
            console.log("students faild");
            return;
        }
        this.gradedStudents.forEach(s => console.log(`- ${s.name}: ${s.grade}`)); 
    }

    describe() { 
        return `Teacher: ${this.name}. Subject: ${this.subject}`;
    }
}
class Student extends allschoolmembers{ 
    constructor(name, email, id){
        super(name, email, id)
        this.subjects = [];
    }
    enroll(subject){ 
        if(!this.subjects.includes(subject)){ 
            this.subjects.push(subject);
            console.log(`${this.name} enrolled in ${subject}`);
        }
    }
    viewSubjects(){ 
        console.log(`${this.name}'s subjects: ${this.subjects.join(', ') || 'None'}`);
    }
    describe() { 
        return `Student: ${this.name}. Enrolled in ${this.subjects.length} subjects`;
    }
}
//تجريب الكلاسات
const principal1 = new Admin("Mr. Gamal", "gamal@school.com", 1, "Principal"); 
const teacher1 = new Teacher("Ahmed", "ahmed@school.com", 101, "Math"); 
const student1 = new Student("Youssef", "youssef@school.com", 201);
const student2= new Student("esraa", "esraa@school.com", 202);
const member1 = new Admin("ibra", "ibra@.com", 32, "teach");
const member2 = new Admin("mohamed", "moo@.com", 33, "Admin");
console.log(member1);
console.log(member2);

principal1.addMember(teacher1);
principal1.addMember(student1);
principal1.addMember(student2);

student1.enroll("Math");
student1.enroll("Science");
student2.enroll("Math");

teacher1.gradeStudent(student1.name, 95); 
teacher1.gradeStudent("esraa", 98); 
const allMembers = [principal1, teacher1, student1, student2];

console.log("\n--- School Report ---");
allMembers.forEach(person => {
    console.log(person.describe()); 
});
teacher1.listGradedStudents(); 

console.log("========================end end and i'm end=============================");
