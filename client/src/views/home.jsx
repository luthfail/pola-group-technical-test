import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../stores/actionCreators/todo";


export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { todo } = useSelector(state => state.todo);
    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);
    const editForm = (id) => {
        dispatch(getFoodDetail(id))
        setTimeout(() => {
            navigate(`/todo/${id}`)
        }, 1000)
    }
    const deleteItem = (id) => {
        dispatch(deleteTodo(id))
    }
    <>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Action
                    </th>
                </tr>
            </thead>
                    <tbody>
                    {todo && todo.map(el => {
                    return (
                        <tr key={el.id} className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {el.name}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <a onClick={() => editForm(el.id)} className="font-medium text-yellow-600 dark:text-yellow-500 hover:underline mx-4">Edit</a>
                                <a onClick={() => deleteItem(el.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
        </table>
    </>
}