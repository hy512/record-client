import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import TitlePane from '@dojo/widgets/title-pane';
import theme from '@dojo/themes/dojo';
// import  * as style from '../styles/Index.m.css';
import myTheme from '../styles/Index.theme';
import LabelInput from '../widgets/LabelInput';

export default class extends WidgetBase {
    protected render() {
        return v("div", [
            v("div", [
                v("h1", ["登录"]),
                w(TitlePane, {
                    title: "Hello",
                    theme: theme
                }, [
                        "你好",
                        "世界"
                    ]),
                w(LabelInput, {theme: myTheme})
            ])
        ]);
    }
}