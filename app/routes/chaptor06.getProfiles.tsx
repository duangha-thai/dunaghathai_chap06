import { useState, useEffect } from "react";

export default function GetProfiles() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/getProfiles");
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <p className="m-5 p-5">loading.....</p>;
  }

  return (
    <div className="m-5 p-5 max-w-sm mx-auto bg-white ">
      <h1 className="text-2xl">Person 1 :</h1>
      <div className="flex items-center justify-center">
        <img
          className="w-24 h-24 mx-auto"
          src={data.imPro}
          alt="User profile"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">
          {data.fname} {data.lname}
        </h2>
        <p className="text-gray-500">เรียนสาขา {data.maJor}</p>
        <p className="text-gray-600 mt-2">{data.eMail}</p>
      </div>
    </div>
  );
}
