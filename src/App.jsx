import { useState } from "react";
import "./App.css";
import { FaTrash } from "react-icons/fa";

function App() {
  const [addContact, setAddContact] = useState(false);

  const [inputs, setinputs] = useState({
    name: "",
    number: "",
  });
  const [lists, setLists] = useState([]);

  const handleChange = (e) => {
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let { name, number } = inputs;
  const handleChange2 = () => {
    setLists([...lists, { name, number }]);
    console.log(lists);
    setinputs({ name: "", number: "" });
  };

  const handleclear = () => {
    setLists([]);
  };
  const handlebutton = (ind) => {
<<<<<<< HEAD
    let newlist =[...lists]
    newlist.splice(ind,1)
    setLists(newlist)
=======
    setLists(lists.splice(ind, 1));
    console.log(ind)
>>>>>>> 5171aa4cf4df3a51cc106650a660a6f2befb5380
  };
  return (
    <>
      <div className="container">
        <h1>Contacts</h1>
        <div className="add-contact">
          <div className="add-action">
            <button
              className="add-btn"
              onClick={() => {
                setAddContact(!addContact);
              }}
            >
              {addContact ? "-" : "+"}
            </button>
          </div>
          {addContact && (
            <div className="add-contact-container">
              <h2>enter your contacts info</h2>

              <div className="form">
                <input
                  type="text"
                  placeholder="number"
                  className="number"
                  name="number"
                  value={inputs.number}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="name"
                  className="name"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                />

                <button className="submit-btn" onClick={handleChange2}>
                  submit
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="contacts-list">
          <div className="contacts-info">
            {lists.map((info, ind) => {
              return (
                <div className="contacts-ind">
                  <p className="p">
                    <span>{info.name}</span>
                    <span>{info.number}</span>
                   
                  </p>
                  <button className="remove-item" onClick={()=>handlebutton(ind)}>
                 
                    <FaTrash />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <button className="clear-btn" onClick={handleclear}>
          clear list
        </button>
      </div>
    </>
  );
}

export default App;
