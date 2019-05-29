/**
 * Created by qiguoqiang on 2019/5/27.
 */
//const greeter = require('./Greeter');
//document.querySelector('#root').appendChild(greeter());

import React from 'react';
import {render} from 'react-dom';
import Greeter from  './Greeter';
import './main.css'

render(<Greeter/>, document.getElementById('root'))