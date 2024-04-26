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
import Image from "next/image";

const Profile: React.FC = () => {
  const { data: session, status } = useSession();
  const [username, setName] = useState<string>();
  const [setfather, setfatherName] = useState<string>();
  const [setPhone, setPhoneNumber] = useState<string>();
  const [setDateofbirth, getDateofbirth] = useState<string>();
  const [userData, setUserData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, isopen] = useState<boolean>(false);

  const onSubmits = async () => {
    try {
      await axios.put("/api/updateuser/", {
        name: username,
        email: `${session?.user?.email}`,
        fatherName: setfather,
        phoneNumber: setPhone,
        dateofBirth: setDateofbirth,
      });
      toast.success("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

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

  function closemodels() {
    isopen(false);
  }

  const model = (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-8 w-[400px] items-center justify-center">
        <h2 className="text-xl font-semibold mb-4 text-center ">
          Update User Profile
        </h2>
        <div className="bg-gray-100  p-6 rounded-lg ">
          <div className="justify-center items-center ml-10">
            <label className="block text-gray-800 font-semibold text-sm">
              Update Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="inputname"
                className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div>
                <label className="block text-gray-800 font-semibold text-sm">
                  Update Father Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="inputname"
                    className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    onChange={(e) => setfatherName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold text-sm">
                  Phone-Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="inputname"
                    className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold text-sm">
                  Date of Birth
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="inputname"
                    className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    onChange={(e) => getDateofbirth(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold text-sm">
                  Enter New Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="inputname"
                    className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold text-sm">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="inputname"
                      className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onSubmits}
          type="button"
          className="text-white bg-[#050708]  ml-32 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          Update
        </button>
        <button           className="text-white bg-[#050708]  ml-32 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
 onClick={() => closemodels()}>Close</button>
      </div>
    </div>
  );

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
                        <button
                          onClick={() => isopen((pre) => !pre)}
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        >
                          <Pencil />
                        </button>
                      </div>
                    </div>

                    <p className="mt-1 max-w-2xl text-sm text-gray-500 ">
                      Details and informations about user.
                    </p>
                  </div>

                  <div className="flex ml-40 ">
                    <Image
                      src="/images/person.jpeg"
                      className="h-32 w-32 rounded-full"
                      alt="ss"
                      width={128}
                      height={128}
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
            </div>
          </div>
        ))
      )}
      {open && model}
    </div>
  );
};

export default Profile;
