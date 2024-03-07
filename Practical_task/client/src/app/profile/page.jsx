"use client";

const { useAuth } = require("@/customHook/auth");

export default function Profile() {
  const { isAuthz, isLoading, user } = useAuth({ roles: ["VENDOR", "ADMIN"] });

  console.log(user);
  if (isLoading) {
    return <h1> Loading........</h1>;
  }
  return (
    <div className="w-[15rem] flex justify-center flex-col">
      <div>
        <h1>Profile</h1>
        <div>
          <div className="flex">
            <p>Name : </p>
            <p>{user.name}</p>
          </div>

          <div className="flex">
            <p>Role : </p>
            <p>{user.role}</p>
          </div>

          <div className="flex">
            <p>Email : </p>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
