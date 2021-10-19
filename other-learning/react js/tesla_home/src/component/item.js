import React from "react";
import Button from './Button';
import './item.css';
const Item = ({title,desc,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,first,twobtn}) => {
    return(
        <div className = "item">
        <div className = "item_container" style = {{
            backgroundImage : `url(${backgroundImg})`
        }}>
            <div className = "title_box">
                <p>{title}</p>
                <div className = "title_des">
                    <p>{desc}</p>
                </div>
            </div>
            <div className = "down_buttons">
                <Button imp = "primary" text = {leftBtnTxt} link = {leftBtnLink}/>
                {twobtn && (
                    <Button imp = "secondary" text = {rightBtnTxt} link = {rightBtnLink}/>
                )}
            </div>
        </div>
        </div>
    );

}
export default Item;