import React from "react";
import { Entity } from "aframe-react";

export const Plane = (props: any) => {
  return (
    <Entity
      geometry={{ primitive: "circle", radius: 12 }}
      material={{ src: "url(/static/floor.jpg)", shader: "flat", roughness: 0 }}
      rotation="-90 0 0"
      static-body
      {...props}
    />
  );
};
