"use client";

import React, { useEffect, useState } from "react";
import { userDetails } from "../../actions/userDetails";
import Loading from "../../components/layout/Loading";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface User {
  id: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
}

export default function Page() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userDetails()
      .then((res: any) => {
        setUser(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setUser(null);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? (
    <>
      <div className="w-full h-auto bg-white text-black flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col justify-start items-center gap-24 md:border md:border-black rounded-md p-10">
            <h1 className="text-center text-4xl font-bold">Your Profile</h1>
            {loading ? (
              <Loading />
            ) : user ? (
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={user.picture}
                  alt={`${user.given_name} ${user.family_name}`}
                  width={96}
                  height={96}
                  className="rounded-full border-2 border-black"
                />
                <h1>
                  {user.given_name} {user.family_name}
                </h1>
                <h2>{user.email}</h2>
                <LogoutLink
                  className="mono transition ease-in-out delay-100 hover:scale-105 border-double border-2 hover:border-black hover:shadow-[5px_5px_0px_0px_rgb(255,255,255)] rounded-md px-4 py-1"
                  postLogoutRedirectURL="/"
                >
                  Log out
                </LogoutLink>
              </div>
            ) : (
              <h1>No user details available</h1>
            )}
          </div>

          <div className="w-full flex flex-col justify-start items-center gap-24 md:border md:border-black rounded-md p-10">
            <h1>Profile Tracking</h1>
          </div>
        </main>
      </div>
    </>
  ) : (
    router.push("/unauthorized")
  );
}
