"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import prisma from "../../libs/prismadb";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Pencil } from "lucide-react";
import Loader from "../Loader";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import Profilemodel from "./Profilemodel";


const profile: React.FC = () => {
  const { data: session, status } = useSession();
  const [username, setName] = useState<string>("");
  const [setfather, setfatherName] = useState<string>("dummy");
  const [setPhone, setPhoneNumber] = useState<string>("111111");
  const [userData, setUserData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [open,isopen]=useState<boolean>(true)

  const onSubmits = async () => {
    try {
      await axios.put("/api/updateuser/", {
        name: username,
        email: `${session?.user?.email}`,
        fatherName: setfather,
        phoneNumber: setPhone,
      });
      toast.success("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

     
      if (!document.getElementById('profilemodel')?.contains(event.target)) {
        isopen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/getprofile/${session?.user?.email}`);
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      fetchUserData();
    }
  }, [session]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        userData.map((item) => (
          <div key={item.id}>
            <div className="ml-96 mt-10">
              <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div className="flex flex-row px-4 py-5 sm:px-6 ">
                  <div className="flex flex-col mt-10">
                    <div className="flex flex-row gap-5  items-center">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Profile
                      </h3>
                      <div>
                        <button  onClick={()=>isopen(pre=>!pre)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                         <Pencil/>
                        </button>
                      </div>
                    </div>

                    <p className="mt-1 max-w-2xl text-sm text-gray-500 ">
                      Details and informations about user.
                    </p>
                  </div>

                  <div className="flex ml-40 ">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                      className="h-32 w-32 rounded-full"
                    />
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Name
                      </dt>

                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {item.name}
                       
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Father Name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {item.fatherName}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {item.email}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        City
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {item.city}
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Phone Number
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {item.phoneNumber}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Date of Birth
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {item.dateofBirth}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <button
                onClick={onSubmits}
                className=" bg-blue-500 hover:bg-blue-700 ml-10 mt-5 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Update
              </button>
            </div>
          </div>
        ))
      )}
    {open && <Profilemodel  />}  
    </div>
  );
};

export default profile;
