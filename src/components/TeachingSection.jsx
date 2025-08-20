import WayToTeach from "./WayToTeach.jsx";
import { ways } from "../data";

export default function TeachingSections() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
