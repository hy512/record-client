import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import { theme, ThemedMixin } from '@dojo/framework/widget-core/mixins/Themed';
import Button from '@dojo/widgets/button';
import themes from '@dojo/themes/dojo';
import FormPanel from '../widgets/FormPanel';
// import theme from '@dojo/themes/dojo';
import * as style from '../styles/Index.m.css';
// import myTheme from '../styles/Index.theme';
import LabelInput from '../widgets/LabelInput';
// import t from '../themes/dojo/theme';


@theme(style)
export default class Index extends ThemedMixin(WidgetBase) {
    protected render() {
        return v("div", [
            v("div", [
                w(FormPanel, {
                    title: "登录"
                }, [
                        w(LabelInput, {
                            label: "账号"
                        }),
                        w(LabelInput, {
                            label: "密码"
                        }),
                        w(Button, {
                            type: "button",
                            theme: themes,
                            extraClasses:  
                        }, ["提交"])
                    ])
            ])
        ]);
    }
}