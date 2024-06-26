import { type ValidSearchType } from "@/server/api/routers/search_utils";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState, type Key } from "react";
export default function SearchSelection({
  UpdateFunc,
}: {
  // eslint-disable-next-line no-unused-vars
  UpdateFunc: (key: ValidSearchType) => void;
}) {
  const [selected, setSelected] = useState("WordEmbedding");

  const HandleChange = (key: Key) => {
    if (typeof key !== "string") {
      return;
    }
    setSelected(key);
    UpdateFunc(key as ValidSearchType);
  };

  return (
    <Tabs
      color="secondary"
      variant="underlined"
      selectedKey={selected}
      onSelectionChange={HandleChange}
    >
      <Tab key="Fuzzy Search" title="Keyword search"></Tab>
      <Tab key="Sentence Similarity" title="Sentence similarity"></Tab>
    </Tabs>
  );
}
