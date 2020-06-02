import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import cities from "../../public/data/cities.json";
import Daily from "../../src/components/daily";
import Monthly from "../../src/components/monthly";
import { updateCity, updatePeriodicity } from "../../src/context/actions";
import { AppContext } from "../../src/context/AppContext";
import { getPrayers } from "../../src/utils/dataService";

const PeriodicitySwitch = ({ prayers }) => {
  const router = useRouter();

  let { periodicity, id } = router.query;
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    updateCity(dispatch, id);
  }, [id]);

  useEffect(() => {
    updatePeriodicity(dispatch, periodicity);
  }, [periodicity]);

  return periodicity === "daily" ? (
    <Daily prayers={prayers} />
  ) : (
    <Monthly prayers={prayers} />
  );
};

//

export async function getStaticPaths() {
  let paths = [];
  ["daily", "monthly"].forEach((p) =>
    cities.forEach((c) => {
      paths.push({
        params: {
          id: `${c.id}`,
          periodicity: p,
        },
      });
    })
  );

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const prayers = getPrayers(
    parseInt(params.id),
    new Date().getUTCMonth(),
    params.periodicity === "daily" ? new Date().getUTCDate() : null
  );

  return { unstable_revalidate: 1, props: { prayers } };
}

export default PeriodicitySwitch;
