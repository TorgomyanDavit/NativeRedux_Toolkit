import { createAsyncThunk } from "@reduxjs/toolkit"

export const getHome = createAsyncThunk(
    'users/getHome',
    async (props) => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      return response.json()
    }
)
