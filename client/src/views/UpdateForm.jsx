import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoDetail } from "../stores/actionCreators/todo";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'

export default function UpdateForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()
    const { todo } = useSelector(state => state.todo);
    useEffect(() => {
        dispatch(getTodoDetail(id))
    }
        , [dispatch, id])
    const [form, setForm] = useState({
        name: todo.name,
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const updateTodo = (e) => {
        e.preventDefault()
        dispatch(updateTodo({
            name: form.name
        }))
        navigate("/")
    }
    return (
        <>
            <form onSubmit={updateTodo}>
                <div className="flex flex-col">
                    <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update
                    </button>
                </div>
            </form>
        </>

    )
}