import Feature from './Feature'
import { CORE_CONCEPTS } from "../../data";
import './feature.css';

export default function Features(){
        return (
                <>
                <div id="features" title='Our Services'>
                    <h2>Features</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => <Feature key={conceptItem.title} {...conceptItem} /> )}
                    </ul>
                </div>
                </>
        );
}

   // eslint-disable-next-line no-lone-blocks
   {/* <CoreConcept
                        title={CORE_CONCEPTS[0].title}
                        description={CORE_CONCEPTS[0].description}
                        img={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept 
                        title={CORE_CONCEPTS[1].title}
                        description={CORE_CONCEPTS[1].description}
                        img={CORE_CONCEPTS[1].image}
                        />
                        <CoreConcept 
                        title={CORE_CONCEPTS[2].title}
                        description={CORE_CONCEPTS[2].description}
                        img={CORE_CONCEPTS[2].image}
                        />
                        <CoreConcept 
                        title={CORE_CONCEPTS[3].title}
                        description={CORE_CONCEPTS[3].description}
                        img={CORE_CONCEPTS[3].image}
                        /> */}