import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data.js";

const CoreConcept = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return <CoreConcepts key={conceptItem.title} {...conceptItem} />;
        })}
      </ul>
    </section>
  );
};
export default CoreConcept;
