import type { DialDesignImage } from "../contexts/AppContext";

export default function getDesignFromName(
  designName: string,
  collection: DialDesignImage[]
) {
  const design = collection.find((item) => item.name === designName);
  return design ? design : collection[0];
}
