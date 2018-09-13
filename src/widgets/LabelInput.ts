import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { theme, ThemedMixin } from '@dojo/framework/widget-core/mixins/Themed';
import { } from '@dojo/widgets/text-input';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/LabelInput.m.css';

interface LabelInputProps extends WidgetProperties {
    id?: string;
    name?: string;
    label?: string;
    onInput?: (ev?: Event) => boolean | void;
    type?: string;
    multiple?: boolean;
    placeholder?: string;
    value?: string;
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
                if (ev.target instanceof HTMLInputElement) {
                    let input: HTMLInputElement = ev.target;
                    this.setState({ value: input.value });
                    this.invalidate();
                }
                ev.stopPropagation();
            }
        }
    }
}


@theme(css)
export default class LabelInput extends StateMixin(ThemedMixin(WidgetBase))<LabelInputProps> {
    protected render() {
        let value: string = this.properties.value ?
            this.properties.value : this.state.value;

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
                }, [
                        this.properties.label || "label",
                        v("input", {
                            classes: this.theme(css.input),
                            id: this.properties.id,
                            name: this.properties.name,
                            oninput: this.onInput,
                            value,
                            type: this.properties.type,
                            placeholder: this.properties.placeholder,
                            multiple: this.properties.multiple
                        })
                    ])
            ]);
    }
}