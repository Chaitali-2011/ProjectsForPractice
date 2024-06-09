import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* <CoreConcept
        img={CORE_CONCEPTS[0].img}
        title={CORE_CONCEPTS[0].title}
        descri={CORE_CONCEPTS[0].descri}
      /> */}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} /> */}

        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* key={conceptItem.title} because for map every item should be unique */}
      </ul>
    </section>
  );
}
