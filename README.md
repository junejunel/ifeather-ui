<p align="center">
    <a>
        <img width="200" src="./assets/logo.PNG">
    </a>
</p>

<h1>
IFeatherUI
    <h3>A lightweight Vue.js UI toolkit</h3>
</h1>

demo: [https://junejunel.github.io/ifeather-ui/](https://junejunel.github.io/ifeather-ui/)

# Install

Run the command below in your terminal to install IFeatherUI first
```
npm install ifeather-ui --save
```

# Usage

## Global Use
Import in your entry script file and register it
```javascript
import IFeatherUI from 'ifeather-ui'
import "ifeather-ui/lib/styles/ifeather-ui.css"

Vue.use(IFeatherUI)
```

### Example

```html
<l-button>click</l-button>
```

## On-demand Loading

Firstly, you should install `babel-plugin-component` in your project.
```
npm install babel-plugin-component
```

Configure your `.babelrc` file like this

```json
{
    "plugins": [
        ["component", {
            "libraryName": "ifeather-ui",
            "libDir": "lib",
            "styleLibrary": {
                "name": "styles",
                "base": false, // no base.css file
                "path": "[module].css"
            }
        }]
    ]
}
```

The you can import component on demand, and you don't need to care about importing styles, the babel plugin will do it automaticly.

```javascript
import Vue from 'vue'
import { Button } from 'ifeather-ui'

Vue.component('fe-button', Button)
```
