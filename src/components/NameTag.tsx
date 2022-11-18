import React from "react"
import NTstyles from "./styles/NameTag.module.css"
import { Image } from "react-bootstrap";
export interface NameTagProps {
    name: string;
    bio: string;
    img_path: string;
}

export default function NameTag(props: NameTagProps) {

    return (
    <div className={NTstyles.box}>
    <header>{props.name}</header>
    </div>
    
    );
}