import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { theme, ThemedMixin } from '@dojo/framework/widget-core/mixins/Themed';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/LabelInput.m.css';

interface LabelInputProps extends WidgetProperties {
    label?: string
}

@theme(css)
export default class LabelInput extends ThemedMixin(WidgetBase)<LabelInputProps> {
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
                v("input", { classes: this.theme(css.input) })
            ]);
    }
}