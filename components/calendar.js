import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Calendar() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {});
      setLoading(false);
    })();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center">
      {isLoading ? (
        <div className="min-h-screen"></div>
      ) : (
        <Cal calLink='tannertanner1/trial' />
      )}
    </div>
  );
}