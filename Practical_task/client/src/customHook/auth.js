import { useRouter } from "next/navigation";

const { getProfile } = require("@/request");
const { useEffect, useState } = require("react");

export const useAuth = ({ roles }) => {
  const router = useRouter();
  const [isAuthz, setAuthz] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getProfile();
      if (data && roles.includes(data.role)) {
        setAuthz(true);
        setUser(data);
        setLoading(false);
        return;
      }
      router.push("/login");
      setLoading(false);
    })();
  }, []);

  return { isLoading, isAuthz, user };
};
