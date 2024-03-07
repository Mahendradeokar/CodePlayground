"use client";

import Button from "@/components/Button";
import { login } from "@/request";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      pwd: "",
    },
  });

  const router = useRouter();

  const onSumbmit = async (values) => {
    if (!values.pwd || !values.email) {
      return alert("all values are required");
    }

    const data = await login(values);
    if (data) {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center align-middle">
      <dvi className="flex flex-col w-[25rem] mt-[3rem]">
        <h1 className="text-xl text-center text-[black]">Login</h1>
        <form onSubmit={handleSubmit(onSumbmit)}>
          <div className="flex-col flex">
            <label>Email</label>
            <input
              {...register("email", { required: true })}
              type="text"
              className="text-[black]"
            ></input>
          </div>
          <div className="flex-col flex">
            <label>Password</label>
            <input
              {...register("pwd", { required: true })}
              type="password"
              className="text-[black]"
            ></input>
          </div>

          <Button>Login</Button>
        </form>
      </dvi>
    </div>
  );
}
