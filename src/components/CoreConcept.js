import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.js";

const CoreConcept = () => {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return <CoreConcepts key={conceptItem.title} {...conceptItem} />;
        })}
      </ul>
    </Section>
  );
};
export default CoreConcept;
