/* eslint-disable no-lone-blocks */
import TabButton from "./TabButton"
import { useState } from "react"
import { EXAMPLES } from "../../data"
import Section from "./Section"
import Tabs from "./Tabs"
import '../property-types/Property-Types.css'


export default function PropertyTypes(){
    const [selectedType, setSelectedType] = useState()

    function handleClick(selectedButton){
        setSelectedType(selectedButton)
    }

    let tabContent = 
        <p>
            Click on a property type to view examples
        </p>
    
    if (selectedType){
        tabContent = (
            <div className="tab-content" id="tab-contents">
                <h3>{EXAMPLES[selectedType].title}</h3>
                <p>{EXAMPLES[selectedType].description}</p>
                <img src={EXAMPLES[selectedType].image} alt={EXAMPLES[selectedType].title} />
            </div>
        )
    }

    return (
        <Section className='property-types' title="Featured-Property-Types" id='types'>
            <p className="centered-text">All Property Types that are available</p>
            <Tabs ButtonsContainer="menu"
            buttons={ 
            <>
                <TabButton isSelected={selectedType === "apartment"} onClick={() => handleClick("apartment")}>Apartment</TabButton>
                <TabButton isSelected={selectedType === "house"} onClick={() => handleClick("house")}>House</TabButton>
                <TabButton isSelected={selectedType === "villa"} onClick={() => handleClick("villa")}>Villa</TabButton>
                <TabButton isSelected={selectedType === "land"} onClick={() => handleClick("land")}>Land</TabButton>
                <TabButton isSelected={selectedType === "office"} onClick={() => handleClick("office")}>Office</TabButton>
                <TabButton isSelected={selectedType === "semiDetachedHouse"} onClick={() => handleClick("semiDetachedHouse")}>Semi-Detached House</TabButton>
                <TabButton isSelected={selectedType === "pentHouse"} onClick={() => handleClick("pentHouse")}>Penthouse</TabButton>
                <TabButton isSelected={selectedType === "dormitory"} onClick={() => handleClick("dormitory")}>Penthouse</TabButton>
                {/*the way you write the props inside onSelect arrow func must match the way its written in EXAMPLES*/}
            </>}>
            {tabContent}
            </Tabs>
        </Section>
    )
}


 {/* {!selectedTopic ? <p>Please Select Your Topic</p> :<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>} */}

          {/* {!selectedTopic && <p>Please Select Your Topic</p>}
          {selectedTopic && ( <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre> 
            </div>)} */}