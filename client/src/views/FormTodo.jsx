import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../stores/actionCreators/todo";
import { useNavigate } from "react-router-dom"; 

export default function FormTodo() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const addTodo = (e) => {
        e.preventDefault()
        dispatch(createTodo({
            name: form.name
        }))
        navigate("/")
    }

    return (
        <>
            <form onSubmit={addTodo}>
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
                        Add
                    </button>
                </div>
            </form>
        </>
    )
}