
## react-native-easy-picker

react-native-easy-picker 是一个单项选择的 picker，设计为非受阻组件，组件内部自己维护选择状态。

### Installation

```bash
yarn add react-native-easy-picker

react-native link react-native-vector-icons
```

### Usage

```js
import Picker from 'react-native-easy-picker';

<Picker
    iconColor='#333'
    initIndex={0}    // <-- default selected index
    data={[... new Array(4)].map((v, i) => ({
        id: i + 1,
        text: 'text-' + (i + 1),
        value: 'value-' + (i + 1),
    }))}
    onChange={item => console.log(item)}
    animationType='none'
    alpha={0.5}
    textStyle={{
        fontSize: 24,
    }}
    itemTextStyle={{
        color: '#333'
    }}
/>
```

### Props

![](./image/demo.gif)
