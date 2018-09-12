import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { theme, ThemedMixin } from '@dojo/framework/widget-core/mixins/Themed';
import {} from '@dojo/widgets/text-input';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/LabelInput.m.css';

interface LabelInputProps extends WidgetProperties {
    label?: string
    onChange?: (ev?: KeyboardEvent) => boolean | void;
}
interface StateMixin {
    readonly state: Readonly<any>;
    setState: (state: any) => void;
    onInput: (ev?: Event) => boolean | void;
}

function StateMixin<T extends new (...args: any[]) => WidgetBase>(Base: T):
    T & (new (...args: any[]) => StateMixin) {
    return class extends Base {
        private _state: any = { value: "" };

        public get state() {
            return this._state;
        }

        public setState(state: any): void {
            this._state = { ...this._state, ...state };
        }

        public onInput(ev?: Event): boolean | void {
            if (ev) {
                // if (ev.target)
                    // this.setState({ vlaue: ev.target.value });
                ev.stopPropagation();
            }
        }
    }
}


@theme(css)
export default class LabelInput extends StateMixin(ThemedMixin(WidgetBase))<LabelInputProps> {
    protected render() {
        return v("div", {
            classes: [
                this.theme(css.root),
                css.rootFixed
            ]
        }, [
                v("label", {
                    classes: [
                        this.theme(css.label)
                    ]
                }, [this.properties.label || "label"]),
                v("input", {
                    classes: this.theme(css.input),
                    oninput: this.onInput,
                    value: this.state.value
                })
            ]);
    }
}