import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabsComponent } from "../pages/Components/TabsComponent.jsx";
import { ToggleComponent } from "../pages/Components/ToggleComponent.jsx";
import { RadioButtonComponent } from "../pages/Components/RadioButtonComponent.jsx";
import { CheckboxComponent } from "../pages/Components/CheckboxComponent.jsx";
import { NumberInputComponent } from "../pages/Components/NumberInputComponent.jsx";
import {ContentSwitcherComponent} from "../pages/Components/ContentSwitcherComponent.jsx"
import {AccordionComponent} from "../pages/Components/AccordionComponent.jsx"
import {ButtonComponent} from "../pages/Components/ButtonComponnet.jsx"
import {LoadingComponent} from "../pages/Components/LoadingComponent.jsx"
import {TextAreaComponent} from "../pages/Components/TextAreaComponent.jsx"
export function MyRoutes() {
  return (
   

      <Routes>
        <Route path="/tabs" element={<TabsComponent />} />
        <Route path="/radioButton" element={<RadioButtonComponent />} />
        <Route path="/toggle" element={<ToggleComponent />} />
        <Route path="/checkBox" element={<CheckboxComponent />} />
        <Route path="/numberInput" element={<NumberInputComponent  />} />
        <Route path="/contentSwitcher" element={<ContentSwitcherComponent  />} />
        <Route path="/accordion" element={<AccordionComponent />} />
        <Route path="/button" element={<ButtonComponent />} />
        <Route path="/loading" element={<LoadingComponent />} />
        <Route path="/textarea" element={<TextAreaComponent />} />
      </Routes>
    
  );
}
