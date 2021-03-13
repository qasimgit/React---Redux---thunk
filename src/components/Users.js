import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../store/actions/userActions";

const Users = () => {
  const { users } = useSelector((state) => state.users);
  const { allUsers } = useSelector((state) => state.api);

  console.log({ users });
  console.log({ allUsers });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const deletUser = (user) => {
    console.log("user", user);
    dispatch({ type: "DELETE_USER", id: user?.id });
  };

  return (
    <div>
      {users?.map((val, ind) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "400px",
          }}
        >
          <h4 key={ind}>{val?.name}</h4>
          <button onClick={() => deletUser(val)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
