import { mount } from "enzyme";
import React from "react";
import BottomNavBar from "../common/Menu/BottomNavBar";
import Icons from "../common/Icons";

describe("BottomNavBar", () => {
    let props;
    let mountedBottomNavBar;
    const bottomNavBar = () => {
        if (!mountedBottomNavBar) {
            mountedBottomNavBar = mount(<BottomNavBar {...props} />);
        }
        return mountedBottomNavBar;
    };

    beforeEach(() => {
        props = {
            id: undefined,
            items: undefined
        };
        mountedBottomNavBar = undefined;
    });

    it("always renders a nav", () => {
        const nav = bottomNavBar().find("nav");
        expect(nav.length).toBeGreaterThan(0);
    });

    describe("rendered nav", () => {
        it("renders items", () => {
            props.items = [
                {
                    props: {
                        id: "item-1"
                    },
                    label: "Item 1",
                    icon: Icons.Bookmarks
                },
                {
                    props: {
                        id: "item-2"
                    },

                    label: "Item 2",
                    icon: Icons.Search
                },
                {
                    props: {
                        id: "item-3"
                    },

                    label: "Item 3",
                    icon: Icons.Share
                }
            ];

            const nav = bottomNavBar().find("nav");
            expect(nav.children().length).toBe(3);
        });
    });
});
