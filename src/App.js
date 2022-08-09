import SeachForm from "./components/SeachForm";
import MainTile from "./components/MainTile";
import SecondaryTile from "./components/SecondaryTile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overlay"></div>
      <SeachForm />
      <MainTile />
      <SecondaryTile />
      <Footer />
    </>
  );
}

export default App;
