import Input from "@/js/Components/Form/Input";
import Button from "@/js/Components/Button";
import Layout from "@/js/Layouts/Layout";
import {useForm} from "laravel-precognition-react-inertia";

const Register = () => {
    const form = useForm('post', route('auth.register'), {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const submit = (e) => {
        e.stopPropagation();
        e.preventDefault();

        form.submit({ preserveScroll: true, onSuccess: form.reset });
    }

    return <Layout>
        <form className={"flex flex-col items-center justify-start w-full mt-10 gap-10"} onSubmit={submit}>
            <div className={"flex flex-col items-center justify-start"}>
                <h1 className={"text-4xl font-bold"}>Welcome!</h1>
                <h3 className={"text-md font-normal"}>Create your account</h3>
            </div>


            <section className={"flex flex-col items-center justify-start w-full max-w-2xl gap-4"}>
                <Input
                    useForm={form}
                    name={"name"}
                    label={"Name"}
                    type={"text"}
                    placeholder={"John Doe"}
                    autoComplete={"name"}
                />
                <Input
                    name={"email"}
                    label={"Email"}
                    type={"email"}
                    placeholder={"john.doe@example.com"}
                    autoComplete={"email"}
                />

                <div className={"grid grid-cols-2 items-start justify-between gap-8"}>
                    <Input
                        name={"password"}
                        label={"Password"}
                        type={"password"}
                        placeholder={"********"}
                        autoComplete={"new-password"}
                    />

                    <Input
                        name={"password_confirmation"}
                        label={"Password Confirmation"}
                        type={"password"}
                        placeholder={"********"}
                        autoComplete={"new-password"}
                    />
                </div>
            </section>

            <Button type={"submit"} className={"w-48"} color={"primary"}>
                Submit
            </Button>
        </form>
    </Layout>
}

export default Register
