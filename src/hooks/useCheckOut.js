import { useContext } from "react";

import { CheckOutContext } from "../context/CheckOutContext";

export const useCheckOut = ()=>useContext(CheckOutContext);