import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/linkedin/authorize/", {
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
        });
        const user = await response.json();
        console.log(user);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, []);
  return (
    <>
      Hola Mundo
    </>
  )
}

export default App