use medicalteam;
-- create table medication(id int auto_increment primary key,name varchar(30),dosage varchar(30), shedule varchar(30),timetotake varchar(50));

-- show databases;

-- show tables;

-- insert into medication(name,dosage,shedule,timetotake) values("Lisinopril","5mg","As Needed","As Needed"),("Metformin","20mg","Once a day","9am");

select * from medication;

-- create table conditions(id int auto_increment primary key,name varchar(30),identifiedOn varchar(50));

-- insert into conditions(name,identifiedOn) values("High BP, High diabetes, Medium Migraines, Mild Dementia","20/01/2024");

select * from conditions;

-- create table careteam(id int auto_increment primary key,name varchar(50),speciality varchar(50));

-- insert into careteam(name,speciality) values("Dr. Paul", "Multi-speciality");

select * from careteam;


-- create table patients(id int auto_increment primary key,name varchar(50),age int,gender varchar(10), dob varchar(50), height varchar(10), weight varchar(10),bmi varchar(10), bloodgroup varchar(10),phone varchar(15), email varchar(50));

-- insert into patients(name,age,gender,dob,height,weight,bmi,bloodgroup,phone,email) values("John",47,"Male","10/10/1977","5'6","150","24.9","A+","+1 7894561230","abc@gmail.com");

select * from patients;

