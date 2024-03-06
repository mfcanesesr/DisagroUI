import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TabsComponent } from "../pages/TabsComponent.jsx";
import { ToggleComponent } from "../pages/ToggleComponent";
import { RadioButtonComponent } from "../pages/RadioButtonComponent";
import { CheckboxComponent } from "../pages/CheckboxComponent";
import { NumberInputComponent } from "../pages/NumberInputComponent";
export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route path="/" element={<TabsComponent />} />
        <Route path="/radioButton" element={<RadioButtonComponent />} />
        <Route path="/toggle" element={<ToggleComponent />} />
        <Route path="/checkBox" element={<CheckboxComponent />} />
        <Route path="/numberInput" element={<NumberInputComponent  />} />
      </Routes>
    
  );
}
