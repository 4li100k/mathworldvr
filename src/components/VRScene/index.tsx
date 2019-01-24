import * as React from "react";
import { Scene } from "aframe-react";

export function VRScene(props: any) {
  return <Scene physics="gravity: -1">{props.children}</Scene>;
}