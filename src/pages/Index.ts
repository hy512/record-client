import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
// import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { theme, ThemedMixin } from '@dojo/framework/widget-core/mixins/Themed';
import Button from '@dojo/widgets/button';
import themes from '@dojo/themes/dojo';
import FormPanel from '../widgets/FormPanel';
import * as styles from './styles/Index.m.css';
import LabelInput from '../widgets/LabelInput';


interface StateMixin {
    readonly state: Readonly<any>;
    setState(state: any): void;
    submit(): void;
    inputted(val: any): void;
}

function StateMixin<T extends new (...args: any[]) => WidgetBase>(Base: T):
    T & (new (...args: any[]) => StateMixin) {
    return class extends Base {
        private _state: any;

        public setState(state: any): void {
            this._state = { ...this._state, ...state };
            this.invalidate();
        }
        public get state(): any {
            return this._state;
        }
        public submit(): void {
        }
        public inputted(val: any): void {
            this.setState(val);
        }
    }
}

@theme(styles)
export default class Index extends StateMixin(ThemedMixin(WidgetBase)) {
    protected render() {
        return v("div", {
            classes: this.theme(styles.root)
        }, [
                v("div", {
                    classes: this.theme(styles.content)
                }, [
                        w(FormPanel, {
                            title: "登录",
                            action: "http://localhost:9512/",
                            method: "post",
                            enctype: "multipart/form-data"
                        }, [
                                w(LabelInput, {
                                    label: "账号: ",
                                    name: "act"
                                }),
                                w(LabelInput, {
                                    label: "密码: ",
                                    type: "password",
                                    name: "pwd"
                                }),
                                w(Button, {
                                    type: "submit",
                                    theme: themes,
                                    extraClasses: { "root": styles.center },
                                    onClick: this.submit
                                }, ["提交"])
                            ])
                    ])
            ]);
    }
}