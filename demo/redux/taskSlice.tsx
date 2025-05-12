import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Kiểu dữ liệu cho mỗi task
interface Task {
  id: number;
  title: string;
}


const initialState: Task[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Thêm task mới
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },

    // Xoá task theo id
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((task) => task.id.toString() !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;