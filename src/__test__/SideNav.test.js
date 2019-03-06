import { mount } from "enzyme";
import React from "react";
import SideNav from "../components/Menu/SideNav";

describe("SideNav", () => {
    let props;
    let mountedSideNav;
    const sideNav = () => {
        if (!mountedSideNav) {
            mountedSideNav = mount(<SideNav {...props} />);
        }
        return mountedSideNav;
    };

    beforeEach(() => {
        props = {
            visible: undefined,
            children: undefined,
            onClose: undefined,
            id: undefined
        };
        mountedSideNav = undefined;
    });

    it("always renders a div", () => {
        const divs = sideNav().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    describe("rendered div", () => {
        it("renders children", () => {
            props.children = (
                <SideNav.Item id="test-children">
                    <span>Test</span>
                </SideNav.Item>
            );

            const children = sideNav().find(SideNav.Item);

            expect(children.length).toBe(1);
        });

        it("has width equal to 0 if invisible", () => {
            props.visible = false;

            const div = sideNav()
                .find("div")
                .first();

            expect(div).toHaveStyleRule("width", "0");
        });

        it("has width greater than 0 if visible", () => {
            props.visible = true;

            const div = sideNav()
                .find("div")
                .first();

            expect(div).not.toHaveStyleRule("width", "0");
        });
    });
});
