"use client";

import GET_COUNTRY_AND_STATE from "@/queries/getCountries.gql";
import { useQuery } from "@apollo/client";
import React from "react";

const page = () => {
  const { loading, error, data } = useQuery(GET_COUNTRY_AND_STATE, {
    onCompleted: (data) => {
      console.log("Data", data);
    },
  });

  if (loading)
    return (
      <>
        <div className="w-100 h-100 justify-center items-center align-middle row-auto text-center">
          <div>
            <h1 style={{ fontSize: "64px" }}>Loading</h1>
          </div>
        </div>
      </>
    );

  if (!loading)
    return (
      <>
        <div className="w-100 h-100 justify-center items-center align-middle row-auto text-center">
          <div>
            <h1 className="text-2xl">COUNTRY LIST</h1>
          </div>
        </div>
        <div className="w-100 h-100 justify-center items-center align-middle text-center">
          <div
            className="mx-auto mt-20 bg-slate-600"
            style={{ height: "500px", width: "500px", overflow: "scroll" }}
          >
            {data?.countries?.map((item: any) => (
              <>
                <div
                  style={{ backgroundColor: "white" }}
                  className="m-10 rounded-md shadow-xl p-3"
                >
                  <h1 className="m-5" style={{ color: "black" }}>
                    {item?.full_name_english}
                  </h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="w-100 h-100 justify-center items-center align-middle row-auto text-center bg-red-500">
          <div>
            <h1 style={{ fontSize: "64px" }}>Error</h1>
          </div>
        </div>
      </>
    );
};

export default page;
