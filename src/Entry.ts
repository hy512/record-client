import '@dojo/framework/shim/browser';
import "./config/init.css";
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import {w} from '@dojo/framework/widget-core/d';

import Index from './pages/Index';

export default class Entry extends WidgetBase {
    protected render() {
        return w(Index,{});
    }
}