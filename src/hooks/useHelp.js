import { HelpContext } from "../context/HelpContext";

import { useContext } from "react";

export const useHelp = ()=>useContext(HelpContext);