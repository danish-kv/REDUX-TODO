import { ADD_TODO_SUCCESS, REMOVE_TODO } from './actionTypes';


export const AddTodoActions = (todo) => (dispatch,getState) => {
   const { todos } = getState().Todo;

    const hasTodo = todos.find((i) => i.todo == todo)

    if (!hasTodo && todo !== ''){
        dispatch({
            type : 'ADD_TODO_SUCCESS',
            payload : [{id : todo, todo}, ...todos],
        });
    }
};


export const RemoveTodoActions = (todo) => (dispatch,getState) => {
    const { todos } = getState().Todo;  
    dispatch({
        type : 'REMOVE_TODO',
        payload : todos.filter((t) => t.id !== todo.id)
    })
}