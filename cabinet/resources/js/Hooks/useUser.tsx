import { Auth } from "@/types";
import { useState } from "react";

const useUser = () => {
    const [user, setUser] = useState<Auth | null>(null);
    return { user, setUser };
};

export default useUser;
