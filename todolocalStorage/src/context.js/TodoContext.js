import { useContext,createContext } from "react";

const TodoContext = createContext({
    todo: [{
        id: 1,
        msg: "Todo msg",
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

const UseTodo = () => {
    return useContext(TodoContext);
};

export default UseTodo;