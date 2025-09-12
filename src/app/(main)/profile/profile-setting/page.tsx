import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { getAuthSession } from "@/features/auth/auth-helpers";
import { getUserById } from "@/features/users/users-helper";
import ThemeSwitch from "@/components/share/profile-setting-theme-switch";
import Container from "@/components/share/Container";
import { unauthorized } from "next/navigation";

const DashboardSettings = async () => {
  const session = await getAuthSession();
  const authUser = session && (await getUserById(session?.user?.id as string));

  if (!session) {
    return unauthorized();
  }

  return (
    <div className="min-h-screen bg-gray-50 container mx-auto p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        {/* Profile Settings */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  defaultValue={authUser?.name}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  defaultValue={authUser?.email}
                />
              </div>
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  defaultValue={"undefined"}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 234 567 890" />
              </div>
            </div>
            <Button className="mt-4">Save Profile</Button>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Account</h2>
            <div className="space-y-3">
              <div>
                <Label htmlFor="password">Change Password</Label>
                <Input id="password" type="password" placeholder="********" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>
            <Button className="mt-4 bg-red-500 hover:bg-red-600">
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Preferences</h2>
            <ThemeSwitch />
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Email Notifications</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <Switch id="two-factor" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardSettings;
