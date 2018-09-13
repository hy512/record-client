import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { theme, ThemedMixin } from '@dojo/framework/widget-core/mixins/Themed';
import { v } from '@dojo/framework/widget-core/d';
import * as styles from './styles/FormPanel.m.css';

interface FormPanelProps extends WidgetProperties {
    title?: string;
    action?: string;
    method?: string;
    enctype?: string;
}

@theme(styles)
export default class FormPanel extends ThemedMixin(WidgetBase)<FormPanelProps> {
    protected render() {
        // let children: Array<DNode> = [];
        // if (typeof this.properties.title === "string") {
        //     children.push(v("div", {
        //         classes: this.theme(styles.title)
        //     }, [this.properties.title]));
        // }
        return v("div", {
            classes: this.theme(styles.root)
        }, [
                this.properties.title ? v("div", {
                    classes: this.theme(styles.title)
                }, [this.properties.title]) : null,
                v("form", {
                    method: this.properties.method,
                    action: this.properties.action,
                    enctype: this.properties.enctype,
                    classes: this.theme(styles.content)
                }, this.children)
            ]);
    }
}