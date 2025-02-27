import { MenuItem } from "primereact/menuitem";

interface EnhancedMenuItem<T> extends Omit<MenuItem, "items"> {
  elementValue?: T
  items?: EnhancedMenuItem<T>[] | EnhancedMenuItem<T>[][] | undefined
}

export default EnhancedMenuItem