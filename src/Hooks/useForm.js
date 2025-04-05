import { useState } from "react"

export default function useForm () {
    const [form, setForm] = useState()

    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return { form, onChangeForm }
}