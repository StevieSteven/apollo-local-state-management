import React, {Component} from "react";
import {DataValue} from "react-apollo";

export interface ITitleInputComponentDispatchProps {
    changeTitleOfArticle: DataValue<{changeTitleOfArticle:string}, {title:string}>
}

export class TitleInputComponent extends Component<ITitleInputComponentDispatchProps, any> {

  public render() {
    const {changeTitleOfArticle} = this.props;

    const onBlur = (event: any) => {
      event.preventDefault();
        changeTitleOfArticle({
        variables: {
          title: event.target.value
        }
      })
    };

    return (
        <div>
          Input new Title and blur to save: <input type="text" onBlur={onBlur}/>
        </div>
    )
  }
}

