# Slider Control

## Description
>This package contains slider control.

## Install

    npm i https://github.com/Kaavian-Systems-Pvt-Ltd/slider-control.git

>>Install the above package in your package.json inside the react app folder .

>After installing the package you can import the slider into your app and make use of the slider-control.

# < SliderControl/>

For this slider control module we can give some of the arguments to customize it. Such as 
>>>><li>Width of the slider  
>>>><li>Minimum value  
>>>><li>Maximum value  
>>>><li>Set variable function  
>>>><li>Default value of the slider  

## Usage

### Sample code
```

import React, { useState } from "react";
import { SliderControl } from "@kaavian-sys/slider-control";

function App() {
  const [value, setValue] = useState(50);
  return (
    <div className="container">
      <SliderControl
        width={'100%'}
        defaultValue={value}
        min={0}
        max={100}
        onChange={setValue}
      />
    </div>
  );
}

export default App;
```
### Sample Modal 1
![slider-control](https://user-images.githubusercontent.com/115205743/211206039-15970aeb-d991-4afc-9627-790d9cf0fe7b.PNG)

### Sample Modal 2

![slider-control-modal](https://user-images.githubusercontent.com/115205743/211206207-dc6da265-fddd-4dee-802c-9027f62dd762.PNG)