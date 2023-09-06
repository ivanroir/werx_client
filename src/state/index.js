import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "64f5c1b88446f4cef3656edd",
  isSuccess: false,
  loading: false,
  user: [],
  error: "",
};

export const addCDA = createAsyncThunk("global/StoreCDA", async (values) => {
  const formData = new FormData(); 
  formData.append("userID", values._id); 
  formData.append("file[]", values.file); 

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

    builder.addCase(addCDA.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addCDA.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isSuccess = action.payload.isSuccess;
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
