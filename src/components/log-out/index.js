"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { logoutAction } from "@/actions";

function Logout() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await logoutAction();
      router.replace("/sign-in");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return <Button onClick={handleLogout}>Logout</Button>;
}

export default Logout;
