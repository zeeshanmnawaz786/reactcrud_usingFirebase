import { useEffect, useState } from "react";
import { db } from "./firebase/firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import "./App.css";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUser] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    console.log(newName);
    console.log(newAge);
    await addDoc(usersCollectionRef, {
      name: newName,
      age: Number(newAge),
    });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const NewAge = { age: age + 1 };
    await updateDoc(userDoc, NewAge);
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, [getUsers, createUser, deleteUser, updateUser]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
        placeholder="Name..."
      />
      <input
        type="number"
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
        placeholder="Age..."
      />

      <button onClick={createUser}>Create</button>

      {users.map((user, index) => {
        return (
          <div key={index}>
            {}
            Name:{user.name}
            Age:{user.age}
            <br />
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
