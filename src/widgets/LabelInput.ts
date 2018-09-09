import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { theme, ThemedMixin, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/LabelInput.m.css';

interface LabelInputProps extends ThemedProperties {

}

@theme(css)
export default class LabelInput extends ThemedMixin(WidgetBase)<LabelInputProps> {
    protected render() {
        let styles = this.properties.theme || css;

    
        return v("div", {
            classes: styles.root
        }, [
                v("label", {
                    classes: [
                    ]
                }, ["你好"]),
                v("input", { classes: this.theme(styles.input) })
            ]);
    }
}