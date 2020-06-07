import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Spinner from "../../src/common/spinner";
import { AppContext } from "../../src/context/AppContext";

export default () => {
  const { id } = useContext(AppContext);
  const router = useRouter();
  const { periodicity } = router.query;

  useEffect(() => {
    const redirect = `/${periodicity}/${id}`;
    router.push(`/[periodicity]/[id]`, redirect);
  }, [periodicity]);

  return <Spinner />;
};
