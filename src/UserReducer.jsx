// UserReducer.js
import { createSlice } from "@reduxjs/toolkit";
import userList from './Data';  // Assuming you have a file named Data.js with your user list

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, age, gender, mobile, position, joiningDate } = action.payload;
      const userToUpdate = state.find(user => user.id === id);
      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.email = email;
        userToUpdate.age = age;
        userToUpdate.gender = gender;
        userToUpdate.mobile = mobile;
        userToUpdate.position = position;
        userToUpdate.joiningDate = joiningDate;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter(user => user.id !== id);
    }
  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
