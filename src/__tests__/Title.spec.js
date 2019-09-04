import React from "react";
import {create} from "react-test-renderer";
import Title from "../App/Components/Charts/Title";

describe("Title component", () => {

    test("Matches the snapshot", () => {
        const title = create(<Title/>);
        expect(title.toJSON()).toMatchSnapshot();
    });

    test("Show the correct text", () => {
        const title = create(<Title>{'Random text'}</Title>);
        expect(title.toJSON().children[0]).toMatch('Random text')
    });
});

