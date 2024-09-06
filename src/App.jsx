import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        {/* <ItemsContextProvider> */}
        <Header />
        <ItemList />
        <Sidebar />
        {/* </ItemsContextProvider> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
