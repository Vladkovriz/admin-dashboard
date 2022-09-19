import React from "react";
import {Router} from "../../Routes";

import {FirebaseProvider} from "../../context/Firebase/Auth"

function App() {
    return (
        <FirebaseProvider>
            <Router/>
        </FirebaseProvider>
    );
}

export default App;
