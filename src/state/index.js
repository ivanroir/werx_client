import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "64f5c1b88446f4cef3656edd",
  isSuccess: false,
  loading: false,
  user: [],
  error: "",
  cdaList: [],
};

export const addCDA = createAsyncThunk("global/StoreCDA", async (values) => {
  const formData = new FormData(); 
  formData.append("userID", values.userID); 
  formData.append("agentID", values.agent._id); 
  formData.append("name", values.name); 
  formData.append("file[]", values.file); 

  return await fetch(
    import.meta.env.VITE_REACT_APP_BASE_URL + "/api/management/store-cda",
    {
      method: "POST",
      body: formData,
    }
  ).then((res) => res.json());
});

export const addProperties = createAsyncThunk("global/StoreProperties", async (values) => {
  console.log("🚀 ~ file: index.js:27 ~ addProperties ~ values:", values)
  const formData = new FormData(); 
  formData.append("userID", values.userID); 
  formData.append("mlsNumber", values.mls); 
  formData.append("transactionType", values.transactionType); 
  formData.append("propertyType", values.propertyType); 
  formData.append("propertyStatus", values.propertyStatus); 
  formData.append("street", values.street); 
  formData.append("city", values.city);
  formData.append("states", values.states.state);
  formData.append("postalCode", values.postalCode);
  formData.append("salesPrice", values.salesPrice);
  formData.append("units", values.units);
  formData.append("commission", values.commission);
  formData.append("bonus", values.bonus);
  formData.append("source", values.source);
  formData.append("transactionCoordinatorFee", values.transactionCoordinatorFee);
  formData.append("splitPaid", values.splitPaid);
  formData.append("officeFees", values.officeFees);
  formData.append("agentID", values.agent._id);
  formData.append("escrowCompany", values.escrowCompany);
  formData.append("mortgageCompany", values.mortgageCompany);
  formData.append("contractStartDate", values.contractStartDate.$d);
  formData.append("contractExpirationDate", values.contractExpirationDate.$d);
  formData.append("openEscrowDate", values.openEscrowDate.$d);
  formData.append("closingDate", values.closingDate.$d);
  formData.append("image", values.image);
  
  return await fetch(
    import.meta.env.VITE_REACT_APP_BASE_URL + "/api/general/store-properties",
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
    setInitialCDAList: (state, action) => {
      state.cdaList = action.payload;
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

    builder.addCase(addProperties.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addProperties.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isSuccess = action.payload.isSuccess;
    });
    builder.addCase(addProperties.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
      state.isSuccess = false;
    });
  },
});

export const { setMode, setInitialCDAList } = globalSlice.actions;

export default globalSlice.reducer;
