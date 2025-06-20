"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [session, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return session?.user ? (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-32 h-32">
              <Image
                src={session.user.image || "/placeholder-avatar.jpg"}
                alt={session.user.name || "User"}
                fill
                className="rounded-full object-cover border-4 border-gray-200"
              />
            </div>

            <div className="w-full space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Name
                </label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {session.user.name}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Email
                </label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {session.user.email}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Account Created
                </label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                onClick={() => signOut("google")}
              >
                Logout
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ) : null;
};

export default ProfilePage;
