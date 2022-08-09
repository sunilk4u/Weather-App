import SeachForm from "./components/SeachForm";
import MainTile from "./components/MainTile";
import SecondaryTile from "./components/SecondaryTile";
import Footer from "./components/Footer";
import { DataProvider } from "./components/Context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="overlay"></div>
      <SeachForm />
      <MainTile />
      <SecondaryTile />
      <Footer />
    </DataProvider>
  );
}

export default App;
