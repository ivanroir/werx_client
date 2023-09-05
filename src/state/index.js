import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  mode: "dark",
  userId: "64f5c1b88446f4cef3656edd",
  isSuccess: "",
  loading: false,
  user: [],
  error: "",
};

// export const fetchUsers = createAsyncThunk("global/showUserList", async () => {
//   return axios
//     .get(import.meta.env.VITE_REACT_APP_BASE_URL + "api/management/")
//     .then((res) => res.data);
// });

// export const fetchCDA = createAsyncThunk("global/showCDAList", async () => {
//   return axios
//     .get(
//       import.meta.env.VITE_REACT_APP_BASE_URL + "api/management/show-cda-list"
//     )
//     .then((res) => res.data);
// });

export const addCDA = createAsyncThunk("global/StoreCDA", async (values) => {
  const formData = new FormData(); // Create a FormData object to handle file uploads
  formData.append("userID", values._id); // Append other data as needed
  formData.append("file[]", values.file); // Append the selected file
  console.log("🚀 ~ file: index.js:27 ~ values:", values);
  console.log("🚀 ~ file: index.js:27 ~ values:", values.file);

  return await fetch(
    import.meta.env.VITE_REACT_APP_BASE_URL + "/api/management/store-cda",
    {
      method: "POST",
      body: formData,
    }
  ).then((res) => res.json());
});

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode == "light" ? "dark" : "light";
    },
  },

  // Reducer Calls
  extraReducers: (builder) => {
    // builder.addCase(fetchUsers.pending, (state) => {
    //   state.loading = true;
    // });

    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    //   state.error = "";
    // });
    // builder.addCase(fetchUsers.rejected, (state, action) => {
    //   state.loading = false;
    //   state.user = [];
    //   state.error = action.error.message;
    // });

    // builder.addCase(fetchCDA.pending, (state) => {
    //   state.loading;
    // });
    // builder.addCase(fetchCDA.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    //   state.error = "";
    // });
    // builder.addCase(fetchCDA.rejected, (state, action) => {
    //   state.loading = false;
    //   state.user = [];
    //   state.error = action.error.message;
    // });

    builder.addCase(addCDA.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addCDA.fulfilled, (state, action) => {
      console.log("🚀 ~ file: index.js:68 ~ builder.addCase ~ action:", action);
      state.loading = false;
      state.user = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(addCDA.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
      state.isSuccess = false;
    });
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
