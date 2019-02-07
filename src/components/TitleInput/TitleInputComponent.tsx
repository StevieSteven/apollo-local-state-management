import React, {Component} from "react";

export interface ITitleInputComponentDispatchProps {
    changeTitleOfArticle: (title: string) => void
}

export class TitleInputComponent extends Component<ITitleInputComponentDispatchProps, any> {

    public render() {
        const {changeTitleOfArticle} = this.props;

        const onBlur = (event: any) => {
            event.preventDefault();
            changeTitleOfArticle(event.target.value)
        };

        return (
            <div>
                Input new Title and blur to save: <input type="text" onBlur={onBlur}/>
            </div>
        )
    }
}

