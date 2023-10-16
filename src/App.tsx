import { ColourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar"



const App = () => {
  const  [colourMode, theme ] = useMode(); 


  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main>
            <TopBar/>
          </main>
        </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;