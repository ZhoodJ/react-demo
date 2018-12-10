### 基于webpack4的react项目基础构建

#### 一、安装node
步骤省略

#### 二、安装全局依赖
```
npm install webpack webpack-dev-server webpack-cli -g
```

#### 三、初始化项目
```
mkdir react-demo
cd react-demo
npm init -y
```

#### 四、安装react相关依赖
```
npm install react react-dom --save
```

#### 五、安装babel相关依赖
```
npm install babel-core babel-loader babel-preset-env babel-preset-react --save
```

#### 六、安装css、less相关loader
```
npm install css-loader style-loader less-loader less --save
```

#### 七、项目结构
react-demo  
&emsp;&emsp;|----dist (项目打包输出路径)  
&emsp;&emsp;&emsp;&emsp;|----index.html  
&emsp;&emsp;&emsp;&emsp;|----bundle.js (webpack打包后生成)  
&emsp;&emsp;|----src (源码文件夹)  
&emsp;&emsp;&emsp;&emsp;|----index.jsx (入口文件)  
&emsp;&emsp;&emsp;&emsp;|----component (组件文件夹)  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|----HelloWorld.jsx  
&emsp;&emsp;|----package.json (npm init生成文件)  
&emsp;&emsp;|----webpack.config.js (webpack配置文件)  
&emsp;&emsp;|----.babelrc (babel配置文件)  
按照该结构生成对应文件和文件夹
```
mkdir dist
mkdir -p src/component
touch ./dist/index.html ./src/component/HelloWorld.jsx ./src/index.jsx webpack.config.js .babelrc
```

#### 八、完善代码及配置
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>App</title>
</head>
<body>
<div id="root"></div>
<script src="bundle.js"></script>
</body>
</html>
```
HelloWorld.jsx
```
import React, {Component} from "react";

class HelloWorld extends Component{

    render(){
        return (
            <div>hello world</div>
        )
    }
}

export default HelloWorld;
```
index.jsx
```
import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./component/HelloWorld.jsx";

ReactDOM.render(<HelloWorld/>, document.getElementById("root"));
```
webpack.config.js
```
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(le|c)ss$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist/'),
        host: 'localhost',
        port: '3000',
        inline: true,
        open: true,
    },
}
```
.babelrc
```
{
  "presets": [
    "env",
    "react"
  ]
}
```
#### 九、修改package.json
```
"scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode development"
}
```

#### 十、运行
```
npm run start
```
    
