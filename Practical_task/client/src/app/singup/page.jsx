"use client";

import Button from "@/components/Button";
import { signup } from "@/request";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function signUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      pwd: "",
    },
  });

  const router = useRouter();

  const onSumbmit = async (values) => {
    if (!values.name || !values.pwd || !values.email) {
      return alert("all values are required");
    }

    const data = await signup(values);
    if (data) {
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-center align-middle">
      <dvi className="flex flex-col w-[25rem] mt-[3rem]">
        <h1 className="text-xl text-center text-[black]">Login</h1>
        <form onSubmit={handleSubmit(onSumbmit)}>
          <div className="flex-col flex">
            <label>Name</label>
            <input
              {...register("name", { required: true })}
              className="text-[black]"
            ></input>
          </div>
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

          <Button>Sign Up</Button>
        </form>
      </dvi>
    </div>
  );
}
