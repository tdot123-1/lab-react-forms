import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  // form states
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  // reset states
  const resetStates = () => {
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  }

  // handle input changes 
  const handleFullName = (event) => (setFullName(event.target.value));
  const handleImage = (event) => (setImage(event.target.value));
  const handlePhone = (event) => (setPhone(event.target.value));
  const handleEmail = (event) => (setEmail(event.target.value));
  const handleProgram = (event) => (setProgram(event.target.value));
  const handleGraduationYear = (event) => (setGraduationYear(event.target.value));
  const handleGraduated = (event) => (setGraduated(event.target.value));

  // handle submit 
  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = { 
      fullName, 
      image, 
      phone, 
      email,
      program,
      graduationYear,
      graduated,
    }

    console.log("Submit!", newStudent);

    const updatedStudents = [newStudent, ...students];

    setStudents(updatedStudents);

    resetStates();

  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" 
              value={fullName} onChange={handleFullName}
            />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image"
              value={image} onChange={handleImage}
             />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" 
              value={phone} onChange={handlePhone}
            />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email"
              value={email} onChange={handleEmail}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" 
              checked={graduated}
              onChange={handleGraduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
