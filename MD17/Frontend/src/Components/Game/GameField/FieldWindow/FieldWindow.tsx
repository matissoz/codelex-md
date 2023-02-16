import React from "react";
import FieldWindowCSS from "./FieldWindow.module.scss";
import close from "../../../../assets/icon-close.svg";
import rock from "../../../../assets/icon-rock.svg";
import scissors from "../../../../assets/icon-scissors.svg";
import paper from "../../../../assets/icon-paper.svg";
import rules from "../../../../assets/image-rules.svg";


type Props ={
    value: string;
    result: string | undefined;
}
const FieldWindow = (({value, result}: Props) => {

    return (
        <div className={`
                ${FieldWindowCSS.field__player}
                ${result == undefined && `${FieldWindowCSS.field_active}`}
                ${result == 'Draw' && `${FieldWindowCSS.field_draw}`}
                ${result == 'Win' && `${FieldWindowCSS.field_win}`}
                ${result == 'Lost' && `${FieldWindowCSS.field_lost}`}
            `}>
                {value =="scissors" && <img src={scissors} width="150"/>}
                {value =="rock" && <img src={rock} width="150"/>}
                {value =="paper" && <img src={paper} width="150"/>}
        </div>
    )
})

export default FieldWindow;

