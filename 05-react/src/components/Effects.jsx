import React from "react";
import { useEffect, useLayoutEffect } from "react";

export const Effects = () => {
  useEffect(() => {
    console.log("after browser paints");
  }, []);

  useLayoutEffect(() => {
    console.log("before browser paints");
  }, []);

  return <div>Effects</div>;
};
