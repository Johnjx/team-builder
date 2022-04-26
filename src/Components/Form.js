import React from "react";

export default function Form(props) {
    const { submit, change, values } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        change(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name
                <input
                type="text"
                name='userName'
                placeholder="Enter username"
                maxLength="30"
                onChange={onChange}
                value={values.userName}
                />
          </label>
          <label>Email
                <input
                type="email"
                name='email'
                placeholder="Enter email"
                onChange={onChange}
                value={values.email}
                />
          </label>
          <label>Role
                <input
                type="text"
                name='role'
                placeholder="Enter role"
                maxLength="30"
                onChange={onChange}
                value={values.role}
                />
          </label>

            <div className="submit">
                <button>Add yourself to the Roster!</button>
            </div>   
        </form>
    )
}

//onchange
// values