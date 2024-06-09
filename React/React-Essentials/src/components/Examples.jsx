import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  {
    /* const [selectedTopic, setSelectedTopic] = useState("Please click a button");
   here initially react looking for 'please..but' state which we do not have in Examples.js, if it's null than it will give error
   So we need to output something conditionally
  /We will use ternary operator go to   <div id="tab-content"> 
  video 32-33*/
  }

  function ClickHandler(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {/* passing as arrow function to execute specific code it will not execute clickhandler function but this annonymous function body will 
            So when any button will click it will gives us which one was clicked to identify*/}
            <TabButton onClick1={() => ClickHandler("components")}>
              Components
            </TabButton>
            <TabButton onClick1={() => ClickHandler("jsx")}>JSX</TabButton>
            <TabButton onClick1={() => ClickHandler("props")}>Props</TabButton>
            <TabButton onClick1={() => ClickHandler("state")}>State</TabButton>
          </>
        }
      ></Tabs>

      {/* {!selectedTopic ? <p>Please Select a topic</p> : null} */}
      {/*---------------------- initally selectedTopic is null, So if we don't have selected topic render <p>Please Select a topic</p> otherwise render nothing ----------------------*/}

      {/* {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}
      {/* -----------------Here if selected topic have something then show div part otherwise jnull----------------------*/}

      {!selectedTopic ? (
        <p>Please Select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
      {/* ----------------------Merge both like upper one ----------------------*/}
    </Section>
  );
}
