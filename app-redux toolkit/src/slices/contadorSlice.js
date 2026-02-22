import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
  name: "contador",
  initialState: {valor: 0},
    reducers: {
        incrementar: (state) => {
            state.valor += 1;
        },
        decrementar: (state) => {
            state.valor -= 1;
        },
        adicionar: (state, action) => {
            state.valor += action.payload;
        }
    }
});

export const { incrementar, decrementar, adicionar } = contadorSlice.actions;
export default contadorSlice.reducer;