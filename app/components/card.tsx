import { Card as CardUi, CardBody, CardHeader, Divider } from "@heroui/react";
import { JSX } from "react";

type props = {
    title: string;
    children: JSX.Element;
}

export default function Card(props: props) {
    const { children, title } = props;
    return (
        <CardUi className="p-5">
            <CardHeader>
                <h2 className="font-bold  text-2xl">
                    {title}
                </h2>
            </CardHeader>
            <Divider/>
            <CardBody className="pt-7">
                {children}
            </CardBody>
        </CardUi>
    );
}
