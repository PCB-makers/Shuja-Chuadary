
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import Projects from "./Home/RecentProjects"
import Comments from "./Home/Comments"

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0d1117; -webkit-font-smoothing: antialiased; }
      `}</style>
      
      <Hero />
      <Services />
        <Projects/>
        <Comments/>
    </div>
  );
}
