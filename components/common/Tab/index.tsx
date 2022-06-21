import React from "react";
import { TabContainer, TabItem } from "./styles";
import { Tab as TabType } from "../../../types";

interface TabProps {
  tabs: TabType[];
  active: string;
  size?: "small" | "large";
  onChange: (id: string) => void;
}

const Tab: React.FC<TabProps> = ({
  tabs,
  size = "large",
  active,
  onChange,
}) => {
  return (
    <TabContainer size={size}>
      {tabs.map((tab: TabType) => (
        <TabItem
          size={size}
          active={active === tab.id}
          key={tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.name}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default Tab;
