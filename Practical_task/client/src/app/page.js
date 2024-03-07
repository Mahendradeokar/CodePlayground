"use client";

import Button from "@/components/Button";
import { useAuth } from "@/customHook/auth";
import { approveVendor, deleteVendor, getAllVendors } from "@/request";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { isAuthz, isLoading, user } = useAuth({ roles: ["ADMIN", "VENDOR"] });
  const [vendor, setVendor] = useState([]);
  const [vendorLoading, setVendorLoading] = useState(true);
  const isVendorsExits = Boolean(vendor.length);

  const handleApproveVendor = async (vendorId) => {
    setVendorLoading(true);
    const responseData = await approveVendor(vendorId);
    if (responseData) {
      const responseData = await getAllVendors();
      if (responseData) {
        setVendor(responseData);
      }
    }
    setVendorLoading(false);
  };

  const handleDeleteVendor = async (vendorId) => {
    setVendorLoading(true);
    const responseData = await deleteVendor(vendorId);
    if (responseData) {
      const responseData = await getAllVendors();
      if (responseData) {
        setVendor(responseData);
      }
    }
    setVendorLoading(false);
  };

  useEffect(() => {
    if (!isAuthz && !isLoading) {
      router.push("/login");
    }
  }, [isAuthz]);

  useEffect(() => {
    (async () => {
      if (!isLoading && isAuthz && user.role === "ADMIN") {
        const responseData = await getAllVendors();
        if (responseData) {
          setVendor(responseData);
        }
      }
      setVendorLoading(false);
    })();
  }, [isLoading]);

  if (isLoading || vendorLoading) {
    return <h1>Loading........</h1>;
  }

  if (user.role === "VENDOR") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex justify-center">
          <h1 className="text-5xl text-center">Welcome!</h1>
        </div>
      </main>
    );
  }

  return (
    <div>
      <table className="m-auto border-collapse border-2 border-solid border-white">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Is Approve</th>
            <th className="px-4 py-2">Is Deleted</th>
            <th className="px-4 py-2">Delete Action</th>
            <th className="px-4 py-2">Approve Action</th>
          </tr>
        </thead>
        <tbody>
          {isVendorsExits ? (
            vendor.map((data, index) => {
              return (
                <tr key={index} className="bg-gray-100 text-black">
                  <td className="px-4 py-2">{data.name}</td>
                  <td className="px-4 py-2">
                    {data.isApprove ? "Approved" : "Not Approved"}
                  </td>
                  <td className="px-4 py-2">
                    {data.isDeleted ? "Deleted" : "Not Deleted"}
                  </td>
                  <td className="px-4 py-2">
                    <Button
                      disabled={data.isApprove}
                      onClick={() => handleApproveVendor(data._id)}
                    >
                       {data.isApprove ? "Approved" : "Approve"}
                    </Button>
                  </td>
                  <td className="px-4 py-2">
                    <Button
                      disabled={data.isDeleted}
                      onClick={() => handleDeleteVendor(data._id)}
                    >
                       {data.isDeleted ? "Deleted" : "Delete"}
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="px-4 py-2 text-center">
                {" "}
                No vendors found{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
