import { useEffect } from "react";

const Api = (props) => {
  useEffect(() => {
    fetch(props.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((actualData) => {
        props.data(actualData);
        props.error("");
      })
      .catch((err) => {
        props.error("Sökningen gav tyvärr ingen träff...");
      });
  }, []);
};

export default Api;
