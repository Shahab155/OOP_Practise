"use strict";
// Topic: "Class In OOP";
example: 1;
class Mobile {
    constructor() {
        this.brand = "Default";
        this.model = "default";
        this.price = 0;
    }
    setClassProperties(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        console.log({ brand, model, price });
    }
}
;
// Without contructor function 
let QMobile = new Mobile();
QMobile.setClassProperties("QMobile", "A9", 2016);
// mobile 2
let Samsung = new Mobile();
Samsung.setClassProperties("Samsung", "A32", 2021);
// Mobile 3
let Apple = new Mobile();
Apple.setClassProperties("IPhone", "12Pro", 2023);
// mobile 3
let Oppo = new Mobile();
Oppo.setClassProperties("OPPO", "F9", 2019);
// mobile 4
let Vivo = new Mobile();
Vivo.setClassProperties("Vivo", "Y20", 2021);
// ---------------------------------- Class 2 ------------------------------------------------
// declare class of country 
class Country {
    constructor() {
        this.name = "";
        this.provinces = 0;
        this.capital = "";
    }
    // make construtor of that class 
    setObjectProperties(name, provinces, capital) {
        this.name = name;
        this.provinces = provinces;
        this.capital = capital;
    }
    ;
    // declare a function that will tell about the capital of specified country
    description() {
        console.log(`${this.capital}, is capital of ${this.name}.`);
    }
    ;
}
;
// country number 1:
let Pakistan = new Country();
Pakistan.setObjectProperties("Pakistan", 4, "Islamabad");
Pakistan.description();
// country number 2:
let India = new Country();
India.setObjectProperties("India", 52, "New Delhi");
India.description();
// country number 3:
let America = new Country();
America.setObjectProperties("America", 50, "Washinton DC");
America.description();
// country number 4:
let China = new Country();
China.setObjectProperties("China", 23, "Beijing");
China.description();
// country number 5:
let England = new Country();
England.setObjectProperties("England", 9, "London");
England.description();
// country number 5:
let Canada = new Country();
Canada.setObjectProperties("Canada", 10, "Ottawa");
// country number 6:
let Afganistan = new Country();
Afganistan.setObjectProperties("Afganistan", 34, "Kabul");
Afganistan.description();
// // country number 7:
let Iran = new Country();
Iran.setObjectProperties("Iran", 31, "tehran");
console.log(Iran);
// // country number 8:
let Japan = new Country();
Japan.setObjectProperties("Japan", 9, "Tokiyo");
console.log(Japan);
// // country number 9:
let Russia = new Country();
Russia.setObjectProperties("Russia", 9, "Moscow");
console.log(Russia);
// // country number 10:
let Indoneshia = new Country();
Indoneshia.setObjectProperties("Indoneshia", 38, "Jakarta");
console.log(Indoneshia);
// ------------------------------------------------------------------------------------------------------------
// -------------------------------- Example:2 -> Using Constructor -------------------------------
// ------------------------------------------------------------------------------------------------------------
// example 2 
class House {
    constructor(ownerName, address, color) {
        this.ownerName = "default";
        this.address = "default";
        this.color = "default";
        this.ownerName = ownerName;
        this.address = address;
        this.color = color;
    }
    ;
}
;
console.log("                             house 1");
const House1 = new House("Badar Ud Din", "Village Jumo Bhutto", "Yello");
console.log(House1);
console.log("                               house 2");
const House2 = new House("Ameer Ud Din", "Shaheed Bhutto Muhala", "Grey");
console.log(House2);
console.log("                                   House 3");
const House3 = new House("Gulam Hussain", "Shaheed Muhala", "Blue");
console.log(House3);
// ------------------------------------------------- class 2: Using Constructor ----------------------------
class School {
    constructor(name, pName, sections, classes, students, add) {
        this.name = "";
        this.principalName = "";
        this.sections = 0;
        this.classRooms = 0;
        this.noOfStudents = 0;
        this.Address = "";
        this.name = name;
        this.principalName = pName;
        this.sections = sections;
        this.classRooms = classes;
        this.noOfStudents = students;
        this.Address = add;
    }
    ;
}
;
// School 1
let Mehran = new School("Mehran", "Jehram Das", 3, 100, 5000, "Pano Akil near Baiji Chowk");
console.log(Mehran);
// School 2
let Al_Shahbaz = new School("Al-Shahbaz", "Mehmood Bhutto", 2, 75, 2000, "Pano Akil near Wapda Office");
console.log(Al_Shahbaz);
// School 3
let The_Dawn = new School("The Dawn", "Mumtaz Bhutto", 2, 30, 800, "Pano Akil near Mustafaee Chowk");
console.log(The_Dawn);
// School 4
const Shah_latif = new School("Shah Latif", "XYZ", 1, 15, 350, "Pano Akil Kacheri Road");
console.log(Shah_latif);
// School 5
const Shaheen = new School("Shaheen Public", "Xyz", 2, 23, 400, "Pano Akil near Eid Gah Chowk");
console.log(Shaheen);
;
class Student {
    constructor(name, age, selection) {
        this.name = name;
        this.age = age;
        this.selection = selection;
    }
    ;
    stdStatus() {
        console.log(`Dear ${this.name} you are selected ${this.selection} in GIAIC.`);
    }
}
;
// std 1
let student1 = new Student("Shahab", 22, "Onsite");
student1.stdStatus();
// std 2
let student2 = new Student("Ali", 23, "Onsite");
console.log(student2);
// std 3
let student3 = new Student("Muhammad", 35, "Onsite");
student3.stdStatus();
// std 4 
let student4 = new Student("Mudasir", 21, "Online");
student4.stdStatus();
// std 5 
let student5 = new Student("Sheeraz", 22, "Online");
student5.stdStatus();
;
class University {
    constructor(uniName, VC, departments, hostel, CL, address) {
        this.uniName = "default";
        this.VC = "default";
        this.noOfDepartments = 0;
        this.isHostel = false;
        this.isCl = false;
        this.address = "xyz";
        this.uniName = uniName;
        this.VC = VC;
        this.noOfDepartments = departments;
        this.isHostel = hostel;
        this.isCl = CL;
        this.address = address;
    }
    ;
}
;
// University 1
let QUEST = new University("Quaid e Awam University", "Dr. Saleem Raza Samo", 33, true, true, "Shaheed Benazir Abad,Sindh");
console.log(QUEST);
// University 2
let MUET = new University("Mehran University", "Dr. Tauha Hussain Ali ", 28, true, true, "Jamshoro, Sindh");
console.log(MUET);
// University 3
let NED = new University("NED University", " Dr. Sarosh Hashmat Lod", 17, true, true, "Karachi, Sindh");
console.log(NED);
// University 4
let NUST = new University("National Unversity", "Engr Javed Mahmood Bukhari", 22, true, false, "Islamabad Pakistan");
console.log(NUST);
// University 5
let UoL = new University("University of Lahore", "Dr. M.H. Qazi", 15, true, false, "Lahore, Panjab, Pakistan");
console.log(UoL);
