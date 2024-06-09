"use client"

import AppButton from "@/persentation/component/atom/AppButton";
import { signOut, useSession } from "next-auth/react";

const DashboardView = () => {
  const { data, status } = useSession();

  console.info(status);
  console.info(data?.user);

  return (
    <main>
      <AppButton onClick={() => signOut()}>
        Logout
      </AppButton>
    </main>
  );
}

export default DashboardView;