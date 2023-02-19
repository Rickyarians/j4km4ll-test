import { useState } from "react";
import { AppWrapper } from "./component/base";
import Tab from "./component/tab/Tab";
import TabContent from "./component/tab/TabContent";
import TabItem from "./component/tab/TabItem";
import TabNumber from "./component/tab/TabNumber";
import { INIT_SUMMARY } from "./const";
import StepFinal from "./page/step/StepFinal";
import StepOne from "./page/step/StepOne";
import StepTwo from "./page/step/StepTwo";
import { FiArrowLeft } from "react-icons/fi";



const TABS = [
  {
    name: "Delivery",
    component: (props: any) => <StepOne {...props} />,
  },
  {
    name: "Payment",
    component: (props: any) => <StepTwo {...props} />,
  },
  {
    name: "Finish",
    component: (props: any) => <StepFinal {...props} />,
  },
];

function App() {
  const STORAGE_DATA = JSON.parse(localStorage.getItem("formData"));

  const [activeTab, setActiveTab] = useState(
    STORAGE_DATA?.activeTab ? STORAGE_DATA.activeTab : TABS[0].name
  );
  const [summary, setSummary] = useState(INIT_SUMMARY);

  const continueForm = (data :any) => {
    const nextTab =
      TABS[TABS.findIndex((tab) => tab.name === activeTab) + 1].name;
    setActiveTab(nextTab);
    localStorage.setItem(
      "formData",
      JSON.stringify({
        activeTab: nextTab,
        data: {
          ...STORAGE_DATA?.data,
          ...data,
        },
      })
    );
  };

  return (
    <>
      <AppWrapper>
        <Tab>
          {TABS.map((tab, i) => (
            <TabItem key={tab.name + "-tab-key"}>
              <TabNumber
                isActive={i <= TABS.findIndex((v) => v.name === activeTab)}
              >
                {i + 1}
              </TabNumber>
              {tab.name}
            </TabItem>
          ))}
        </Tab>
        <div style={{ marginBottom: "1rem" }} className="font-weight-600">
          <FiArrowLeft
            style={{ marginRight: ".5rem", verticalAlign: "middle" }}
            size={18}
          />
          Back To Cart
        </div>
        {TABS.map((tab) => (
          <TabContent
            isActive={activeTab === tab.name}
            key={tab.name + "-tab-content"}
          >
            {tab.component({
              summary,
              setSummary,
              continueForm,
              data: STORAGE_DATA,
            })}
          </TabContent>
        ))}
      </AppWrapper>
    </>
  );
}

export default App;
